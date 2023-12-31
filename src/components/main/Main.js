import discount from '../../images/main/discount_present/discout.jpg';
import present1 from '../../images/main/discount_present/present1.jpg';
import present2 from '../../images/main/discount_present/present2.jpg';
import present6 from '../../images/main/discount_present/present6.png';
import present4 from '../../images/main/discount_present/present4.jpg';
import present5 from '../../images/main/discount_present/present5.png';
import photo_report1 from '../../images/main/photo_report/photo_report_1n.svg';
import photo_report2 from '../../images/main/photo_report/photo_report_2na.svg';
import photo_report3 from '../../images/main/photo_report/photo_report_3n.svg';
import arrowL from '../../images/main/stock/arrowL.svg';
import arrowR from '../../images/main/stock/arrowR.svg';
import health from '../../images/main/stock/health.svg';
import red_rose from '../../images/main/stock/red_rose.jpg';
import raiting from '../../images/main/stock/raiting.svg';
import pink_rose from '../../images/main/stock/pink_rose.jpg';
import beeng_love from '../../images/main/stock/beeng_love.jpg';
import all_for_you from '../../images/main/stock/all_for_you.jpg';
import reverie from '../../images/main/sesonal/reverie.jpg';
import sunny_mood from '../../images/main/sesonal/sunny_mood.jpg';
import flower_bed from '../../images/main/sesonal/flower_bed.jpg';
import basket_thumbelina from '../../images/main/sesonal/basket_thumbelina.jpg';
import napoleon from '../../images/main/gift/card/napoleon.jpg';
import kievskiy from '../../images/main/gift/card/kievskiy.jpg';
import levantiner from '../../images/main/gift/card/levantiner.jpg';
import born_day from '../../images/main/gift/card/born_day.jpg';
import arrowF from '../../images/main/forum/forum_arrow.svg';
import forum1 from '../../images/main/forum/forum1.jpg';
import forum2 from '../../images/main/forum/forum2.jpg';
import forum3 from '../../images/main/forum/forum3.jpg';
import map_logo from '../../images/main/map_contact/contact_logo.svg';
import phoneM from '../../images/main/map_contact/phone.svg';
import skypeM from '../../images/main/map_contact/skype.svg';
import mallM from '../../images/main/map_contact/email.svg';
import instM from '../../images/main/map_contact/inst.svg';
import skypeC from '../../images/main/map_contact/skype2.svg';
import facebookM from '../../images/main/map_contact/facebook.svg';

