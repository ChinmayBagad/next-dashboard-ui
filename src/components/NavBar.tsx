import Image from "next/image";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* Search Bar */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] p-2 outline-none">
        <Image src="/search.png" alt="search" width={14} height={14} />
        <input
          type="text"
          placeholder="Search"
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>

      {/* Icons and Users */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="" width={20} height={20}></Image>
        </div>
        <div className="bg-white rounded-full w-7 h-7 items-center justify-center cursor-pointer relative">
          <Image src="/announcement.png" alt="" width={20} height={20}></Image>
          <div className=" absolute -top-3 -right-3 w-5 h-5 p-2 rounded-full flex items-center justify-center bg-purple-500 text-white text-xs">
            9
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">Chinmay Bagad</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>

        <Image
          src="/avatar.png"
          alt=""
          width={36}
          height={36}
          className="rounded-full"
        ></Image>
      </div>
    </div>
  );
};

export default NavBar;
