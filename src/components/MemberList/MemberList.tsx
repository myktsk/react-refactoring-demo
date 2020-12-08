import React from 'react'

export type BadMemberType = Partial<Member>

export const MemberList: React.FC = ({ children }) => ( <ul>{ children }</ul> );
