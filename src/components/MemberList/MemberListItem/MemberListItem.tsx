import React from 'react'
import { BadMemberType } from '../MemberList'
import { Menu } from './Menu'

type Props = {
  member: BadMemberType
}

const PLACEHOLDER = "https://avatars.dicebear.com/api/initials/test.svg";

export const MemberListItem:React.FC<Props> = ({ children, member }) => {
  return (
    <li style={{marginBottom: 24}}>
      <img
        src={member.avatar ? member.avatar : PLACEHOLDER}
        style={{width: 40}}
        alt="avatar" 
      />
			{member.name ? (
          <>
            <div>
              <div>{member.name}</div>
              <div>{member.email}</div>	
            </div>
            {member.role === "guest" && <div>ゲスト</div>}
          </>
				): (<div>{member.email}</div>)
			}
		  <Menu>{children}</Menu>
    </li>
  )
}
