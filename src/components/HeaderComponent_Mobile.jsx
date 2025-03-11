import React,{useState} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import chii from '/src/assets/chiikawa.png';
import { Button, DropdownButton ,Dropdown} from 'react-bootstrap';

const HeaderComponent_Mobile = () => {
//   const[headercolor, setHeadercolor]=useState('black');
//   const handleMouseEnter=()=>{
//     setHeadercolor('red');
//   }
//   const handleMouseLeave=()=>{
//     setHeadercolor('black');
//   }

  return (
    <header className='header'>
      <nav className='nav-container'>
        <div className='nav-content'>
          <img src={chii} alt="chii" width="25px" style={{ marginRight: '10px' }} />
          <div >
            NTUST CC Lin's LAB
          </div>
        </div>
        <Dropdown >
            <Dropdown.Toggle as={Button} variant="dark" className="btn-dark custom-dropdown-toggle">
                ☰
            </Dropdown.Toggle>
            <Dropdown.Menu variant="dark" >
                <Dropdown.Item eventKey="1" href="#intro">
                    實驗室簡介
                </Dropdown.Item>
                <Dropdown.Item eventKey="2" href="#professor" >
                   指導老師
                </Dropdown.Item>
                <Dropdown.Item eventKey="3" href="#publications">
                    研究方向
                </Dropdown.Item>
                <Dropdown.Item eventKey="4" href="#members">
                    實驗室成員
                </Dropdown.Item>
                <Dropdown.Item eventKey="5" href="contact">
                    聯絡方式
                </Dropdown.Item>
            </Dropdown.Menu>

        </Dropdown>
      </nav>

    </header>
  );
};

export default HeaderComponent_Mobile;