const Main = () => {
    return (
        <main className="main">
            <div className="main_container">
                <section className="main_discount">
                    <div className="main_discount1">
                        <picture>
                            <img src={discount} alt="discout"/>
                        </picture>
                        <span>Скидки <span>-6%</span> на все букеты <span>по предзаказу</span> на 8 марта</span>
                    </div>
                    <div className="main_discount2">
                        <picture>
                            <img src={present1} alt="present"/>
                        </picture>
                        <span>Розы</span>
                    </div>
                    <div className="main_discount3">
                        <picture>
                            <img src={present2} alt="present"/>
                        </picture>
                        <span>Подарки</span>
                    </div>
                    <div className="main_discount4">
                        <picture className="main_discount5"><img src={present6} alt="present"/>
                        </picture>
                        <span>Подарочные корзины</span>
                    </div>
                    <div className="main_discount6">
                <picture className="main_discount7"><img src={present4} alt="present"/>
                        </picture>
                        <picture className="main_discount8"><img src={present5} alt="present"/>
                        </picture>
                        <span>Цветы в коробке</span>
                    </div>
                </section>
                <section className="main_photo_report">
                    <div className="main_photo_report_blocks">
                        <div>
                            <img src={photo_report1} alt="photo report"/>
                                <h2>Фото доставок наших букетов</h2>
                                <p>Безупречное качество обслуживания и доставка в любую точку города</p>
                        </div>
                        <div>
                            <picture>
                                <img src={photo_report2} alt="video report"/>
                            </picture>
                            <h2>Видео отчеты клиентов</h2>
                            <p>Наши счастливые клиенты с букетами от Flowers-Ukraine</p>
                        </div>
                        <div>
                            <picture>
                                <img src={photo_report3} alt="every gift"/>
                            </picture>
                            <h2>Подарок каждому клиенту</h2>
                            <p>К каждому заказу мы прилогаем комплимент от компании
                                в виде маленького презента
                            </p>
                        </div>
                    </div>
                </section>
                <section className="main_stock">
                    <div className="main_stock_top">
                        <h2>Акции</h2>
                        <div className="main_stock_arrow">
                            <picture>
                                <img src={arrowL} alt="arrow"/>
                            </picture>
                            <picture>
                                <img src={arrowR} alt="arrow"/>
                            </picture>
                        </div>
                    </div>
                    <div className="main_stock_blocks">
                        <div className="main_stock_card">
                            <div className="main_stock_card_top">
                                <span>-19%</span>
                                <picture>
                                    <img src={health} alt="health"/>
                                </picture>
                            </div>
                            <picture>
                                <img src={red_rose} alt="red_rose"/>
                            </picture>
                            <span>top</span>
                            <div className="main_stock_card_raiting">
                                <picture>
                                    <img src={raiting} alt="raiting"/>
                                </picture>
                            </div>
                            <div className="main_stock_card_med">
                                <h3>101 красная роза</h3>
                                <div className="main_stock_card_price">
                                    <span>2800 грн</span>
                                    <span>2280 грн</span>
                                </div>
                            </div>
                            <a href="">Заказать</a>
                            <a href="">Быстрый заказ</a>
                        </div>
                        <div className="main_stock_card">
                            <div className="main_stock_card_top">
                                <span>-10%</span>
                                <picture>
                                    <img src={health} alt="health"/>
                                </picture>
                            </div>
                            <picture>
                                <img src={pink_rose} alt="pink rose"/>
                            </picture>
                            <span>top</span>
                            <div className="main_stock_card_raiting">
                                <picture>
                                    <img src={raiting} alt="raiting"/>
                                </picture>
                            </div>
                            <div className="main_stock_card_med">
                                <h3>25 розовых пионовидных роз</h3>
                                <div className="main_stock_card_price">
                                    <span>2800 грн</span>
                                    <span>1680 грн</span>
                                </div>
                            </div>
                            <a href="">Заказать</a>
                            <a href="">Быстрый заказ</a>
                        </div>
                        <div className="main_stock_card">
                            <div className="main_stock_card_top">
                                <span>-19%</span>
                                <picture>
                                    <img src={health} alt="health"/>
                                </picture>
                            </div>
                            <picture>
                                <img src={beeng_love} alt="love"/>
                            </picture>
                            <span>top</span>
                            <div className="main_stock_card_raiting">
                                <picture>
                                    <img src={raiting} alt="raiting"/>
                                </picture>
                            </div>
                            <div className="main_stock_card_med">
                                <h3>Влюбленность</h3>
                                <div className="main_stock_card_price">
                                    <span>2800 грн</span>
                                    <span>1270 грн</span>
                                </div>
                            </div>
                            <a href="">Заказать</a>
                            <a href="">Быстрый заказ</a>
                        </div>
                        <div className="main_stock_card">
                            <div className="main_stock_card_top">
                                <span>-19%</span>
                                <picture>
                                    <img src={health} alt="health"/>
                                </picture>
                            </div>
                            <picture>
                                <img src={all_for_you} alt="all_for_you"/>
                            </picture>
                            <span>top</span>
                            <div className="main_stock_card_raiting">
                                <picture>
                                    <img src={raiting} alt="raiting"/>
                                </picture>
                            </div>
                            <div className="main_stock_card_med">
                                <h3>Корзина все для тебя</h3>
                                <div className="main_stock_card_price">
                                    <span>2800 грн</span>
                                    <span>2020 грн</span>
                                </div>
                            </div>
                            <a href="">Заказать</a>
                            <a href="">Быстрый заказ</a>
                        </div>
                        <div className="main_stock_card">
                            <div className="main_stock_card_top">
                                <span>-19%</span>
                                <picture>
                                    <img src={health} alt="health"/>
                                </picture>
                            </div>
                            <picture>
                                <img src={red_rose} alt="red_rose"/>
                            </picture>
                            <span>top</span>
                            <div className="main_stock_card_raiting">
                                <picture>
                                    <img src={raiting} alt="raiting"/>
                                </picture>
                            </div>
                            <div className="main_stock_card_med">
                                <h3>101 красная роза</h3>
                                <div className="main_stock_card_price">
                                    <span>2800 грн</span>
                                    <span>2280 грн</span>
                                </div>
                            </div>
                            <a href="">Заказать</a>
                            <a href="">Быстрый заказ</a>
                        </div>
                        <div className="main_stock_card">
                            <div className="main_stock_card_top">
                                <span>-10%</span>
                                <picture>
                                    <img src={health} alt="health"/>
                                </picture>
                            </div>
                            <picture>
                                <img src={pink_rose} alt="pink rose"/>
                            </picture>
                            <span>top</span>
                            <div className="main_stock_card_raiting">
                                <picture>
                                    <img src={raiting} alt="raiting"/>
                                </picture>
                            </div>
                            <div className="main_stock_card_med">
                                <h3>25 розовых пионовидных роз</h3>
                                <div className="main_stock_card_price">
                                    <span>2800 грн</span>
                                    <span>1680 грн</span>
                                </div>
                            </div>
                            <a href="">Заказать</a>
                            <a href="">Быстрый заказ</a>
                        </div>
                        <div className="main_stock_card">
                            <div className="main_stock_card_top">
                                <span>-10%</span>
                                <picture>
                                    <img src={health} alt="health"/>
                                </picture>
                            </div>
                            <picture>
                                <img src={beeng_love} alt="love"/>
                            </picture>
                            <span>top</span>
                            <div className="main_stock_card_raiting">
                                <picture>
                                    <img src={raiting} alt="raiting"/>
                                </picture>
                            </div>
                            <div className="main_stock_card_med">
                                <h3>Влюбленность</h3>
                                <div className="main_stock_card_price">
                                    <span>2800 грн</span>
                                    <span>1270 грн</span>
                                </div>
                            </div>
                            <a href="">Заказать</a>
                            <a href="">Быстрый заказ</a>
                        </div>
                        <div className="main_stock_card">
                            <div className="main_stock_card_top">
                                <span>-19%</span>
                                <picture>
                                    <img src={health} alt="health"/>
                                </picture>
                            </div>
                            <picture>
                                <img src={all_for_you} alt="all_for_you"/>
                            </picture>
                            <span>top</span>
                            <div className="main_stock_card_raiting">
                                <picture>
                                    <img src={raiting} alt="raiting"/>
                                </picture>
                            </div>
                            <div className="main_stock_card_med">
                                <h3>Корзина все для тебя</h3>
                                <div className="main_stock_card_price">
                                    <span>2800 грн</span>
                                    <span>2020 грн</span>
                                </div>
                            </div>
                            <a href="">Заказать</a>
                            <a href="">Быстрый заказ</a>
                        </div>
                    </div>
                </section>
                <section className="main_sesonal">
                    <div className="main_sesonal_top">
                        <h2>Сезонные</h2>
                        <div className="main_sesonal_arrow">
                            <picture>
                                <img src={arrowL} alt="arrow"/>
                            </picture>
                            <picture>
                                <img src={arrowR} alt="arrow"/>
                            </picture>
                        </div>
                    </div>
                    <div className="main_sesonal_blocks">
                        <div className="main_sesonal_card">
                            <div className="main_sesonal_card_top">
                                <picture>
                                    <img src={health} alt="health"/>
                                </picture>
                                <picture>
                                    <img src={reverie} alt="reverie"/>
                                </picture>
                            </div>
                            <span>top</span>
                            <div className="main_stock_card_raiting">
                                <picture>
                                    <img src={raiting} alt="raiting"/>
                                </picture>
                            </div>
                            <div className="main_sesonal_card_price">
                                <h3>Мечтательница</h3>
                                <span>2280 грн</span>
                            </div>
                            <a href="">Заказать</a>
                            <a href="">Быстрый заказ</a>
                        </div>
                        <div className="main_sesonal_card">
                            <div className="main_sesonal_card_top">
                                <picture>
                                    <img src={health} alt="health"/>
                                </picture>
                                <picture>
                                    <img src={sunny_mood} alt="sunny_mood"/>
                                </picture>
                            </div>
                            <span>top</span>
                            <div className="main_stock_card_raiting">
                                <picture>
                                    <img src={raiting} alt="raiting"/>
                                </picture>
                            </div>
                            <div className="main_sesonal_card_price">
                                <h3>Корзина солнечного настроения</h3>
                                <span>1680 грн</span>
                            </div>
                            <a href="">Заказать</a>
                            <a href="">Быстрый заказ</a>
                        </div>
                        <div className="main_sesonal_card">
                            <div className="main_sesonal_card_top">
                                <picture>
                                    <img src={health} alt="health"/>
                                </picture>
                                <picture>
                                    <img src={flower_bed} alt="flower_bed"/>
                                </picture>
                            </div>
                            <span>top</span>
                            <div className="main_sesonal_card_raiting">
                                <picture>
                                    <img src={raiting} alt="raiting"/>
                                </picture>
                            </div>
                            <div className="main_sesonal_card_price">
                                <h3>Цветочная клумба</h3>
                                <span>1270 грн</span>
                            </div>
                            <a href="">Заказать</a>
                            <a href="">Быстрый заказ</a>
                        </div>
                        <div className="main_sesonal_card">
                            <div className="main_sesonal_card_top">
                                <picture>
                                    <img src={health} alt="health"/>
                                </picture>
                                <picture>
                                    <img src={basket_thumbelina} alt="basket_thumbelina"/>
                                </picture>
                            </div>
                            <span>top</span>
                            <div className="main_stock_card_raiting">
                                <picture>
                                    <img src={raiting} alt="raiting"/>
                                </picture>
                            </div>
                            <div className="main_sesonal_card_price">
                                <h3>Корзина Дюймовочка</h3>
                                <span>2020 грн</span>
                            </div>
                            <a href="">Заказать</a>
                            <a href="">Быстрый заказ</a>
                        </div>
                        <div className="main_sesonal_card">
                            <div className="main_sesonal_card_top">
                                <picture>
                                    <img src={health} alt="health"/>
                                </picture>
                                <picture>
                                    <img src={reverie} alt="reverie"/>
                                </picture>
                            </div>
                            <span>top</span>
                            <div className="main_stock_card_raiting">
                                <picture>
                                    <img src={raiting} alt="raiting"/>
                                </picture>
                            </div>
                            <div className="main_sesonal_card_price">
                                <h3>Мечтательница</h3>
                                <span>2280 грн</span>
                            </div>
                            <a href="">Заказать</a>
                            <a href="">Быстрый заказ</a>
                        </div>
                        <div className="main_sesonal_card">
                            <div className="main_sesonal_card_top">
                                <picture>
                                    <img src={health} alt="health"/>
                                </picture>
                                <picture>
                                    <img src={sunny_mood} alt="sunny_mood"/>
                                </picture>
                            </div>
                            <span>top</span>
                            <div className="main_stock_card_raiting">
                                <picture>
                                    <img src={raiting} alt="raiting"/>
                                </picture>
                            </div>
                            <div className="main_sesonal_card_price">
                                <h3>Корзина солнечного настроения</h3>
                                <span>1680 грн</span>
                            </div>
                            <a href="">Заказать</a>
                            <a href="">Быстрый заказ</a>
                        </div>
                        <div className="main_sesonal_card">
                            <div className="main_sesonal_card_top">
                                <picture>
                                    <img src={health} alt="health"/>
                                </picture>
                                <picture>
                                    <img src={flower_bed} alt="sunny_mood"/>
                                </picture>
                            </div>
                            <span>top</span>
                            <div className="main_sesonal_card_raiting">
                                <picture>
                                    <img src={raiting} alt="raiting"/>
                                </picture>
                            </div>
                            <div className="main_sesonal_card_price">
                                <h3>Цветочная клумба</h3>
                                <span>1270 грн</span>
                            </div>
                            <a href="">Заказать</a>
                            <a href="">Быстрый заказ</a>
                        </div>
                        <div className="main_sesonal_card">
                            <div className="main_sesonal_card_top">
                                <picture>
                                    <img src={health} alt="health"/>
                                </picture>
                                <picture>
                                    <img src={basket_thumbelina} alt="basket_thumbelina"/>
                                </picture>
                            </div>
                            <span>top</span>
                            <div className="main_stock_card_raiting">
                                <picture>
                                    <img src={raiting} alt="raiting"/>
                                </picture>
                                <div className="main_sesonal_card_price">
                                    <h3>Корзина Дюймовочка</h3>
                                    <span>2020 грн</span>
                                </div>
                            </div>
                            <a href="">Заказать</a>
                            <a href="">Быстрый заказ</a>
                        </div>
                    </div>
                </section>
                <section className="main_gift">
                    <div className="main_gift_top">
                        <h2>Подарки</h2>
                        <div className="main_gift_arrow">
                            <picture>
                                <img src={arrowL} alt="arrow"/>
                            </picture>
                            <picture>
                                <img src={arrowR} alt="arrow"/>
                            </picture>
                        </div>
                    </div>
                    <div className="main_gift_blocks">
                        <div className="main_gift_card">
                            <picture>
                                <img src={health} alt="health"/>
                            </picture>
                            <picture>
                                <img src={napoleon} alt="napoleon"/>
                            </picture>
                            <span>top</span>
                            <div className="main_gift_card_raiting">
                                <picture>
                                    <img src={raiting} alt="raiting"/>
                                </picture>
                            </div>
                            <div className="main_gift_card_price">
                                <h3>Торт Наполеон</h3>
                                <span>2280 грн</span>
                            </div>
                            <a href="">Заказать</a>
                            <a href="">Быстрый заказ</a>
                        </div>
                        <div className="main_gift_card">
                            <picture>
                                <img src={health} alt="health"/>
                            </picture>
                            <picture>
                                <img src={kievskiy} alt="kievskiy"/>
                            </picture>
                            <span>top</span>
                            <div className="main_gift_card_raiting">
                                <picture>
                                    <img src={raiting} alt="raiting"/>
                                </picture>
                            </div>
                            <div className="main_gift_card_price">
                                <h3>Киевский торт</h3>
                                <span>1680 грн</span>
                            </div>
                            <a href="">Заказать</a>
                            <a href="">Быстрый заказ</a>
                        </div>
                        <div className="main_gift_card">
                            <picture>
                                <img src={health} alt="health"/>
                            </picture>
                            <picture>
                                <img src={levantiner} alt="levantiner"/>
                            </picture>
                            <span>top</span>
                            <div className="main_gift_card_raiting">
                                <picture>
                                    <img src={raiting} alt="raiting"/>
                                </picture>
                            </div>
                            <div className="main_gift_card_price">
                                <h3>Торт Левантинер</h3>
                                <span>1270 грн</span>
                            </div>
                            <a href="">Заказать</a>
                            <a href="">Быстрый заказ</a>
                        </div>
                        <div className="main_gift_card">
                            <picture>
                                <img src={health} alt="health"/>
                            </picture>
                            <picture>
                                <img src={born_day} alt="born_day"/>
                            </picture>
                            <span>top</span>
                            <div className="main_gift_card_raiting">
                                <picture>
                                    <img src={raiting} alt="raiting"/>
                                </picture>
                            </div>
                            <div className="main_gift_card_price">
                                <h3>Торт на день рождения</h3>
                                <span>2020 грн</span>
                            </div>
                            <a href="">Заказать</a>
                            <a href="">Быстрый заказ</a>
                        </div>
                        <div className="main_gift_card">
                            <picture>
                                <img src={health} alt="health"/>
                            </picture>
                            <picture>
                                <img src={napoleon} alt="reverie"/>
                            </picture>
                            <span>top</span>
                            <div className="main_stock_card_raiting">
                                <picture>
                                    <img src={raiting} alt="raiting"/>
                                </picture>
                            </div>
                            <div className="main_gift_card_price">
                                <h3>Торт Наполеон</h3>
                                <span>2280 грн</span>
                            </div>
                            <a href="">Заказать</a>
                            <a href="">Быстрый заказ</a>
                        </div>
                        <div className="main_gift_card">
                            <picture>
                                <img src={health} alt="health"/>
                            </picture>
                            <picture>
                                <img src={kievskiy} alt="kievskiy"/>
                            </picture>
                            <span>top</span>
                            <div className="main_gift_card_raiting">
                                <picture>
                                    <img src={raiting} alt="raiting"/>
                                </picture>
                            </div>
                            <div className="main_gift_card_price">
                                <h3>Киевский торт</h3>
                                <span>1680 грн</span>
                            </div>
                            <a href="">Заказать</a>
                            <a href="">Быстрый заказ</a>
                        </div>
                        <div className="main_gift_card">
                            <picture>
                                <img src={health} alt="health"/>
                            </picture>
                            <picture>
                                <img src={levantiner} alt="levantiner"/>
                            </picture>
                            <span>top</span>
                            <div className="main_gift_card_raiting">
                                <picture>
                                    <img src={raiting} alt="raiting"/>
                                </picture>
                            </div>
                            <div className="main_gift_card_price">
                                <h3>Торт Левантинер</h3>
                                <span>1270 грн</span>
                            </div>
                            <a href="#/">Заказать</a>
                            <a href="#/">Быстрый заказ</a>
                        </div>
                        <div className="main_gift_card">
                            <picture>
                                <img src={health} alt="health"/>
                            </picture>
                            <picture>
                                <img src={born_day} alt="born_day"/>
                            </picture>
                            <span>top</span>
                            <div className="main_gift_card_raiting">
                                <picture>
                                    <img src={raiting} alt="raiting"/>
                                </picture>
                            </div>
                            <div className="main_gift_card_price">
                                <h3>Торт на день рождения</h3>
                                <span>2020 грн</span>
                            </div>
                            <a href="#/">Заказать</a>
                            <a href="#/">Быстрый заказ</a>
                        </div>
                    </div>
                </section>
                <section className="main_forum">
                    <div className="main_forum_top">
                        <h2>Форум</h2>
                        <div className="main_forum_top_new">
                            <a href="#/">
                                <span>Все новости</span>
                                <picture>
                                    <img src={arrowF} alt="arrow"/>
                                </picture>
                            </a>
                        </div>
                    </div>
                    <div className="main_forum_blocks">
                        <a href="#/" className="main_forum_blocks_card">
                            <picture>
                                <img src={forum1} alt="flower"/>
                            </picture>
                            <h2>Какие цветы под запретом: что нельзя дарить</h2>
                            <p>Осведомленности в сфере новых трендов цветочного
                                дизайна и знакомства с работами...
                            </p>
                        </a>
                        <a href="#/" className="main_forum_blocks_card">
                            <picture>
                                <img src={forum2} alt="flower"/>
                            </picture>
                            <h2>Как сохранить букет свежим: советы и рекомендации</h2>
                            <p>Осведомленности в сфере новых трендов цветочного
                                дизайна и знакомства с работами...
                            </p>
                        </a>
                        <a href="#/" className="main_forum_blocks_card">
                            <picture>
                                <img src={forum3} alt="flower"/>
                            </picture>
                            <h2>Цветочный этикет - как правильно дарить цветы</h2>
                            <p>Осведомленности в сфере новых трендов цветочного
                                дизайна и знакомства с работами...
                            </p>
                        </a>
                    </div>
                </section>
                <section className="main_map_contact">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d81208.4719429686!2d30.41827930821504!3d50.50133601844522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x40d4d2144824933b%3A0xadf7ee140c195325!2z0LwsINCy0YPQu9C40YbRjyDQnNCw0YDRiNCw0LvQsCDQnNCw0LvQuNC90L7QstGB0YzQutC-0LPQviwgMjQvNiwg0JrQuNGX0LIsIDAyMDAw!3m2!1d50.5013339!2d30.5006795!5e0!3m2!1sru!2sua!4v1694118896037!5m2!1sru!2sua"
                        width="100%" height="508" style={{ border: 0}} allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                    <div className="main_map_contact_content">

                        <picture>
                            <img src={map_logo} alt="logo"/>
                        </picture>
                        <div>
                            <div>
                                <picture>
                                    <img src={phoneM} alt="phone"/>
                                </picture>
                                <span>Телефон:</span>
                            </div>
                            <a href="tel:++380638293030">+38 (063) 829 30 30</a>
                            <a href="tel:++380678293030">+38 (067) 829 30 30</a>
                        </div>
                        <div>
                            <div>
                                <img src={skypeM} alt="skype"/>
                                    <span>Skype</span>
                            </div>
                            <a href="http://Flowers-Ukraine">Flowers-Ukraine</a>
                        </div>
                        <div>
                            <div>
                                <picture>
                                    <img src={mallM} alt="mail"/>
                                </picture>
                                <span>Почта</span>
                            </div>
                            <a href="mailto:flowers.ukraine2014@gmail.com">flowers.ukraine2014@gmail.com</a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/"><picture><img src={instM} alt="inst"/></picture></a>
                            <a href="https://www.skype.com/"><picture><img src={skypeC} alt="skype"/></picture></a>
                            <a href="https://www.facebook.com/"><picture><img src={facebookM} alt="facebook"/></picture></a>
                        </div>

                    </div>
                </section>
            </div>
        </main>
    );
}

export default Main;