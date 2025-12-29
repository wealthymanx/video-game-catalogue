export const NavItems = [
    { name: 'Home', href: '/', },
    { name: 'Library', href: '/library',},
    { name: 'Wishlist', href: '/wishlist', },
]
export function navClasses (isActive) {
    return isActive ? "block p-8 text-purple-900 text-center font-bold underline" : "block p-8 text-yellow-400 text-center"
}

export const SortOptions = [
    {name: 'Rating', value: 'rating'},
    {name: 'Release Date', value: 'release_date'},

]

export function sortGames(games, sortBy) {
    if (!games) return [];

    switch(sortBy) {
        case 'rating':
            return [...games].sort((a, b) => b.rating - a.rating)
    
        case 'release_date':
            return [...games].sort((a, b) => new Date(b.released) - new Date(a.released))

        default:
        return games
        

  }
}