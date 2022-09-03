import React from "react";
import Button from "../Button";
import { IoLogoMedium } from "react-icons/io5";
import Link from "next/link";
import ThemeLink from "../Link";
import Image from "next/image";
import IconButton from "../IconButton";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-surface-1">
      <div className="header-container">
        <div className="header-main min-h-[60px] px-4 sm:px-6 md:px-12 lg:px-16 flex items-center justify-between">
          <div className="header-main-left">
            <Link href="/">
              <div className="header-left-logo cursor-pointer relative w-24 h-12">
                <Image
                  src="/logo.png"
                  alt="fakhar logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Link>
          </div>
          <div className="header-main-center flex-1"></div>
          <div className="header-main-right">
            <div className="header-main-right-btns flex">
              <ThemeLink href="https://medium.com/@fakharzaman.fk" blank>
                <IconButton
                  variant="outlined"
                  color="bnw"
                  className="mr-2 self-center"
                >
                  <IoLogoMedium className="text-gray-600 w-4 h-4" />
                </IconButton>
              </ThemeLink>
              <Link href="/files/azhar_resume.pdf" download>
                <Button variant="contained" color="bnw" raised>
                  Resume/CV
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
