import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import "./progress22.css";

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress size={600} variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography sx={{fontSize: '8rem'}} variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function CircularWithValueLabel() {
  const [progress, setProgress] = React.useState(0);
  const [value, setValue] = React.useState(0);

  const [isDisabled, setIsDisabled] = React.useState(false);

  ;React.useEffect(() => {
    setProgress(Number(localStorage.getItem("progress")));
    setValue(Number(localStorage.getItem("value")));
  }, []);

  React.useEffect(() => {
    localStorage.setItem("progress", progress);
    localStorage.setItem("value", value);
  }, [progress, value])

 
  const handleClick = () => {
    setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 0.273972602739726));
    setValue(value + 1);

    setIsDisabled(true); // Disable the button
    setTimeout(() => {
      setIsDisabled(false); // Enable the button after 30 seconds
    }, 3000);
    
  };
  
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <CircularProgressWithLabel value={progress} />
      <Button variant="contained" onClick={handleClick} >
        Increase Progresss
      </Button>

      <p className='here'> Win day {value}</p>
    </Box>
  );
}
