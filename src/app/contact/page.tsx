"use client";
import { useState } from "react";
import Cursor from "../components/cursor";
import Discord from "../components/discord";

export default function about() {
  const [state, setState] = useState({ username:"", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //state.email
  };
  return (
    <section className="flex items-center justify-center min-h-[95vh] font-caveat">
      <div className="border-2 border-[#201f1fd6] p-4">
        <form className="flex flex-col space-y-3">
          <span className="flex flex-col">
            <label>Username</label>
            <input
              className="text-sm rounded-md py-1 pl-2 bg-[#201f1fd6]"
              type="text" // email
              name="username"
              placeholder="enter an username"
              value={state.username}
              onChange={handleChange}
              required
            />
          </span>
          <span className="flex flex-col">
            <label>Email</label>
            <input
              className="text-sm rounded-md py-1 pl-2 bg-[#201f1fd6]"
              type="email" // email
              name="email"
              placeholder="enter an email"
              value={state.email}
              onChange={handleChange}
              required
            />
          </span>
          <span className="flex flex-col">
            <label>Message</label>
            <input
              className="text-sm rounded-md py-1 pl-2 bg-[#201f1fd6]"
              type="text" // email
              name="message"
              placeholder="enter an email"
              value={state.message}
              onChange={handleChange}
              required
            />
          </span>
          <button
            className="text-md font-light text-center w-full border-2 border-[#0f0f0f18] rounded-lg bg-[#151515] hover:bg-[#3a383874] transition"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
      <Cursor />
    </section>
  );
}
