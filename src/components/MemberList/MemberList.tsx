import React from 'react'
import { Member } from '../../types'
import { MemberListItem } from './MemberListItem/MemberListItem'

export type BadMemberType = Partial<Member>;

type Props = {
  members: BadMemberType[]
}

export const MemberList: React.FC<Props> = ({ members }) => {
  return (
    <ul>
      {
        members.map(member => <MemberListItem key={member.id} member={member} />)
      }
    </ul>
  )
}
