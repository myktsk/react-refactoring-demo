import React from 'react'
import { INVITATIONS } from '../../mocks/invitations'
import { MemberList } from '../../components/MemberList'

export const InvitedMembersPage:React.FC = () => {
  return (
    <>
      <h1>招待メンバー一覧ページ</h1>
      <MemberList members={INVITATIONS} />
    </>
  )
}
