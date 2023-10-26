import heart from '../../images/header/header_top/heart.svg';
import lorry from '../../images/header/header_top/lorry.svg';
import phone from '../../images/header/header_top/phone.svg';
import log_in from '../../images/header/header_top/log_in.svg';
import logo from '../../images/header/header_content/logo.svg';
import instagram from '../../images/header/header_content/inst.svg';
import telegram from '../../images/header/header_content/telegram.svg';
import facebook from '../../images/header/header_content/facebook.svg';
import favorites from '../../images/header/header_content/favorites.svg';
import viber from '../../images/header/header_content/viber.svg';
import basket from '../../images/header/header_content/basket.svg';

const Header = () => {
    return (
        <header className="header">
            <div className="header_top">
                <div className="header_container">
                    <ul>
                        <li>
                            <span>Валюта</span>
                            <select name="changed">
                                <option value="1">Грн</option>
                                <option value="2">Доллар</option>
                            </select>
                        </li>
                        <li>
                            <span>Язык</span>
                            <select name="changed">
                                <option value="1">RU</option>
                                <option value="2">UA</option>
                            </select>
                        </li>
                        <li>
                            <span>Город</span>
                            <select name="changed">
                                <option value="1">Киев</option>
                                <option value="2">Одесса</option>
                            </select>
                        </li>
                        <li>
                            <div>
                                <picture>
                                    <img src={heart} alt="heart" />
                                </picture>
                                <span>2</span>
                            </div>
                            <span>Закладки</span>
                        </li>
                        <li>
                            <picture>
                                <img src={lorry} alt="lorry" />
                            </picture>
                            <span>Доставка и оплата</span>
                        </li>
                        <li>
                            <picture>
                                <img src={phone} alt="phone" />
                            </picture>
                            <span>Контакты</span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <picture>
                                <img src={log_in} alt="log in" />
                            </picture>
                            <button>Вход</button>
                        </li>
                        <li>
                            <button>Регистрация</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="header_content">
                <div className="header_content_container">
                    <div className="header_content_left">
                        <a href="#">
                            <picture>
                                <img src={logo} alt="logo" />
                            </picture>
                        </a>
                    </div>
                    <div className="header_content_center">
                        <div className="header_content_center_search">
                            <input type="search" placeholder="Поиск по категориям" list="search_active" name="search_active" />
                            <datalist id="search_active">
                                <option value="Значение 1" />
                                <option value="Значение 2" />
                                <option value="Значение 3" />
                                <option value="Значение 4" />
                                <option value="Значение 5" />
                            </datalist>
                            <input type="search" id="search_active2" placeholder="Поиск по товарам" />
                            <datalist id="search_active2">
                                <option value="Значение 1" />
                                <option value="Значение 2" />
                                <option value="Значение 3" />
                                <option value="Значение 4" />
                                <option value="Значение 5" />
                            </datalist>
                        </div>
                        <div className="header_content_center_menu">
                            <ul>
                                <li>
                                    <a href="">Каталог товаров</a>
                                </li>
                                <li>
                                    <a href="">Форум</a>
                                </li>
                                <li>
                                    <a href="">Отзывы</a>
                                </li>
                                <li>
                                    <a href="">Отзывы</a>
                                </li>
                                <li>
                                    <a href="">Новости</a>
                                </li>
                                <li>
                                    <a href="">Информация</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="header_content_right">
                        <ul>
                            <li>
                                <a href="">
                                    <img src={viber} alt="viber" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src={instagram} alt="instagram" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src={telegram} alt="telegram" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src={facebook} alt="facebook" />
                                </a>
                            </li>
                        </ul>
                        <a href="tel:+380678293030">+38 (067) 829 30 30</a>
                        <div>
                            <div>
                                <picture>
                                    <img src={favorites} alt="favorites" />
                                </picture>
                                <span></span>
                            </div>
                            <div>
                                <picture>
                                    <img src={basket} alt="basket" />
                                </picture>
                                <span></span>
                            </div>
                            <span>₴ 1 520</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;