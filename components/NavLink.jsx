import Link from "next/link"

const NavLink = ({ href, title }) => {
    return (
        <Link href={href} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl md:p-0 hover:text-purple-500 ease-in-out duration-300   ">
            {title}
        </Link>
    )
};

export default NavLink;

