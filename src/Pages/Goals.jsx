import React, { useState } from "react";
import { Button, DatePicker, Table, Popconfirm } from "antd";
import moment from "moment";

// import "antd/dist/antd.css";

export const Goals = () => {
  const [goalInput, setGoalInput] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [goalData, setGoalData] = useState([]);

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Goal",
      dataIndex: "goal",
      key: "goal",
      className: "ant-table-cell-goal", // Add a custom class to the cell
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <span>
          <Popconfirm
            title="Are you sure you want to remove this goal?"
            onConfirm={() => handleRemoveGoal(record.key)}
            okText="Yes"
            cancelText="No"
          >
            {record.status !== "Accomplished" && (
              <Button type="link" danger>
                Remove
              </Button>
            )}
          </Popconfirm>

          {record.status !== "Accomplished" && (
            <Button type="link" onClick={() => handleCompleteGoal(record.key)}>
              Complete
            </Button>
          )}
          {record.status == "Accomplished" && <p>Accomplished</p>}
        </span>
      ),
    },
  ];

  const handleDatePickerChange = (date) => {
    setSelectedDate(date);
  };

  const setGoal = () => {
    if (selectedDate && goalInput) {
      const formattedDate = moment(selectedDate).format("YYYY-MM-DD");
      const newGoalData = [
        ...goalData,
        { key: goalData.length, date: formattedDate, goal: goalInput },
      ];
      setGoalData(newGoalData);
      setGoalInput("");
    }
  };

  const handleRemoveGoal = (key) => {
    const updatedGoalData = goalData.filter((goal) => goal.key !== key);
    setGoalData(updatedGoalData);
  };

  const handleCompleteGoal = (key) => {
    const updatedGoalData = goalData.map((goal) =>
      goal.key === key ? { ...goal, status: "Accomplished" } : goal
    );
    setGoalData(updatedGoalData);
  };

  return (
    <div>
      <div className="text-center text-2xl pt-6 text-blue-600 font-sans">
        Add Your Goals
      </div>
      <div className="ml-[810px] mt-12">
        <DatePicker onChange={handleDatePickerChange} />
      </div>
      <div className="mt-6 justify-center items-center text-center mr-48">
        <input
          value={goalInput}
          onChange={(e) => setGoalInput(e.target.value)}
          placeholder="Write About Your Goal"
          className="ml-60 w-96 h-10 pl-1 outline-gray-500 outline outline-2 outline-offset-2 rounded-md"
        />

        <Button
          onClick={setGoal}
          className="ml-[820px] mt-5 w-36 h-10 flex justify-center items-center bg-blue-500 rounded-2xl text-white"
        >
          Set Goal!
        </Button>
        <div className="col-end w-[800px] flex ml-[500px] h-48 mt-10">
          {" "}
          <Table
            className="w-[800px] h-96 outline-10 outline-black"
            columns={columns}
            dataSource={goalData}
          />
        </div>
      </div>
    </div>
  );
};
