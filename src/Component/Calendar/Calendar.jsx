import { useState, Fragment } from "react";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import classnames from "classnames";

export default function Calendar() {
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());
  let [meetings, setMeetings] = useState([]);

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  const [newMeeting, setNewMeeting] = useState({
    name: "",
    startDatetime: "",
    endDatetime: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMeeting((prevMeeting) => ({
      ...prevMeeting,
      [name]: value,
    }));
  };

  const handleAddMeeting = () => {
    const { name, startDatetime, endDatetime } = newMeeting;
    if (name && startDatetime && endDatetime) {
      const parsedStartDatetime = parseISO(startDatetime);
      const parsedEndDatetime = parseISO(endDatetime);

      const newMeetingData = {
        id: meetings.length + 1,
        name,
        startDatetime: parsedStartDatetime.toISOString(),
        endDatetime: parsedEndDatetime.toISOString(),
      };

      setMeetings([...meetings, newMeetingData]);
      setNewMeeting({
        name: "",
        startDatetime: "",
        endDatetime: "",
      });
    }
  };

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }
  let selectedDayMeetings = meetings.filter((meeting) =>
    isSameDay(parseISO(meeting.startDatetime), selectedDay)
  );

  return (
    <div className="pt-4 ml-4 w-full h-96">
      <div className=" px-4 sm:px-7 md:w-fit md:px-6">
        <div className="md:grid md:grid-cols-7  md:divide-gray-200">
          <div className="md:pr-14 md:col-span-6 w-96">
            <div className=" flex  items-center">
              <h2 className="flex-auto font-semibold text-gray-900">
                {format(firstDayCurrentMonth, "MMMM yyyy")}
              </h2>
              <button
                type="button"
                onClick={previousMonth}
                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Previous month</span>
                <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                onClick={nextMonth}
                type="button"
                className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Next month</span>
                <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            <div className="grid grid-cols-7 mt-10  text-xs leading-6 text-center text-gray-500">
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className="grid grid-cols-7 mt-2 text-sm">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classnames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    "py-1.5"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={classnames(
                      isEqual(day, selectedDay) && "text-white",
                      !isEqual(day, selectedDay) &&
                        isToday(day) &&
                        "text-red-500",
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        "text-gray-900",
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        "text-gray-400",
                      isEqual(day, selectedDay) && isToday(day) && "bg-red-500",
                      isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        "bg-gray-900",
                      !isEqual(day, selectedDay) && "hover:bg-gray-200",
                      (isEqual(day, selectedDay) || isToday(day)) &&
                        "font-semibold",
                      "mx-auto   h-8 w-8 items-center justify-center rounded-full"
                    )}
                  >
                    <time dateTime={format(day, "yyyy-MM-dd")}>
                      {format(day, "d")}
                    </time>
                  </button>

                  <div className="w-1 h-1 mx-auto mt-1">
                    {meetings.some((meeting) =>
                      isSameDay(parseISO(meeting.startDatetime), day)
                    ) && (
                      <div className="w-1 h-1 rounded-full bg-sky-500"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-7 mt-6 md:mt-0">
            <section className="md:pl-5 mt-11">
              <h2 className="font-semibold text-gray-900">
                Schedule for{" "}
                <time dateTime={format(selectedDay, "yyyy-MM-dd")}>
                  {format(selectedDay, "MMM dd, yyy")}
                </time>
              </h2>
              <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
                {selectedDayMeetings.length > 0 ? (
                  selectedDayMeetings.map((meeting) => (
                    <Meeting meeting={meeting} key={meeting.id} />
                  ))
                ) : (
                  <p>No meetings for today.</p>
                )}
              </ol>
            </section>
            <section className="md:pl-5 mt-8">
              <h2 className="font-semibold text-gray-900">Add New Meeting</h2>
              <form
                className="mt-4 space-y-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <label
                    htmlFor="meetingName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="meetingName"
                    name="name"
                    value={newMeeting.name}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="startDatetime"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Start Time
                  </label>
                  <input
                    type="datetime-local"
                    id="startDatetime"
                    name="startDatetime"
                    value={newMeeting.startDatetime}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="endDatetime"
                    className="block text-sm font-medium text-gray-700"
                  >
                    End Time
                  </label>
                  <input
                    type="datetime-local"
                    id="endDatetime"
                    name="endDatetime"
                    value={newMeeting.endDatetime}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleAddMeeting}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md ml-24 hover:bg-blue-600"
                >
                  Add Meeting
                </button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

function Meeting({ meeting }) {
  let startDateTime = parseISO(meeting.startDatetime);
  let endDateTime = parseISO(meeting.endDatetime);

  return (
    <li className="items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100">
      <div>
        <p className="text-gray-900">{meeting.name}</p>
        <p className="mt-0.5">
          <time dateTime={meeting.startDatetime}>
            {format(startDateTime, "h:mm a")}
          </time>{" "}
          -{" "}
          <time dateTime={meeting.endDatetime}>
            {format(endDateTime, "h:mm a")}
          </time>
        </p>
      </div>
    </li>
  );
}

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];
