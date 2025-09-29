export default function Header() {
    return (
      <div className="flex items-center justify-between bg-black px-1 py-3">
        <h1 className="text-3xl text-white font-bold">Video Game Library</h1>
        <nav className="flex space-x-6 text-lg text-white">
          <span>Home</span>
          <span>About</span>
          <span>Top Games</span>
        </nav>
      </div>
    )
}
