import 'bootstrap/dist/css/bootstrap.min.css';
import CustomDatePicker from '../components/DatePicker';
import PreviewDates from '../components/PreviewDates';
import { DateProvider } from '../context/DateContext';

export default function Home() {
  return (
    <DateProvider>
      <div className="container mt-4">
        <header className="mb-4 text-center">
          <h1 className="display-4">Date Picker with Recurrence</h1>
          <p className="lead">Select your start date, end date, and recurrence options below.</p>
        </header>
        
        <div className="card shadow mb-4">
          <div className="card-body">
            <h5 className="card-title">Select Dates</h5>
            <CustomDatePicker />
          </div>
        </div>

        <div className="card shadow mb-4">
          <div className="card-body">
            <h5 className="card-title">Preview Selected Dates</h5>
            <PreviewDates />
          </div>
        </div>
      </div>
    </DateProvider>
  );
}
