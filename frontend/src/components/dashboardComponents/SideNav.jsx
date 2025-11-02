import {
  HomeIcon,
  BookOpenIcon, 
  HeartIcon, 
  ReceiptPercentIcon, 
  ChatBubbleLeftRightIcon,
  UsersIcon,
  PencilSquareIcon,
  Cog6ToothIcon 
} from '@heroicons/react/24/solid';


// Renamed from Header to SideNav
function SideNav(){
    return(
        // This container is styled with Tailwind for the main layout
        // TYPO FIX: Changed item-center to items-center
        <div className="flex flex-col h-screen items-center w-64 bg-white border border-orange-300 shadow overflow-y-hidden fixed ">
            <div className="text-2xl font-bold mb-6 mt-4">
                <h1>Ba<span className="text-[#FE5D26]">Book</span></h1>
            </div>
            <nav className="w-full">
                <ul className="nav-list w-full px-4">
                    {/* CHANGED: Re-added 'nav-item' class */}
                    <li className="nav-item">
                        <HomeIcon className="icon-size" />
                        <span>Dashboard</span>
                    </li>
                    <li className="nav-item">
                        <BookOpenIcon className="icon-size" />
                        <span>Library</span>
                    </li>
                    <li className="nav-item">
                        <HeartIcon className="icon-size" />
                        <span>Favourite</span>
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
                        <UsersIcon  className="icon-size"/>
                        <span>Authors</span>
                    </li>
                    <li className="nav-item">
                        <PencilSquareIcon className="icon-size" />
                        <span>Reviews</span>
                    </li>
                    <li className="nav-item">
                        <Cog6ToothIcon className="icon-size" />
                        <span>Settings</span>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default SideNav;

