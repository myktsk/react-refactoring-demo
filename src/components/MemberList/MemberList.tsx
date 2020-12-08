import React from 'react'
import { MemberListItem } from './MemberListItem';

export class MemberList extends React.Component {
	static ListItem = MemberListItem;

	render = () => {
    const { children } = this.props;

    return React.Children.map(children, child => {
      if (!React.isValidElement(child) || child.type !== MemberList.ListItem) return null; 
			return React.cloneElement(child);
	  })
	}
}
