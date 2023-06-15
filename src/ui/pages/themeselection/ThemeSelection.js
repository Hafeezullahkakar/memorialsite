import React ,{useState} from 'react';
import theme1 from '../../../assets/themeselection/Theme1.png'
import theme2 from '../../../assets/themeselection/Theme2.png'
import theme3 from '../../../assets/themeselection/Theme3.png'
import './ThemeSelection.css';
import FilterCard from '../../components/filtercard/FilterCard';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ThemeSelection = () => {
    const [open, setOpen] = React.useState(false);
    const [created, setCreated] = React.useState(false);
    const [width, setWidth] = React.useState('lg');

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const handleCreated = () => {
      setCreated(true);
    };
  return (
    <div  className={`theme-selection-container`} >
      <div className="filter-bar">
       <FilterCard/>
      </div>
      <div className="theme-cards-container">
        {/* Render your theme cards here */}
        {/* Example: */}
        <div className="theme-card" onClick={handleClickOpen}>
          <img src={theme1} alt="Theme 1" />
          
        </div>
        <div className="theme-card">
          <img src={theme1} alt="Theme 1" />
          
        </div>
      
        <div className="theme-card">
          <img src={theme1} alt="Theme 1" />
          
        </div>
        <div className="theme-card">
          <img src={theme2} alt="Theme 1" />
          
        </div>
        <div className="theme-card">
          <img src={theme2} alt="Theme 1" />
          
        </div>
        <div className="theme-card">
          <img src={theme2} alt="Theme 1" />
          
        </div>
        <div className="theme-card">
          <img src={theme3} alt="Theme 1" />
          
        </div>
        <div className="theme-card">
          <img src={theme3} alt="Theme 1" />
          
        </div>
        <div className="theme-card">
          <img src={theme3} alt="Theme 1" />
          
        </div>
        {/* Repeat the above card structure for each theme */}
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        maxWidth={width}
        onClose={handleClose}
        sx={{
            backdropFilter: "blur(5px) sepia(5%)",
          }}
          // 👇 Props passed to Paper (modal content)
          PaperProps={{ sx: { borderRadius: "15px" } }}
        aria-describedby="alert-dialog-slide-description"
      >
    
        <div className='d-content'>
          <p className='dialog-content'>
           {created?"Maria’s online memorial successfully created.":"Continue with the selected template?"}   
          </p>
        </div>
        <div className='actions'>
          {
            created?(
              
          <button className='continueBtn' onClick={handleClose}>Continue</button>
            ):(
               <>
                <button className='chooseBtn' onClick={handleClose}>Choose another</button>
          <button className='continueBtn' onClick={handleCreated}>Continue</button>
               </>
            )
          }
        </div>
      </Dialog>
    </div>
  );
};

export default ThemeSelection;
