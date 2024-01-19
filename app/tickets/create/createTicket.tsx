"use client";

import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";

export default () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [priority, setPriority] = useState("");
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const newTicket = {
      title,
      content,
      priority,
      userName,
    };

    const res = await fetch("http://localhost:4000/tickets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTicket),
    });

    if (res.status === 201) {
      router.refresh();
      router.push("/tickets");
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name"> Name: </label>
      <input
        type="text"
        name="userName"
        onChange={({ target: { value } }) => setUserName(value)}
      />
      <label htmlFor="name"> Title: </label>
      <input
        type="text"
        name="title"
        onChange={({ target: { value } }) => setTitle(value)}
      />
      <label htmlFor="name"> Content: </label>
      <input
        type="text"
        name="content"
        onChange={({ target: { value } }) => setContent(value)}
      />
      <label htmlFor="name"> Priority: </label>
      <input
        type="text"
        name="priority"
        onChange={({ target: { value } }) => setPriority(value)}
      />
      <button type="submit" disabled={isLoading}>
        Submit
      </button>
    </form>
  );
};
