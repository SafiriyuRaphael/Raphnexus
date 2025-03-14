"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { usePathname } from "next/navigation";

interface AuthContextType {
  components: boolean;
  sideBar: boolean;
  setSideBar: Dispatch<SetStateAction<boolean>>;
  cart: CartProps[];
  setCart: Dispatch<SetStateAction<CartProps[]>>;
  setSideCart: Dispatch<SetStateAction<boolean>>;
  sideCart: boolean;
  newFav: MenuItem | null;
  setNewFav: Dispatch<SetStateAction<MenuItem | null>>;
  setFavoritesList: Dispatch<SetStateAction<FavoriteState[]>>;
  showFavoritesView: boolean;
  setShowFavoritesView: Dispatch<SetStateAction<boolean>>;
  favoritesList: FavoriteState[];
  video: boolean;
  setVideo: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [components, setComponents] = useState<boolean>(false);
  const [sideBar, setSideBar] = useState<boolean>(false);
  const pathname = usePathname();
  const [cart, setCart] = useState<CartProps[]>([]);
  const [sideCart, setSideCart] = useState<boolean>(false);
  const [showFavoritesView, setShowFavoritesView] = useState(false);
  const [video, setVideo] = useState(false);

  const [favoritesList, setFavoritesList] = useState<FavoriteState[]>([]);
  const [newFav, setNewFav] = useState<MenuItem | null>(null);

  useEffect(() => {
    const savedCart = sessionStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      sessionStorage.setItem("cart", JSON.stringify(cart));
    } else {
      sessionStorage.removeItem("cart");
    }
  }, [cart]);

  useEffect(() => {
    setComponents(pathname === "/");
  }, [pathname]);

  useEffect(() => {
    if (sideBar || video) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sideBar, video]);

  return (
    <AuthContext.Provider
      value={{
        components,
        sideBar,
        setSideBar,
        cart,
        setCart,
        sideCart,
        setSideCart,
        newFav,
        setNewFav,
        favoritesList,
        setFavoritesList,
        showFavoritesView,
        setShowFavoritesView,
        video,
        setVideo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the AuthContext
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
