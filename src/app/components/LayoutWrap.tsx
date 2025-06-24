"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const LayoutWrap = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const prev = sessionStorage.getItem("prevPath");

    // If user came from /portfolio and landed on /, redirect to /explore
    if (pathname === "/" && prev === "/portfolio") {
      router.replace("/explore");
    }

    // Store current path as previous for the next navigation
    sessionStorage.setItem("prevPath", pathname);
  }, [pathname, router]);

  return <>{children}</>;
};

export default LayoutWrap;