
import styles from '../components/ShopItemFunc.module.css'

const ShopItemFunc = (props) => { 

  const {brand, title, description, descriptionFull, currency, price} = props.item
   
    return (
        <div className={styles["main-content"]}>
  <h2>{brand}</h2>
  <h1>{title}</h1>
  <h3>{description}</h3>
  <div className={styles["description"]}>
   {descriptionFull}
  </div>
  <div className="highlight-window mobile"><div class="highlight-overlay"></div></div>
  <div className={styles["divider"]}></div>
  <div className={styles["purchase-info"]}>
    <div className="price">{currency}{price}</div>
    <button>Добавить в корзину</button>
  </div>
</div>
    )

}

export default ShopItemFunc