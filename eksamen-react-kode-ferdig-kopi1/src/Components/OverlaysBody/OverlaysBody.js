import React from 'react'
import './OverlaysBody.css'
import {BsFillCameraFill} from "react-icons/bs";
import{BsSearch} from "react-icons/bs";
import{GrAdd} from "react-icons/gr";
import{TbSquareRoundedNumber1Filled} from 'react-icons/tb';
import{TbSquareRoundedNumber2Filled} from 'react-icons/tb';

import Images from '../../Assets';


function OverlaysBody () {
    return (
       <div className='container-overlays-box'>
            <div className='container-overlays'>
                <div className='search-overlays-container'>
                    <h3 className='text-search'>Søk etter Overlays</h3>
                    <BsSearch className='search-icon'/>
                </div>

                <div className='overlays'> Starting soon!
                <img className='image' src={Images.overlay1}/>
                </div>
                <div className='overlays'>Manchester United
                <img className='image' src={Images.overlay2}/></div>
                <div className='overlays'>Record Overlay
                <img className='image' src={Images.overlay3}/></div>
                <div className='overlays'>Overlay pakke
                <img className='image' src={Images.overlay5}/></div>
                <div className='overlays'>Cyberpunk
                <img className='image' src={Images.overlay6}/></div>
                <div className='overlays'>Offline
                <img className='image' src={Images.overlay8}/></div>
                <div className='overlays'>Peppes Pizza Sponsor
                <img className='image' src={Images.overlay10}/></div>
                
                <div className='overlays'>Legg til flere
                <img className='image'/><GrAdd className='add-icon'/></div>
            </div>
            <div className='preview'>
                <div className='icons-camera'>
                        <div className='camera-add'>
                        <BsFillCameraFill className ='camera'/>
                        <GrAdd className='camera'/>
                        </div>
                        <div className='camera1'>
                        <BsFillCameraFill className ='camera'/>
                        <TbSquareRoundedNumber2Filled className='camera'/>
                        </div>
                        <div className='camera1'>
                        <BsFillCameraFill className ='camera'/>
                        <TbSquareRoundedNumber1Filled className='camera'/>
                        

                        </div>
                </div>
                <h4 className='preview-text'>Forhåndsvisning</h4>
               <div className="preview-stream">
                
                   <img className='image-preveiw' src={Images.preview}/>
                </div>
            </div>

            
 
        </div>
    )
}

export default OverlaysBody