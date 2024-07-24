'use client';
import { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';

export const FooterNewsletter = () => {
	const [email, setEmail] = useState('');

	const handleSubscribe = () => {
		alert('Subscribed!');
	};

	return (
		<div
			className='flex flex-col gap-2'
			style={{ maxWidth: '300px', minWidth: '220px' }}>
			<div>
				<p className='font-heading uppercase text-header text-xs tracking-widest'>
					newsletter
				</p>
			</div>

			<div>
				<p>Become a member and receive 15% off for your first order.</p>
				<Input
					name={email}
					value={email}
					label='E-mail'
					disabled
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>

			<div>
				<Button
					buttonText='Subscribe'
					buttonAlign='left'
					animateOnHover
					onClick={handleSubscribe}
				/>
			</div>
		</div>
	);
};
