import Alert from '@mui/material/Alert';
import {IconButton} from "@mui/material";
import Collapse from '@mui/material/Collapse';
import Box from "@mui/material/Box";
import CloseIcon from '@mui/icons-material/Close';

const ErrorAlert = ({open, setOpen}) => {

    return (<Box sx={{width: '100%'}}>
        <Collapse in={open}>
            <Alert severity="error"
                   action={
                       <IconButton
                           aria-label="close"
                           color="inherit"
                           size="small"
                           onClick={() => {
                               setOpen(false);
                           }}
                       >
                           <CloseIcon fontSize="inherit"/>
                       </IconButton>
                   }
                   sx={{mb: 2}}
            >
                Сталася помилка
            </Alert>
        </Collapse>
    </Box>)
}
export default ErrorAlert;