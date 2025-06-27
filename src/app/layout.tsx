"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Box } from "@mui/material";
import Sidebar from "@/components/Sidebar";
import Register from "@/components/Forms/register";
import Login from "@/components/Forms/login";
import ForgotPassword from "@/components/Forms/forgotPassword";
import { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserContext } from "@/contexts/UserContext";
import { useRouter, usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Leitura Livre",
//   description: "Sua plataforma de leitura online",
//   icons: {
//     icon: "/favicon.ico",
//   },
// };

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [registerOpen, setregisterOpen] = useState(false);
  const [loginOpen, setloginOpen] = useState(false);
  const [forgotPasswordOpen, setforgotPasswordOpen] = useState(false);
  const [user, setUser] = useState(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    }
    return null;
  });

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      if (pathname === "/") {
        router.push("/dashboard");
      }
    }

    if (!user && typeof window !== "undefined") {
      localStorage.removeItem("user");
      if (pathname !== "/") {
        router.push("/");
      }
    }
  }, [user, pathname, router]);

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        />
        <title>Leitura Livre</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <QueryClientProvider client={queryClient}>
          <UserContext.Provider value={{ user, setUser }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Header
                user={user}
                onRegisterClick={() => setregisterOpen(true)}
                onLoginClick={() => setloginOpen(true)}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "#FFEEDA",
                  minHeight: "100vh",
                  padding: "0 2rem",
                }}
              >
                {/* {pathname !== "/" && <Sidebar />} */}
                {children}
              </Box>
            </Box>
            <Register
              open={registerOpen}
              onClose={() => setregisterOpen(false)}
            />
            <Login
              open={loginOpen}
              onClose={() => setloginOpen(false)}
              ForgotPasswordClick={() => setforgotPasswordOpen(true)}
            />
            <ForgotPassword
              open={forgotPasswordOpen}
              onClose={() => setforgotPasswordOpen(false)}
            />
          </UserContext.Provider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
