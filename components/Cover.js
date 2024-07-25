import Image from "next/image";

const Cover = () => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-cover bg-center py-0"
      style={{ backgroundImage: "url('/path/to/background-image.png')" }} // Ajuste o caminho conforme necessário
    >
      <div className="flex justify-center items-center">
        <Image
          src="https://images-offstore.map.azionedge.net/compressed/1fc98f4636ea1d30713016c1111c0b0a.webp" // substitua pelo caminho correto da imagem
          alt="Bolsa Transversal 1"
          layout="responsive"
          width={1045}
          height={1080}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Cover;
