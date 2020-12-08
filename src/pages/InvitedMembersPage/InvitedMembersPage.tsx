import React from 'react'
import { INVITATIONS } from '../../mocks/invitations'
import { MemberList } from '../../components/MemberList'

const PLACEHOLDER = "https://avatars.dicebear.com/api/initials/test.svg";
export class InvitedMembersPage extends React.Component {
  deleteInvitation = () => { console.log('招待を削除') }

  renderMenuChildren = (): React.ReactNode => (
    <button onClick={this.deleteInvitation}>削除する</button>
  );

  render = () => (
    <>
      <h1>招待メンバー一覧ページ</h1>
      <MemberList>
        {
          INVITATIONS.map(member => (
            <MemberList.ListItem
              key={member.id}
              menuChildren={this.renderMenuChildren()}>
              <img
                  src={PLACEHOLDER}
                  style={{width: 40}}
                  alt="avatar" 
                />
              <div>{member.email}</div>
            </MemberList.ListItem>
          ))
        }
      </MemberList>
    </>
  )
}
