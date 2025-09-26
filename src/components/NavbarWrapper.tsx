"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();

  // Hide navbar on /course and its subroutes
  const hideNavbar = pathname.startsWith("/course");

  if (hideNavbar) return null;

  return <Navbar />;
}
