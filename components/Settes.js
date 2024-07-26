// Seta anterior
export const PrevArrow = ({ onClick }) => {
  return (
    <button
      className="custom-prev absolute top-1/2 transform -translate-y-1/2 -left-20 bg-transparent text-pink-500 border-2 border-pink-500 rounded-full w-12 h-12 flex items-center justify-center hover:bg-pink-100 transition-all duration-300 z-10 "
      onClick={onClick}
    >
      &#10094;
    </button>
  );
};

// Seta próxima
export const NextArrow = ({ onClick }) => {
  return (
    <button
      className="custom-next absolute top-1/2 transform -translate-y-1/2 -right-12 bg-transparent text-pink-500 border-2 border-pink-500 rounded-full w-12 h-12 flex items-center justify-center hover:bg-pink-100 transition-all duration-300 z-10"
      onClick={onClick}
    >
      &#10095;
    </button>
  );
};
