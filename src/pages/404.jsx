import React from "react";
import { HomeButton } from "../components/Buttons/HomeButton";

function ErrorPage() {
  return (
    <>
      <main className=" min-h-screen flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">
            Oppss...An error occurred!
          </h1>
          <p className="text-lg mb-5">Could not find this page.</p>
          <HomeButton />
        </div>
      </main>
    </>
  );
}

export default ErrorPage;
