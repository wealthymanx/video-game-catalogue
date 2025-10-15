import SearchBar from './SearchBar';

export default function Header({ query, setQuery, games }) {
    return (
      <header className="flex items-center relative z-10 ml-80 p-4 bg-slate-950">
      <SearchBar query={query} setQuery={setQuery} games={games} />
      </header>
    )
}
