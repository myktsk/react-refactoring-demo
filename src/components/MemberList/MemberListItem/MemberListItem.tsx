import React from 'react'
import { Menu } from './Menu'

type Props = {
  children: React.ReactNode;
  menuChildren?: React.ReactNode;
}

export const MemberListItem:React.FC<Props> = ({ children, menuChildren }) => {
  return (
    <li style={{marginBottom: 24}}>
      {children}
		  {menuChildren && (<Menu>{menuChildren}</Menu>)}
    </li>
  )
}
