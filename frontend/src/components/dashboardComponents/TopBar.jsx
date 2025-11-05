import { BellIcon, UserIcon } from '@heroicons/react/24/solid'

function TopBar() {
    return (
        <>
            <div className="bg-[#FFFFFF] w-full p-5 flex justify-between items-center shadow-sm">
                
                <div>
                    <h1 className="text-[24px] font-bold">Dashboard</h1>
                    <p className='text-[16px] text-[#4B5563]'>Monitor your helmet status and safety metrics</p>
                </div>

                <div className="flex items-center gap-5">
                    
                    <div className="flex items-center gap-2">

                        <div className="h-10 w-10 rounded-full bg-gray-200 p-2 text-gray-400">
                            <UserIcon />
                        </div>
                        <p className="font-[20px] text-[#4B5563]">John Rider</p>
                    </div>

                    <div className="text-gray-400 hover:text-gray-600 cursor-pointer">
                        <BellIcon className="h-6 w-6" />
                    </div>
                </div>

            </div>
        </>
    );
}
export default TopBar;