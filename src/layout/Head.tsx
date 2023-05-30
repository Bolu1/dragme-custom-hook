// import { MenuIcon } from '@heroicons/react/outline';
import { useEffect } from 'react';
// import avatarImg from '../../public/images/avatar.png';
// import { IUserProfile } from '../interfaces/UserProfile';

const Header = () => {
	const exclude = ['/auth/signin', '/dashboard/print/preview'];

	useEffect(() => {}, []);


	return (
		<>
			<div className='max-w-[1530px] mx-auto'>
				<div className='flex flex-ro'>

				</div>
			</div>
			<div id='main-loader' className='w-full'></div>
		</>
	);
};

export default Header;