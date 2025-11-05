import {
    HomeIcon,
    Cog6ToothIcon,
    UserIcon,
    BookOpenIcon,
    HeartIcon,
    ReceiptPercentIcon,
    ChatBubbleLeftRightIcon,
    UsersIcon,
    PencilSquareIcon,
} from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

function SideNav() {
    return (
        <div className="hidden md:flex flex-col h-screen items-center w-72 bg-white shadow overflow-y-hidden border-r border-r-gray-200 ">
            <div className="mb-6 mt-8 mr-10 flex gap-4 q-full ">
                <div className="flex flex-col">
                    <h1 className='text-[24px] font-bold'>Ba <span className='text-[#FB9E3A]'>Book</span></h1>
                    <p className='text-[16px] text-[#4B5563]'>Borrow Book</p>

                </div>
            </div>
            <hr className="my-2 w-full w-[90%] border-gray-200" />

            <nav className="w-full">
                <span className="ml-7 text-[16px] text-gray-400">Main</span>
                <ul className="nav-list w-full px-4">
                    <li>
                        <Link to="/" className="nav-item">
                            <HomeIcon className="icon-size" />
                            <span>Dashboard</span>
                        </Link>

                    </li>
                    <li>
                        <Link to="/library" className="nav-item">
                            <BookOpenIcon className="icon-size" />
                            <span>Library</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/favorite" className="nav-item">
                            <HeartIcon className="icon-size" />
                            <span>Favorite</span>
                        </Link>

                    </li>
                    <li className="nav-item">
                        <ReceiptPercentIcon className="icon-size" />
                        <span>Order History</span>
                    </li>
                    <li className="nav-item">
                        <ChatBubbleLeftRightIcon className="icon-size" />
                        <span>Messages</span>
                    </li>
                    <li className="nav-item">
                        <UsersIcon className="icon-size" />
                        <span>Authors</span>
                    </li>
                    <li className="nav-item">
                        <PencilSquareIcon className="icon-size" />
                        <span>Reviews</span>
                    </li>
                </ul>
                <div className="my-4 border-t border-gray-200"></div>
                <ul className="nav-list w-full px-4">
                    <span className="ml-3 text-[16px] text-gray-400">Settings</span>
                    <li className="nav-item">
                        <Cog6ToothIcon className="icon-size" />
                        <span>Preferences</span>
                    </li>
                    <li className="nav-item">
                        <UserIcon className="icon-size" />
                        <span>Settings</span>
                    </li>
                </ul>
            </nav>

        </div>
    );
}

export default SideNav;