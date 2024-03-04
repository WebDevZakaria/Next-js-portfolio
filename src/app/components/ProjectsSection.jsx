"use client"
import { useState } from 'react';

import Handymen from '../../../public/images/projects/handymen.png'
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Ecommerce from '../../../public/images/projects/ecommerce.png'
import Link from "next/link";
import Restaurant from '../../../public/images/projects/restaurant.png'
import Online from '../../../public/images/projects/onlinecourse.png'
import Phonecommerce from '../../../public/images/projects/phone.png'
import Netflix from '../../../public/images/projects/netflix.png'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
//import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import EcommerceVideo from './EcommerceVideo'
import PhoneVideo from './PhoneVideo'





const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


const ProjectsSection = () => {

  const [projects,setProjects] = useState([])
  const [active,setActive] = useState(0)
  const [active2,setActive2] = useState(0)
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };


  const handleClick = (e,index)=>{
    setItem({name:e.target.textContent})
    setActive(index)

  }


  const handleClick2 = (e,index)=>{
    setItem({name:e.target.textContent})
    setActive2(index)

  }





  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul  className="grid md:grid-cols-3 gap-8 md:gap-12">

        {/* handy men  */}
          <li>

<div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{backgroundImage: `url(${Handymen.src})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href='https://github.com/WebDevZakaria/deploysearch-for-handymen'
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            target="_blank"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        
            <Link
            href='https://web-production-0fe3.up.railway.app/'
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            target="_blank"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
         
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">Search for handyman from Home 
            </h5>
        <p className="text-[#ADB7BE]">web app with Django ,you can choose your location and find the best handymen for you</p>
      </div>
    </div>


          </li>

 {/* ecommerce django and react */}
          <li>

<div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{backgroundImage: `url(${Ecommerce.src})`, backgroundSize: "cover" }}
      >
        
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href='https://github.com/WebDevZakaria/Ecommerce'
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            target="_blank"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
            <Link
            href='#projects'
            onClick={handleClickOpen}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>


          <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >

        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
         Django and React e-commerce website presentation
        </DialogTitle>

        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          
        </IconButton>
        
        <DialogContent dividers>
          
          <Typography gutterBottom>
          <EcommerceVideo  width='5800' height='12900'   class="w-full"  />
           
          </Typography>
          
          
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            close
          </Button>
        </DialogActions>
      </BootstrapDialog>
         
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">Django and React e-commerce website 
            </h5>
        <p className="text-[#ADB7BE]">Django and React e-commerce website with admin dashboard  </p> 
      </div>
    </div>


          </li>

 {/* Restaurant app  */}
 <li>

<div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{backgroundImage: `url(${Restaurant.src})`, backgroundSize: "cover" }}
      >
        
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href='https://github.com/WebDevZakaria/Restaurant-app'
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            target="_blank"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        
            <Link
            href='https://resonant-pothos-157e14.netlify.app/'
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            target="_blank"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
         
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">Restaurant app 
            </h5>
        <p className="text-[#ADB7BE]">this is front end restaurant app with tailwind css, framer motion and react js  </p> 
      </div>
    </div>


</li>

 {/* Online courses app  */}
 <li>

<div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{backgroundImage: `url(${Online.src})`, backgroundSize: "cover" }}
      >
        
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href='https://github.com/WebDevZakaria/E-Learning-Website'
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            target="_blank"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        
            <Link
            href='https://dashing-douhua-c7111c.netlify.app/'
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            target="_blank"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
         
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">Online Learning website 
            </h5>
        <p className="text-[#ADB7BE]">online Learning website with tialwind css and react  </p> 
      </div>
    </div>


</li>

{/* Phone store app  */}
<li>

<div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{backgroundImage: `url(${Phonecommerce.src})`, backgroundSize: "cover" }}
      >
        
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href='https://github.com/WebDevZakaria/phonestore'
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            target="_blank"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        
            <Link
            href='#projects'
            onClick={handleClickOpen2}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>



          <BootstrapDialog
        onClose={handleClose2}
        aria-labelledby="customized-dialog-title"
        open={open2}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
         Phone Store website presentation
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose2}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          
        </IconButton>
        
        <DialogContent dividers>
           
          <Typography gutterBottom>
          <PhoneVideo  width='5800' height='12900'  class="w-full"  />
           
          </Typography>
          
          
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose2}>
            close
          </Button>
        </DialogActions>
      </BootstrapDialog>





         
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">Phone Store  Website
            </h5>
        <p className="text-[#ADB7BE]">i build full phone store website using django  </p> 
      </div>
    </div>


</li>


{/* Netflix app  */}
<li>

<div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{backgroundImage: `url(${Netflix.src})`, backgroundSize: "cover" }}
      >
        
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href='https://github.com/WebDevZakaria/Netflix-clone'
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            target="_blank"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        
            <Link
            href='https://incredible-chebakia-bf8687.netlify.app/'
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            target="_blank"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
         
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">Netflix Clone 
            </h5>
        <p className="text-[#ADB7BE]">Netflix clone with tailwind css ,React js and Firebase  </p> 
      </div>
    </div>


</li>

      </ul>
      
    </section>
  );
};

export default ProjectsSection;
