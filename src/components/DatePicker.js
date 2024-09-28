"use client"

import { useContext, useState } from 'react';
import { DateContext } from '../context/DateContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Form, Row, Col } from 'react-bootstrap';

const CustomDatePicker = () => {
  const { recurrence, setRecurrence, selectedDates, setSelectedDates } = useContext(DateContext);
  const [startDate, setStartDate] = useState(new Date());

  const handleRecurrenceChange = (e) => {
    setRecurrence({
      ...recurrence,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (date) => {
    setStartDate(date);
    setRecurrence({ ...recurrence, startDate: date });
  };

  return (
    <div className="p-3 border rounded">
      <Row>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Start Date</Form.Label>
            <DatePicker
              selected={startDate}
              onChange={handleDateChange}
              className="form-control"
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group>
            <Form.Label>Recurrence Type</Form.Label>
            <Form.Control as="select" name="type" onChange={handleRecurrenceChange}>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>


      <Row>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Interval</Form.Label>
            <Form.Control
              type="number"
              name="interval"
              value={recurrence.interval}
              onChange={handleRecurrenceChange}
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group>
            <Form.Label>End Date</Form.Label>
            <DatePicker
              selected={recurrence.endDate}
              onChange={(date) => setRecurrence({ ...recurrence, endDate: date })}
              className="form-control"
              placeholderText="Optional"
            />
          </Form.Group>
        </Col>
      </Row>

    </div>
  );
};

export default CustomDatePicker;
