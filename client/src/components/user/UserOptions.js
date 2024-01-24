import React, { Fragment } from 'react'
import './useroptions.css'
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { useState,useEffect } from 'react'
import profile from '..//..//images//Profile.png'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ListAltIcon from '@mui/icons-material/ListAlt';
import {dispatch,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router'
import { logout } from '../../actions/userAction';
import { toast } from 'react-toastify';
const UserOptions = ({user}) => {
    const [open, setOpen] = useState(false);
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const options=[

        
   
        
        {icon:<ExitToAppIcon/>,name:'Logout',function:Logout}

    ]
   
    
    function Logout() {
        
        dispatch(logout());
        toast.success('Logged out successfully');
        
        
      }
    function account(){
        navigate('/account')
    }
  return (
    <Fragment>
    <SpeedDial
    className='speedDial'
       ariaLabel="SpeedDial basic example"
       onClose={()=>setOpen(false)}
         onOpen={()=>setOpen(true)}
            open={open}
            direction='down'
            icon={
                <img
                className='speedDialIcon'
                src={user.image.url ?user.image.url: profile}
                alt='profile'/>

            }
      > 
        {options.map((item)=>(
            <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.function}

            />
        ))}


        
    </SpeedDial>

    </Fragment>
  )
}

export default UserOptions