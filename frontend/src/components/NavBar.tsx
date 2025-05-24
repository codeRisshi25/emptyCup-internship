export const NavBar = () => {
    return (
        <div className="flex align-middle justify-between p-[20px] border-b-1 border-[#eeeeee]">
            <div>
                <img src="/logo.svg" alt="Logo" className="h-[31px] w-[31px]" />
            </div>
            <div>
                <h2 className="font-[Chivo] text-2xl font-bold text-[#716966]">EmptyCup</h2>
            </div>
            <div className="cursor-pointer">
                <img src="/sidebar.png" alt="User Icon" className="h-[27px] w-[27px]" />
            </div>
        </div>
    )
}