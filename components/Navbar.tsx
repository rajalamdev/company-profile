"use client"
import Image from "next/image";
import Link from "next/link";
import Button from "./Buttons";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const navLink = [
    {
        href: "/",
        name: "Home",
    },
    {
        href: "#services",
        name: "Blog",
    },
    {
        href: "#portfolio",
        name: "Portfolio",
    },
    {
        href: "#contact",
        name: "Contact Us",
    },
    {
        href: "/blog",
        name: "Blog",
    },
  ]

  const router = useRouter()

  return (
    <nav className="container flex justify-between items-center py-4 fixed bg-white z-10">
        <div className="flex gap-2 items-center">
            <svg
              className="w-8 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              stroke-linejoin="round"
              stroke-width="2"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12"></rect>
              <rect x="3" y="17" width="7" height="6"></rect>
              <rect x="14" y="1" width="7" height="6"></rect>
              <rect x="14" y="11" width="7" height="12"></rect>
            </svg>
            <p className="text-xl font-bold">Bantu</p>
        </div>
        <div className="flex items-center gap-8">
            {navLink.map(nav => <Link href={nav.href}>
                {nav.name}
            </Link>)}
        </div>
        <div>
            <Button text="Get Started" onClick={() => router.push("/admin")} />
        </div>
    </nav>
  )
}