import React from 'react'
import { INVITATIONS } from '../../mocks/invitations'
import { MemberList } from '../../components/MemberList'
import { MemberListItem } from '../../components/MemberList/MemberListItem'

export class InvitedMembersPage extends React.Component {
  deleteInvitation = () => { console.log('招待を削除') }
  render = () => (
    <>
      <h1>招待メンバー一覧ページ</h1>
      <MemberList>
        {
          INVITATIONS.map(member => (
            <MemberListItem key={member.id} member={member}>
              <button onClick={this.deleteInvitation}>削除する</button>
            </MemberListItem>
          ))
        }
      </MemberList>
    </>
  )
}
