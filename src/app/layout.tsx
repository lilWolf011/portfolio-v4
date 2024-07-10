import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

import Link from 'next/link'

export const metadata: Metadata = {
  title: "$",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed p-5 z-10 max-w-8xl w-full items-center justify-between font-mono text-sm lg:flex">
          <ul className="fixed pointer space-x-8 left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 font-thin">
            <li className="cursor-pointer hover:text-green-400 transition duration-300 ease-in">
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer hover:text-green-400 transition duration-300 ease-in">
              <Link href="/about">About</Link>
            </li>
            <li className="cursor-pointer hover:text-green-400 transition duration-300 ease-in">
              <Link href="/skills">Skills</Link>
            </li>
            <li className="cursor-pointer hover:text-green-400 transition duration-300 ease-in">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="cursor-pointer hover:text-green-400 transition duration-300 ease-in">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="/"
              rel="noopener noreferrer"
            >
              By{" lilWolf "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="my-svga"
                className="absolute"
                width="100"
                height="100"
                viewBox="0 0 609 372"
                fill="none"
              >
                <path
                  d="M76.5742 182.645C70.0742 177.645 61.7097 172.555 54.702 168.926C37.4068 159.97 18.6511 145.944 10.3977 127.787C-10.4077 82.015 14.5832 24.443 61.4491 7.11444C73.6814 2.59159 87.6677 2.81014 100.499 3.17363C113.971 3.55527 126.039 5.91555 137.638 12.9659C164.218 29.1221 176.679 56.0414 177.106 86.7666C177.422 109.499 175.271 134.187 167.493 155.671C161.686 171.709 154.036 187.003 146.415 202.244C134.591 225.892 113.59 257.307 121.875 285.24C130.315 313.696 153.97 326.439 182.42 326.439C192.772 326.439 202.575 325.145 211.575 320.145C223.167 313.705 231.914 298.707 236.815 286.136C242.025 272.771 241.489 256.325 240.039 242.309C238.584 228.243 230.978 216.033 227.262 202.543C217.77 168.091 212.745 135.673 230.426 102.291C256.363 53.3226 312.214 27.6936 366.742 39.7157C421.091 51.6981 447.919 112.613 433.676 163.672C429.243 179.566 419.075 194.64 408.001 206.663C390.49 225.675 371.901 244.178 356.771 265.178C348.485 276.679 340.085 287.12 332.575 299.145C327.813 306.77 322.654 316.354 320.945 325.365C318.611 337.675 317.075 350.645 333.783 361.668C349.36 369.31 370.331 369.887 387.163 368.773C415.257 366.914 440.546 358.51 466.397 347.935C491.723 337.574 514.398 321.289 535.779 304.347C557.605 287.054 577.581 266.73 590.951 242.011C604.932 216.159 606.3 188.167 606.117 159.492C605.969 136.408 600.789 116.993 593.22 95.3647"
                  stroke="#8F00FF"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </nav>
        {children}

        <footer className="flex gap-2 cursor-pointer items-center w-full justify-center">
          <Link href="https://discord.com/users/535117705854844940">
            <Image
              src="/discord.svg"
              alt="Discord Logo"
              className="dark:invert"
              width={24}
              height={24}
              priority
            />
          </Link>
          <Link href="/">
            <Image
              src="/instagram.svg"
              alt="İnstagram Logo"
              className="dark:invert"
              width={20}
              height={20}
              priority
            />
          </Link>
          <Link href="/">
            <Image
              src="/x-twitter.svg"
              alt="X Logo"
              className="dark:invert"
              width={20}
              height={20}
              priority
            />
          </Link>
          <Link href="https://github.com/lilWolf011">
            <Image
              src="/github.svg"
              alt="Github Logo"
              className="dark:invert"
              width={20}
              height={20}
              priority
            />
          </Link>
        </footer>
      </body>
    </html>
  );
}
