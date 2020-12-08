import React from 'react'
import { Member } from '../../types';
import { JOINED_MEMBERS } from '../../mocks/members'
import { MemberList } from '../../components/MemberList'
import { MemberListItem } from '../../components/MemberList/MemberListItem';

const currentUser = { id: 'member1' };
const PLACEHOLDER = "https://avatars.dicebear.com/api/initials/test.svg";

export class JoinedMembersPage extends React.Component {
  leave = () => { console.log('退出') }
	makeOtherLeave = () => { console.log('メンバーを削除') }

  renderMenuChildren = (member: Member): React.ReactNode | null => {
    if(member.role === "admin") return null;
    return (
      <button onClick={ member.id === currentUser.id ? this.leave : this.makeOtherLeave} >
        {member.id === currentUser.id ? "退出する" : "退出させる"}
      </button>
    )
  }
  
  render = () => (
    <>
      <h1>参加メンバー一覧ページ</h1>
      <MemberList>
        {
          JOINED_MEMBERS.map(member => (
            <MemberListItem
              key={member.id}
              menuChildren={this.renderMenuChildren(member)}>
                <img
                  src={member.avatar ? member.avatar : PLACEHOLDER}
                  style={{width: 40}}
                  alt="avatar" 
                />
                <div>
                  <div>{member.name}</div>
                  <div>{member.email}</div>	
                </div>
                {member.role === "guest" && <div>ゲスト</div>}
            </MemberListItem>
          ))
        }
      </MemberList>
    </>
  )
}
