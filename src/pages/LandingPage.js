import React, {useState, useEffect} from 'react';
import { SubmitButton } from '../components/Button';
import { TextField } from '@mui/material';


function VerifyVisit() {   
    const [currentPage, setCurrentPage] = useState('landingpage');
    const [isVerified, setIsVerified] = useState(false);

    
    const handleClick = () => {
        // Define what happens when the button is clicked
        console.log('Button clicked on LandingPage!');
    };

      
    return (
      <div>
        <h1>"This is the Landing Page"</h1>
        <p>Please enter information to verify your visit for today</p>
        <div className="py-1">
            <TextField id="visittype" label="First Name" variant="filled" />
        </div> 
        <div className="py-1">
            <TextField id="lname" label="Last Name" variant="filled" />
        </div>
        <div className="py-1">
            <TextField id="dob" label="Date of Birth" variant="filled" />
        </div> 
        <div>
            <SubmitButton text="Verify Visit" onClick={handleClick}/>
        </div>

      </div>
  );
}

export default VerifyVisit;
