import React, { useState } from "react";
import { Calendar, Modal, Form, Input, Button } from "antd";
import moment from "moment";

export const Calendar1 = () => {
  const [events, setEvents] = useState([]);
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = (value) => {
    setVisible(true);
    form.setFieldsValue({
      date: value || moment(), // Use the selected date or default to current date
    });
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onFinish = (values) => {
    const newEvent = {
      date: values.date.format("YYYY-MM-DD"),
      title: values.title,
    };

    setEvents([...events, newEvent]);
    setVisible(false);
  };

  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  return (
    <>
      <Calendar
        className="ml-[250px]"
        onPanelChange={onPanelChange}
        dateCellRender={(value) => {
          const date = value.format("YYYY-MM-DD");
          const event = events.find((event) => event.date === date);

          return event ? (
            <div onClick={() => showModal(value)}>
              <p>{event.title}</p>
            </div>
          ) : null;
        }}
      />

      {/* <Button type="primary" onClick={showModal}>
        Add Event
      </Button> */}
      <Modal
        title="Add Event"
        visible={visible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form onFinish={onFinish}>
          <Form.Item name="date" hidden initialValue={moment()}></Form.Item>
          <Form.Item
            name="title"
            label="Event Title"
            rules={[
              { required: true, message: "Please enter the event title!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Event
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
