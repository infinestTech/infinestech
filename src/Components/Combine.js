import React from 'react'
import HomeScreen from './HomeScreen'
import SpaceScene from './SpaceScene'

const Combine = () => {

  return (
    <div>

     <HomeScreen /> 
      
     <div className='spaceSceneContainer'>
       <SpaceScene />  {/* {  SpaceScene is included and will render when App loads */}
      
      </div>




    </div>
  )
}

export default Combine