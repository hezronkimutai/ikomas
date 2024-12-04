"use client";
import { createContext, useState, useEffect, ReactNode, useContext } from 'react';

// Define types for the context state
interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  // Add any other product fields here
}

interface AppContextType {
  product: Product | null;
  setProduct: (product: Product | null) => void;
  categories: string[];
  fetchCategoryProducts: (category: string) => Promise<Product[]>;
}

// Create context with a default undefined value
export const AppContext = createContext<AppContextType | undefined>(undefined);

// Props for the provider component
interface AppProviderProps {
  children: ReactNode;
}

// Provider component
export const AppProvider = ({ children }: AppProviderProps) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [categories, setCategories] = useState<string[]>([]);

  // Fetch categories once when the provider mounts
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => setCategories(json));
  }, []);

  // Function to fetch products for a specific category
  const fetchCategoryProducts = async (category: string): Promise<Product[]> => {
    const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    const data = await res.json();
    return data;
  };

  return (
    <AppContext.Provider value={{ product, setProduct, categories, fetchCategoryProducts }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for using the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
