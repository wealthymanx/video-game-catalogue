export const NavItems = [
    { name: 'Home', href: '/', },
    { name: 'Library', href: '/library',},
    { name: 'Settings', href: '/settings', }
]
export function navClasses (isActive) {
    return isActive ? "block p-4 text-red-600 text-center font-bold" : "block p-4 text-yellow-400 text-center"
}