import React from "react";
import Home from "../../containers/Home"

export default function Page({ products, bannerData }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Home />
    </main>
  )
}
