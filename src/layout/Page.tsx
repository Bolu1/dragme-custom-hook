// import { PlusIcon, SearchIcon } from '@heroicons/react/outline';
// import { IUserProfile } from '../interfaces/UserProfile';
import avatarImg from '../../public/images/avatar.png';

const Page = ({ children, user }: { children: any; user: any }) => {



	return (
		<div 
		style={{ background: "#ededed" }}
		>
				<>{children}</>
		</div>
	);
};

export default Page;