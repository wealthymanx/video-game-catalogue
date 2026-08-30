import { createContext } from 'react';
import { useState } from 'react';

export const WishListContext = createContext(1)

export function WishlistProvider({ children }) {
    const [wishList, setWishlist] = useState([]);
}