'use client'

//custom components
import Search from "@/components/Search";

export default function Home() {

  return (
    <main className="flex flex-col min-h-screen items-center justify-center px-6">
      <h1 className="text-4xl lg:text-6xl font-semibold text-center mb-8 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
        Weather App
      </h1>
      <Search />
    </main>
  );
}
