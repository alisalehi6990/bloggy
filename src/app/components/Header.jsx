import Link from "next/link";
import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
const Header = () => {
  return (
    <div>
      <header className="flex justify-between items-center  bg-indigo-800 my-5 mx-5 lg:mx-33 px-2 py-4 rounded-full">
        <Link className="text-2xl lg:text-3xl font-bold ms-3" href={"/"}>
          <h1>Bloggy</h1>
        </Link>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger className="text-white">Home</MenubarTrigger>
            <MenubarContent>
              <Link href={"/"} passHref>
                <MenubarItem>Home</MenubarItem>
              </Link>
              <Link href={"/about"} passHref>
                <MenubarItem>About</MenubarItem>
              </Link>
              <Link href={"/contact"} passHref>
                <MenubarItem>Contact</MenubarItem>
              </Link>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </header>
    </div>
  );
};

export default Header;
