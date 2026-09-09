"use client";

import Container from "@/components/container";
import axios from "axios";
import React, { useState } from "react";
import cookie from "js-cookie";
import { redirect } from "next/navigation";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const data = axios({
      url: "/login",
      method: "POST",
      data: {
        username: userName,
        password: password,
      },
    });

    const respons = {
      token: "kuhkhjkhkiojoijio",
      expire: 7,
    };

    cookie.set("token", respons.token, { expires: respons.expire });
    redirect("/dashoard");
  };

  return (
    <div className=" min-h-screen bg-linear-to-br form-pink-200 via-red-300 to-sky-200 flex  items-center justify-center p-6">
      <Container>
        <div className=" ml-120 mb-100 w-full max-w-md rounded-3xl bg-whith/70 backdrop-blur-xl shadow-2xl border border-white/40 p-8 ">
          <input
            onChange={(e) => setUserName(e.target.value)}
            className="mt-2"
            type="text"
            placeholder="Username"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2"
            type="password"
            placeholder="Password"
          />

          <button onClick={handleLogin}>Login</button>
        </div>
      </Container>
    </div>
  );
}

export default Login;
