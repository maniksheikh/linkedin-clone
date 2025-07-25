export const useImages = () => {
  const getImageUrl = (path) => {
    // Handle Firebase URLs
    if (path.startsWith('https://firebasestorage.googleapis.com')) {
      return path;
    }
    
    // Handle local static images
    if (path.startsWith('/')) {
      return path;
    }
    
    // Handle relative paths
    if (path.startsWith('~/')) {
      return path.replace('~/', '/');
    }
    
    // Default to static directory
    return `/img/${path}`;
  };

  const handleImageError = (event, fallbackSrc = '/img/placeholder.jpg') => {
    console.warn(`Failed to load image: ${event.target.src}`);
    event.target.src = fallbackSrc;
    event.target.onerror = null; // Prevent infinite loop
  };

  const preloadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
      img.src = getImageUrl(src);
    });
  };

  return {
    getImageUrl,
    handleImageError,
    preloadImage
  };
}; 