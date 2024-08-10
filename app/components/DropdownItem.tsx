import React from 'react';

type Props = {
	text: string;
	onClick: () => void;
};

function DropdownItem({ text, onClick }: Props) {
	return (
		<div
			className='hover:bg-lightGray px-3 py-1 transition-bg transition-colors duration-300 cursor-pointer'
			onClick={onClick}>
			<p className='text-sm font-normal uppercase tracking-wide font-heading'>
				{text}
			</p>
		</div>
	);
}

export default DropdownItem;
