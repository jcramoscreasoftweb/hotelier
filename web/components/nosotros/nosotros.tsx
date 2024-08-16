import Image from "next/image";

export const ItemBeneficio = ({ imagen, titulo, descripcion }: any) => {
    return (
      <>
        <div className="item_beneficio">
            <Image width={350} height={325}
                src={imagen} alt="item-image-beneficio">
            </Image>
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
        </div> 
      </>
    );
  };