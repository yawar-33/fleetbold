import * as React from 'react';
// import Button from '@mui/joy/Button';
// import List from '@mui/joy/List';
// import ListItem from '@mui/joy/ListItem';
// import FormControl from '@mui/joy/FormControl';
// import FormLabel from '@mui/joy/FormLabel';
// import Switch from '@mui/joy/Switch';
// import Modal from '@mui/joy/Modal';
// import ModalDialog, { ModalDialogProps } from '@mui/joy/ModalDialog';
// import ModalClose from '@mui/joy/ModalClose';
// import DialogTitle from '@mui/joy/DialogTitle';
// import Stack from '@mui/joy/Stack';

export default function DialogVerticalScroll({open, setOpen, children}:any) {
  const [layout, setLayout] = React.useState<any['layout'] | undefined>(
    undefined,
  );

  React.useEffect(() => {

    if(open){
        setLayout('center')
    }
    else{
        setLayout(undefined)
    }
  
  }, [open]);


  const [scroll, setScroll] = React.useState<boolean>(true);
  return (
    <React.Fragment>
     
    </React.Fragment>
  );
}