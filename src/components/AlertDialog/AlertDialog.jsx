import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({ open, setOpen, setIsConfirm }) {

  const handleDisagree = () => {
    setIsConfirm(false)
    setOpen(false)
  }

  const handleAgree = () => {
    setIsConfirm(true)
    setOpen(false)
  }

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Account Deletion Confirmation"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to proceed with deleting your account? This action cannot be undone and all associated data will be permanently removed from our system.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDisagree}>Disagree</Button>
          <Button onClick={handleAgree} autoFocus sx={{ color: 'tomato' }}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}