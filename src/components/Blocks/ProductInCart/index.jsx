import React from 'react';

import styles from './ProductInCart.module.scss';
import { useDispatch } from 'react-redux';
import { removeItems } from '../../../redux/slices/cart';

function ProductInCart({
  name,
  sellerCity,
  sellerName,
  type,
  diliveryProperty,
  photo,
  pricePerKG,
  orderDate,
}) {
  const dispatch = useDispatch();
  const handleCancelItem = () => {
    dispatch(removeItems(orderDate));
  };

  return (
    <div className={styles.root}>
      <img src={photo} />
      <div className={styles.descriptionProduct}>
        <div className={styles.HeaderBlock}>
          <div className={styles.productName}>{name}</div>
          <div className={styles.productSeller}>{sellerName}</div>
          <div className={styles.productCity}>{sellerCity}</div>
        </div>
        <div className={styles.BodyBlock}>
          <div className={styles.productBlock}>
            <div className={styles.diliveryOnDate}>
              Доставка назначена на:{' '}
              <span>{diliveryProperty.inputDiliveryTime}</span>
            </div>
            <div className={styles.amnount}>
              Количество заказа:{' '}
              <span>
                {diliveryProperty.inputHowMutch} {type}
              </span>
            </div>
            <div className={styles.priceForProduct}>
              Цена:{' '}
              <span>{diliveryProperty.inputHowMutch * pricePerKG} рублей</span>
            </div>
          </div>
          <div className={styles.ButtonsBlock}>
            <button className={styles.buttonCommunication}>
              Связь с продавцом
            </button>
            <button className={styles.buttonCancel} onClick={handleCancelItem}>
              Отменить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInCart;
