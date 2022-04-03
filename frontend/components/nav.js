import React,{ useState } from "react";
import Link from "next/link";
import Drawer from "./drawer";
import { appConfig } from "../lib/appConfig";

const Nav = ({ categories }) => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="max-w-screen-2xl my-0 mx-auto py-8 px-4">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="https://twitter.com/">
            <img src="/icons/twitter.svg" className="w-6" />
          </a>
          <a href="https://www.linkedin.com/">
            <img src="/icons/linkedin.svg" className="w-6" />
          </a>
        </div>
        <Link href="/">
          <a className="text-lg font-bold">{appConfig.site_name}</a>
        </Link>
        <button className={`navbar-burger flex items-center p-3 ${open ? "invisible": ""}`} onClick={() => setOpen(true)}>
          <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
        <Drawer open={open} setOpen={setOpen} links={categories} />
      </div>
    </nav>
  );
};

export default Nav;
