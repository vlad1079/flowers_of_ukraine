import logoFooter from '../../images/footer/footer_logo.svg';
import maestro from '../../images/footer/maestro.jpg';
import mastercard from '../../images/footer/mastercard.jpg';
import visa_electron from '../../images/footer/visa_electron.jpg';
import visa from '../../images/footer/visa.jpg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container">
                <div className="footer_top">
                    <div className="footer_top_left">
                        <picture>
                            <img src={logoFooter} alt="logo" />
                        </picture>
                    </div>
                    <div className="footer_top_right">
                        <ul>
                            <li>ИНФОРМАЦИЯ</li>
                            <li><a href="">О НАС</a></li>
                            <li><a href="">ДОСТАВКА И ОПЛАТА</a></li>
                            <li><a href="">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</a></li>
                        </ul>
                        <ul>
                            <li>СЛУЖБА ПОДДЕРЖКИ</li>
                            <li><a href="">КАРТА САЙТА</a></li>
                            <li><a href="">ВОЗВРАТ ТОВАРА</a></li>
                            <li><a href="">СВЯЗАТЬСЯ С НАМИ</a></li>
                            <li><a href="">ДЛЯ СОТРУДНИЧЕСТВА</a></li>
                        </ul>
                        <ul>
                            <li>ЛИЧНЫЙ КАБИНЕТ</li>
                            <li><a href="">ЛИЧНЫЙ КАБИНЕТ</a></li>
                            <li><a href="">ИСТОРИЯ ЗАКАЗА</a></li>
                            <li><a href="">ЗАКЛАДКИ</a></li>
                            <li><a href="">СПИСОК НОВОСТЕЙ</a></li>
                        </ul>
                        <ul>
                            <li>ДОПОЛНИТЕЛЬНО</li>
                            <li><a href="">ПОДАРОЧНЫЕ</a></li>
                            <li><a href="">СЕРТИФИКАТЫ</a></li>
                            <li><a href="">АКЦИИ</a></li>
                            <li><a href="">ЦВЕТЫ В ОФИС</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer_bottom">
                    <span>Copyright © 2021. Все права защищены</span>
                    <div>
                        <h4>Способы оплаты:</h4>
                        <picture>
                            <img src={mastercard} alt="card" />
                        </picture>
                        <picture>
                            <img src={maestro} alt="card" />
                        </picture>
                        <picture>
                            <img src={visa_electron} alt="card" />
                        </picture>
                        <picture>
                            <img src={visa} alt="card" />
                        </picture>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;