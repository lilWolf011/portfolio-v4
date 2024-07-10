"use client"; // Assuming this is for Vercel Next.js deployments

import { useState } from "react";
import Cursor from "../components/cursor";
import Discord from "../components/discord";

export default function About() {
  const [state, setState] = useState({ username:"", email: "", message: "" });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you can access state.username, state.email, state.message for further processing
    console.log("Form submitted:", state);
    
    // Example of how to fetch data or perform other async operations
    // Replace with your actual API call or logic
    try {
      const response = await fetch("your-api-endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });
      const data = await response.json();
      console.log("Response:", data);
      // Optionally reset the form state after successful submission
      setState({ username: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="flex items-center justify-center min-h-[95vh] font-caveat">
      <div className="border-2 border-[#201f1fd6] p-4">
        <form className="flex flex-col space-y-3" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              className="text-sm rounded-md py-1 pl-2 bg-[#201f1fd6]"
              type="text"
              name="username"
              placeholder="Enter a username"
              value={state.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="text-sm rounded-md py-1 pl-2 bg-[#201f1fd6]"
              type="email"
              name="email"
              placeholder="Enter an email"
              value={state.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              className="text-sm rounded-md py-1 pl-2 bg-[#201f1fd6]"
              name="message"
              placeholder="Enter your message"
              value={state.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            className="text-md font-light text-center w-full border-2 border-[#0f0f0f18] rounded-lg bg-[#151515] hover:bg-[#3a383874] transition"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <Cursor />
    </section>
  );
}
