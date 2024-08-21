import Image from "next/image";
import Link from "next/link";
import Menu from "../../components/Menu";
import NavBar from "../../components/NavBar";

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* Left */}
      <div className="w-1/6 md:w-[8%] lg:w-[16%] xl:w-1/6 p-4">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 lg:justify-start"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block">SchoolCode</span>
        </Link>
        <Menu />
      </div>

      {/* Right */}
      <div className="w-5/6 md:w-[92%] lg:w-[84%] xl:w-5/6 bg-[#F7F8FA] overflow-scroll">
        <NavBar />
        {children}
      </div>
    </div>
  );
}
