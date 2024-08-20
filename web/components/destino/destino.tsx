import Image from "next/image";

export const ItemAtraccion = ({ title, description, subtitle, image }: any) => {
    return (
      <>
        <div className="item_atraccion">
            <div className="atraccion_informacion">
                <h2 dangerouslySetInnerHTML={{ __html:title}}></h2>
                <p dangerouslySetInnerHTML={{ __html:description}}></p>
                <div>
                    <Image width={26} height={18} src="/img/icon_carro.png" alt=""/>
                    <span>¿Cómo llegar?</span>
                </div>
                <p dangerouslySetInnerHTML={{ __html:subtitle}}></p>
            </div>
            <div className="atraccion_imagen">
                <Image width={530} height={508} src={image} alt=""/>
            </div>
        </div>
      </>
    );
  };

  export const ItemAtraccionReverse = ({ title, description, subtitle, image }: any) => {
    return (
        <>
        <div className="item_atraccion reverse">
            <div className="atraccion_informacion">
                <h2 dangerouslySetInnerHTML={{ __html:title}}></h2>
                <p dangerouslySetInnerHTML={{ __html:description}}></p>
                <div>
                    <Image width={26} height={18} src="/img/icon_carro.png" alt=""/>
                    <span>¿Cómo llegar?</span>
                </div>
                <p dangerouslySetInnerHTML={{ __html:subtitle}}></p>
            </div>
            <div className="atraccion_imagen">
                <Image width={530} height={508} src={image} alt=""/>
            </div>
        </div>
      </>
    );
  };