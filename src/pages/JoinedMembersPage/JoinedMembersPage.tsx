import React from 'react'
import { JOINED_MEMBERS } from '../../mocks/members'
import { MemberList } from '../../components/MemberList'

export const JoinedMembersPage = () => {
  return (
    <>
      <h1>参加メンバー一覧ページ</h1>
      <MemberList members={JOINED_MEMBERS} />
    </>
  )
}
