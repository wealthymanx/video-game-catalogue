import SearchBar from './SearchBar';

export default function Header({ query, setQuery, games }) {
    return (
      <header className="flex w-full z-10 p-4 bg-slate-950 items-center justify-center border-b-4 border-yellow-600">
        <h1 className="p-6 text-3xl text-yellow-500 font-bold">Marcel's Game Library</h1> 
      <SearchBar query={query} setQuery={setQuery} games={games}/>
      </header>
    )
}
