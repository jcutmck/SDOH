import { Button as MuiButton } from '@mui/material';

export const SubmitButton = ({text, onClick}) => {

    return(
        <MuiButton
        variant="contained"
        onClick={onClick}
        style={{ backgroundColor: '#f77f00', color: 'white', top: '24px' }}
        > 
            {text}
        </MuiButton>
    );
}
