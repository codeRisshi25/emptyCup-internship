export const NavBar = () => {
    return (
        <div className="flex align-middle justify-between p-[20px] border-b-2 border-[#9e9e9e]">
            <div>
                <img src="/logo.png" alt="Logo" className="h-[31px] w-[31px]" />
            </div>
            <div>
                <h2 className="font-Chivo text-2xl font-bold text-[#716966]">EmptyCup</h2>
            </div>
            <div className="flex flex-col gap-1 cursor-pointer">
                <div className="w-[5px] h-[5px] rounded-full bg-[#716966]"></div>
                <div className="w-[5px] h-[5px] rounded-full bg-[#716966]"></div>
                <div className="w-[5px] h-[5px] rounded-full bg-[#716966]"></div>
            </div>
        </div>
    )
}