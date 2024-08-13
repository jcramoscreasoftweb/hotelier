import Image from "next/image";

export const ItemResena = ({ score, comment, user, date }: any) => {

    return (
      <>
        <div className="ui_item_resena">
          <div className="ui_estrellas">
            {Array.from({ length: score }, (item_array, index = 0) => (
                <Image key={index} width={17} height={16} src="/img/estrella_icon.png" alt="" />
            ))}
          </div>
          <div className="ui_mensaje">
            <p>{comment}</p>
          </div>
          <div className="ui_usuario">
            <p>- {user}, {date}</p>
          </div>
        </div>
      </>
    );
  };