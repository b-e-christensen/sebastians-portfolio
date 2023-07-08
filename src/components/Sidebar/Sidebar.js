import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements'

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarWrapper>
          <SidebarLink to='/React-Portfolio/'>About</SidebarLink>
          <SidebarLink to='/React-Portfolio/work'>Work</SidebarLink>
          <SidebarLink to='/React-Portfolio/contact'>Contact</SidebarLink>
          <SidebarLink to='/React-Portfolio/resume'>Resume</SidebarLink>
        </SidebarWrapper>
      </SidebarMenu>
    </SidebarContainer>
  )
}

export default Sidebar
