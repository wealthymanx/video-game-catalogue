export default function Header() {
    return (
      <div className="flex items-center justify-between bg-black px-4 py-3">
        <h1 className="text-3xl text-yellow-500 font-bold px-4">Game Catalogue</h1>
        <nav className="flex space-x-6 text-lg text-yellow-500 px-4">
          <span>Home</span>
          <span>About</span>
          <span>Top Games</span>
        </nav>
      </div>
    )
}
