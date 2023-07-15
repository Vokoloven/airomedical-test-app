import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useEffect } from 'react';
import { useBeerStore } from 'zustandStore';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const CustomizedSnackbars = () => {
    const [open, setOpen] = React.useState(false);
    const { loading } = useBeerStore((state) => state);

    useEffect(() => {
        if (loading.status === 'failed') {
            setOpen(true);
        }
    }, [loading.status]);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
                <Alert
                    onClose={handleClose}
                    severity="error"
                    sx={{ width: '100%' }}
                >
                    {loading.errorMessage}
                </Alert>
            </Snackbar>
        </Stack>
    );
};
