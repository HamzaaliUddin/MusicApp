/**
 * @name Brand
 * @file brand.tsx
 * @description music brand component
 */
"use client";

// Modules
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { THEME_MODE } from "./../constants/constant";

import { BRAND, SIDEBAR_TOGGLE } from "../constants/constant";

const Brand: React.FC = () => {
  /**
   *
   * Handle link `onClick` event
   */
  const handleClick = () => {
    document.body.removeAttribute(SIDEBAR_TOGGLE);
  };
  console.log(THEME_MODE === "light" ? BRAND.logo : BRAND.dark_logo, "LOGO");
  return (
    <Link className="brand" href={BRAND.href} onClick={handleClick}>
      <Image
        src={THEME_MODE === "light" ? BRAND.logo : BRAND.dark_logo}
        width={104}
        height={44}
        alt={BRAND.name}
        priority
      />
    </Link>
  );
};

Brand.displayName = "Brand";
export default Brand;
