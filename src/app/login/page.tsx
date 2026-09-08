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
    <div>
      <Container>
        <div className="border p-4 flex flex-col w-70 mx-auto">
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
