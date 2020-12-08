import React from 'react';
import { BadMemberType } from '../../MemberList';

type Props = {
  member: BadMemberType;
}

const currentUser = { id: 'member1' };

export class Menu extends React.Component<Props> {
	leave = () => { console.log('退出') }
	makeOtherLeave = () => { console.log('メンバーを削除') }
	deleteInvitation = () => { console.log('招待を削除') }

	render = () => {
    const { member } = this.props; 
		if(member.role && member.role === "admin") return null;
		return (
			//...メニューのトグルボタンをここで実装すると過程
			//メニューの中身↓
			<div>
				{member.role ?
					(
						<button onClick={member.id === currentUser.id ? this.leave : this.makeOtherLeave }>
							{member.id === currentUser.id ? "退出する" : "退出させる"}
						</button>
					):(
						<button onClick={this.deleteInvitation}>削除する</button>
					)}
			</div>
		)
	}
}
