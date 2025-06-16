//States
//Props
//Hooks
import React from 'react';
class Header extends React.Component {
  render(): React.ReactNode {
    return (
      <> <div style={{backgroundColor: 'lightblue', padding: '20px',
       borderRadius: '10px', height: '200px', width: '300px',
        border: '2px solid gray', 
        backgroundImage : 'url(https://multiplayer.net-cdn.it/thumbs/images/2021/12/10/7_G58Bf8J_cropped_633_271_3505_1879_jpeg_1600x900_crop_q85.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontFamily: 'Arial, sans-serif',
        fontSize: '16px',
        boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.4s',
      }}>
        <h1>Header</h1>
      </div>
      </>
    );
  }
}

export default Header;