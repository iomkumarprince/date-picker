'use client';

import { createContext, useState } from 'react';

export const DateContext = createContext();

export const DateProvider = ({ children }) => {
  const [selectedDates, setSelectedDates] = useState([]);
  const [recurrence, setRecurrence] = useState({
    type: 'daily', 
    interval: 1,
    specificDays: [],
    nthDay: null,
    startDate: null,
    endDate: null,
  });

  return (
    <DateContext.Provider value={{ selectedDates, setSelectedDates, recurrence, setRecurrence }}>
      {children}
    </DateContext.Provider>
  );
};
