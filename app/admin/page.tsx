"use client";
import React, { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {






  return (
    <div className="grid place-content-center h-screen bg-gray-100">
      Ini halaman Home admin
    </div>
  );
}
