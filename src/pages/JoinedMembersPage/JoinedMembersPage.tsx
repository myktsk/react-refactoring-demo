import React from 'react'
import { JOINED_MEMBERS } from '../../mocks/members'
import { MemberList } from '../../components/MemberList'
import { MemberListItem } from '../../components/MemberList/MemberListItem';

const currentUser = { id: 'member1' };

export class JoinedMembersPage extends React.Component {
  leave = () => { console.log('退出') }
	makeOtherLeave = () => { console.log('メンバーを削除') }

  render = () => (
    <>
      <h1>参加メンバー一覧ページ</h1>
      <MemberList>
        {
          JOINED_MEMBERS.map(member => (
            <MemberListItem key={member.id} member={member}>
              {member.role !== "admin" && (
                <button onClick={ member.id === currentUser.id ? this.leave : this.makeOtherLeave} >
                  {member.id === currentUser.id ? "退出する" : "退出させる"}
                </button>
              )}
            </MemberListItem>
          ))
        }
      </MemberList>
    </>
  )
}
