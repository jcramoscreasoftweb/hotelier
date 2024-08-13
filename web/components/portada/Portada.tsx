import Image from "next/image";

export const ItemBeneficios = ({ titulo, icon }: any) => {
  return (
    <>
      <div className="ui_item-beneficio">
        <Image width={397} height={587} src={icon} alt="" />
        <p className="ui_titulo">{titulo}</p>
      </div>
    </>
  );
};

export const ItemServicio = ({ titulo, descripcion, image }: any) => {
  return (
    <>
      <div className="ui_item">
        <div>
          <h3>{titulo}</h3>
          <p>{descripcion}</p>
        </div>
        <div>
          <Image width={38} height={60} src={image} alt="" />
        </div>
      </div>
    </>
  );
};
