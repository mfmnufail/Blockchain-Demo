import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'

const NavBar = () => {

    const [activeItem, setActiveItem] = useState({activeItem:'home'})

    const handleItemClick=(e, {name})=> {
        setActiveItem({activeItem:name})
    
    
    }


    return (
        <Segment   >
        <Menu color={'grey'} inverted secondary>
          <Menu.Item
            name='key'
            active={activeItem === 'keys'}
            onClick={handleItemClick}
            as={Link}
            to='/key'
          ></Menu.Item>
          <Menu.Item
            name='Signatures'
            active={activeItem === 'Signatures'}
            onClick={handleItemClick}
            as={Link}
            to='/signature'
          ></Menu.Item>
          <Menu.Item
            name='Transaction'
            active={activeItem === 'Transaction'}
            onClick={handleItemClick}
            as={Link}
            to='/transaction'
          ></Menu.Item>
          <Menu.Item
            name='Blockchain'
            active={activeItem === 'Blockchain'}
            onClick={handleItemClick}
            as={Link}
            to='blockchain'
          ></Menu.Item>
        </Menu>
      </Segment>
    )
}

export default NavBar
