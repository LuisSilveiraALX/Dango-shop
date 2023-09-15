import Card from "./card";
import { Data } from "./Data";

const Product = () => {
    return (
        <section className="section__products">
          <div className="container__object">
            {Data.map((val, id) => {
                return (
                  <Card key={id} id={val.id} imageUrl={val.Image} title={val.title} price={val.price} description={val.description} 
                  />
                )
              }
            )}
          </div>
          
          
        </section>
    )
}

export default Product