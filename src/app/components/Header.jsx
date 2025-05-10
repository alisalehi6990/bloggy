import Link from "next/link";
import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { defaultArticle } from "@/app/components/images";
const Header = () => {
  return (
    <div>
      <header className="flex justify-between items-center  bg-indigo-800 my-5 mx-5 lg:mx-33 px-2 py-4 rounded-full">
        <Link className="text-2xl lg:text-3xl font-bold ms-3" href={"/"}>
          <h1>Bloggy</h1>
        </Link>
        <Menubar className="text-white bg-transparent border-0 shadow-none hidden lg:flex">
          <MenubarMenu>
            <MenubarTrigger>
              <Link href={"/"}>Home</Link>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <Link href={"/categories"}>Categories</Link>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Dashboard</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <Link href={"/dashboard"}>Overview</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href={"/dashboard/article/manage"}>Create Article</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href={"/dashboard/articles/all"}>Articles</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href={"/dashboard/profile"}>Edit Profile</Link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Pages</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <Link href={"/pages/about"}>About</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href={"/pages/contact"}>Contact</Link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        <Dialog>
          <DialogTrigger>
            <button>
              <i className="ri-heart-line text-2xl "></i>
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-xl text-white bg-[#050510] border-1 border-gray-800">
            <DialogHeader>
              <h3>Bookmarked Articles (4)</h3>
              <div className="flex items-center space-x-2 mt-6">
                <div className="">
                  <div>
                    <div>
                      <Link href={"/"}>
                        <div className="flex items-center gap-3 bg-[#08081a] p-3 rounded-lg my-5">
                          <img
                            src={defaultArticle}
                            className="w-33 h-20 object-cover rounded-lg"
                          />
                          <div>
                            <h3>Example Title</h3>

                            <div>
                              <p>
                                <i className="fas fa-eye"></i>123 Views
                              </p>
                              <button>
                                <i className="fas fa-trash"></i>
                              </button>
                            </div>
                          </div>{" "}
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </DialogHeader>
          </DialogContent>
          <DialogFooter></DialogFooter>
          <DialogClose></DialogClose>
        </Dialog>
        {/* Bookamrk Section */}
      </header>
    </div>
  );
};

export default Header;
