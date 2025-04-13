import React, { createContext, useState, useContext } from 'react';

// Création du contexte
const FavoritesContext = createContext();

// Création du Provider qui entourera toute l'application
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Fonction pour ajouter ou retirer un favori
  const toggleFavorite = (item) => {
    setFavorites(current => {
      // Si l'item est déjà dans les favoris, on le retire
      const exists = current.some(fav => fav.id === item.id);
      if (exists) {
        return current.filter(fav => fav.id !== item.id);
      } 
      // Sinon on l'ajoute
      else {
        return [...current, item];
      }
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};