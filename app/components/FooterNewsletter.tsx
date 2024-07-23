'use client';
import { Button } from './Button';

export const FooterNewsletter = () => {
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
				<label>
					E-mail
					<input type='text' style={{ border: '1px solid blue' }} />
				</label>
			</div>

			<div>
				<Button
					buttonText='Subscribe'
					buttonAlign='left'
					onClick={handleSubscribe}
				/>
			</div>
		</div>
	);
};
