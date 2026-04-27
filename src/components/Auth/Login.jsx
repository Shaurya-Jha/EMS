import { useState } from "react";

export default function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          autoComplete={false}
          className="flex flex-col items-center justify-center gap-3"
        >
          <input
            required
            className="border-2 border-emerald-600 rounded-full py-3 px-5 text-xl text-black outline-none bg-transparent placeholder:text-white"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border-2 border-emerald-600 rounded-full py-3 px-5 text-xl text-black outline-none bg-transparent placeholder:text-white"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="border-2 border-emerald-600 bg-emerald-600 rounded-full py-3 px-5 text-xl text-white outline-none placeholder:text-white">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
