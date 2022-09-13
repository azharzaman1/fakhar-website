import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../Button";
import { IoLogoMedium } from "react-icons/io5";
import ThemeLink from "../Link";
import IconButton from "../IconButton";
import Navigation from "./Navigation";

const Header = () => {
  const router = useRouter();

  return (
    <header className="bg-white shadow-sm border-b border-surface-1 min-h-[80px] flex items-center max-w-full">
      <div className="header-container w-full">
        <div className="header-main px-4 sm:px-6 md:px-12 lg:px-16 flex items-center justify-between">
          <div className="header-main-left">
            <div className="header-main-left-logo select-none">
              <Link href="/">
                <div className="header-left-author flex items-center space-x-2 md:space-x-4">
                  <div className="header-author-image cursor-pointer">
                    <img
                      src="https://cdn.sanity.io/images/59siairy/production/4c8eceb295c29827f9be0861c6aaca58342244a8-612x612.png"
                      alt="fakhar image"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="header-author-info">
                    <h2 className="font-medium font-heading-1 text-base md:text-md">
                      Fakhar Zaman
                    </h2>
                    <p className="text-xs md:text-sm text-normal">
                      Zoology Student
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="header-main-center flex-1"></div>
          <div className="header-main-right flex items-center space-x-2 md:space-x-4">
            {!router.asPath.startsWith("/post") && <Navigation />}
            <div className="header-main-right-btns flex">
              <ThemeLink href="https://medium.com/@fakharzaman.fk" blank>
                <IconButton
                  variant="outlined"
                  color="bnw"
                  className="mr-4 self-center"
                >
                  <IoLogoMedium className="text-gray-600 w-4 h-4" />
                </IconButton>
              </ThemeLink>
              {/* <Link href="/files/azhar_resume.pdf" download>
                <Button variant="contained" color="bnw" raised>
                  Resume/CV
                </Button>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
