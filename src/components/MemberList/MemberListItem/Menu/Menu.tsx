import React from 'react';

export const Menu: React.FC = ({ children }) => {
	return children ? (
		//...メニューのトグルボタンをここで実装すると仮定
		//メニューの中身↓
		<div>{children}</div>
	): null
};
