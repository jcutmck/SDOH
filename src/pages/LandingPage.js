    import React, {useState, useEffect} from 'react';
    import { useNavigate } from 'react-router-dom';
    import { SubmitButton } from '../components/Button';
    //import { TextField } from '@mui/material';
    import ReusableForm from '../components/FormsTemplate';


    function VerifyVisit() {   

        //const [currentPage, setCurrentPage] = useState('landingpage');
        //const [failVerify, setFailVerify] = useState(false);
        const [isVerified, setIsVerified] = useState(false);
        const [isLoading, setIsLoading] = useState(true);
        const [fName, setFName] = useState('');
        const [lName, setLName] = useState('');
        const [dob, setDob] = useState('');
        
        const navigate = useNavigate();

        const initialValues = { firstName: '', lastName: '' };

        const fields = [
            { name: 'firstName', label: 'First Name' },
            { name: 'lastName', label: 'Last Name' },
            { name: 'dob', label: 'Date of Birth', type: 'date' },
        ];
            
        const handleSubmit  = (values) => {
            fetch('https://uhsvtsdohdapp01.utmck.edu:5000/api/verify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.redirectTo === '/success') {
                    setIsVerified(true);
                }
            })
            .catch(error => {
                // Handle errors
                console.error(error);
            });
        };

        useEffect(() => {
            window.addEventListener('load', () => {
            setIsLoading(false);
            });
            return () => {
            window.removeEventListener('load', () => {});
            };
        }, []);

        useEffect(() => {
            console.log('Verified Status: ', isVerified);
            if(isVerified) {
                // Navigate to fsform.js with values as state
                navigate('/fsform', { state: { isVerified } }); 
            }
        }, [isVerified, navigate]);
        
        
        return (
            <div>
                <h1>This is the Validation Page - v0.1</h1>
                <ReusableForm
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    fields={fields}
                    SubmitButton={(props) => (
                        <SubmitButton {...props} text="Verify Visit" />
                    )}
                />
            </div>
        );
    }

    export default VerifyVisit;