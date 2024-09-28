'use client';

import { useContext, useEffect } from 'react';
import { DateContext } from '../context/DateContext';

const PreviewDates = () => {
  const { recurrence, selectedDates, setSelectedDates } = useContext(DateContext);

  const generateRecurringDates = () => {
    const dates = [];
    let currentDate = recurrence.startDate;
    
    if (!currentDate) return;
    
    while (!recurrence.endDate || currentDate <= recurrence.endDate) {
      dates.push(new Date(currentDate)); 
      
      if (recurrence.type === 'daily') {
        currentDate.setDate(currentDate.getDate() + recurrence.interval);
      } else if (recurrence.type === 'weekly') {
        currentDate.setDate(currentDate.getDate() + 7 * recurrence.interval);
      } else if (recurrence.type === 'monthly') {
        currentDate.setMonth(currentDate.getMonth() + recurrence.interval);
      } else if (recurrence.type === 'yearly') {
        currentDate.setFullYear(currentDate.getFullYear() + recurrence.interval);
      }
    }
    
    setSelectedDates(dates);
  };

  useEffect(() => {
    generateRecurringDates();
  }, [recurrence]);

  return (
    <div className="mt-4">
      <h5>Preview Dates</h5>
      <ul>
        {selectedDates.map((date, idx) => (
          <li key={idx}>
            📅 {date.toDateString()} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PreviewDates;
