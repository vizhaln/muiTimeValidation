import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import './App.css';

function App() {
  const [minValue, setMinValue] = React.useState(new Date('2020-01-01 12:00'));
  const [maxValue, setMaxValue] = React.useState(new Date('2020-01-01 12:00'));
  console.log(minValue.getTime() + ' ' + maxValue.getTime());

  const validateTime = newValue => {
    setMaxValue(newValue);

    if (minValue.getTime() > maxValue.getTime()) {
      alert('start time should be smaller than end time!');
    }
  }

  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
          renderInput={(params) => <TextField {...params} />}
          value={minValue}
          label="min time"
          onChange={(newValue) => {
            setMinValue(newValue);
          }}
        />
        <TimePicker
          renderInput={(params) => <TextField {...params} />}
          value={maxValue}
          label="max time"
          onChange={(newValue) => {
            validateTime(newValue);
          }}
        />
      </LocalizationProvider>

    </div>
  );
}

export default App;
