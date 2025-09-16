import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center px-6 py-16">
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={150}
          height={40}
          priority
          className="mb-6"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-blue-500">My Website</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
          Hi 👋, I’m Om Bandu Warkari, a BCA student passionate about React,
          Next.js, and Cloud.  
          Explore my projects, blogs, and journey into tech!
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 transition shadow-lg"
          >
            🚀 View Projects
          </a>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-2xl bg-gray-700 hover:bg-gray-600 transition shadow-lg"
          >
            📘 Read Docs
          </a>
        </div>
      </main>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-6 px-8 py-12 max-w-5xl">
        <div className="p-6 rounded-2xl bg-gray-800 hover:bg-gray-700 transition shadow-lg">
          <h2 className="text-xl font-semibold mb-2">⚡ Fast Development</h2>
          <p className="text-gray-300">
            Using Next.js, React, and Tailwind for quick, scalable, and modern
            web development.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-gray-800 hover:bg-gray-700 transition shadow-lg">
          <h2 className="text-xl font-semibold mb-2">☁ Cloud Enthusiast</h2>
          <p className="text-gray-300">
            Exploring AWS, GCP, and DevOps to build scalable cloud-native apps.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-gray-800 hover:bg-gray-700 transition shadow-lg">
          <h2 className="text-xl font-semibold mb-2">💡 Continuous Learning</h2>
          <p className="text-gray-300">
            Sharing knowledge through projects, blogs, and open-source
            contributions.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 text-center border-t border-gray-700">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Om Bandu Warkari | Built with{" "}
          <span className="text-blue-400">Next.js</span> & Tailwind CSS
        </p>
      </footer>
    </div>
  );
}
