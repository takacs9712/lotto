import React from "react";

function ErrorPage() {
  return (
    <>
      <main className=" min-h-screen flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">
            Oppss...An error occurred!
          </h1>
          <p className="text-lg">Could not find this page.</p>
        </div>
      </main>
    </>
  );
}

export default ErrorPage;
