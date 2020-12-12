import React from 'react';

export function Main() {
    return (
        <main>
        <div className="overlay">
            <article className="hero-1">
                <div>
                    <img className="slide" src="img/about/main.jpg" />
                </div>
                <small className="subtitle">Державний вищий навчальний заклад</small>
                <h1 className="title">
                    Чернівецький політехнічний коледж
                </h1>
                <a className="button" href="#">Детальніше</a>
            </article>
        </div>

        <article className="hero-courses">
            <div className="hero-head">
                <h2 className="title">Спеціальності</h2>
            </div>

            <div className="hero-body container">
                <section className="col-4 col-6-tablet col-12-mobile">
                    <div className="wrapper">
                        <div className="icon">
                            <i className="fas fa-microchip"></i>
                        </div>

                        <h3 className="title">
                            <a href="#">Інженерія програмного забезпечення</a>
                        </h3>
                        <p className="description">
                            Базова спеціальність програмного забезпечення всіх сфер діяльності людини. ЕОМ застосовується в науці і освіті, в органах державного управління та в банківській справі, в промисловості та сільському господарстві.
                        </p>
                        <a className="read-more" href="#">Детальніше &raquo;</a>
                    </div>
                </section>

                <section className="col-4 col-6-tablet col-12-mobile">
                    <div className="wrapper">
                        <div className="icon">
                            <i className="fas fa-satellite-dish"></i>
                        </div>

                        <h3 className="title">
                            <a href="#">Телекомунікації та радіотехніка</a>
                        </h3>
                        <p className="description">
                            Молодший спеціаліст-радіотехнік готується для роботина підприємствах і організаціях, де ведеться конструювання, виробництво, експлуатація, а також обслуговування і ремонт електронної та радіоелектронної апаратури.
                        </p>
                        <a className="read-more" href="#">Детальніше &raquo;</a>
                    </div>
                </section>

                <section className="col-4 col-6-tablet col-12-mobile">
                    <div className="wrapper">
                        <div className="icon">
                            <i className="fas fa-tools"></i>
                        </div>
                        
                        <h3 className="title">
                            <a href="#">Будівництво та цивільна інженерія</a>
                        </h3>
                        <p className="description">
                            Молодший спеціаліст цієї спеціальності призначається для діяльності в будівельних організаціях і їх підрозділах різних галузей народного господарства, які займаються будівництвом та експлуатацією житлових, цивільних, промислових будівель і споруд.
                        </p>
                        <a className="read-more" href="#">Детальніше &raquo;</a>
                    </div>
                </section>
            </div>

        </article>

        <div className="hero-latest-news-title">
            <h2 className="title">Новини Коледжу</h2>
        </div>

        <article className="hero-latest-news">
            <div className="hero-body container">

                <section className="col-4 col-6-tablet col-12-mobile">
                    <div className="wrapper">
                        <div className="article-head">
                            <img src="something.png" />
                            <div className="date">
                                <div className="day">22</div>
                                <div className="month">Now</div>
                            </div>
                        </div>
                        <div className="article-body">
                            <h2 className="article-title">
                                <a href="#">Footprints in Time is perfect House in Kurashiki</a>
                            </h2>
                            <a className="read-more" href="#">Детальніше &raquo;</a>
                        </div>
                    </div>
                </section>

                <section className="col-4 col-6-tablet col-12-mobile">
                    <div className="wrapper">
                        <div className="article-head">
                            <img src="something.png" />
                            <div className="date">
                                <div className="day">22</div>
                                <div className="month">Now</div>
                            </div>
                        </div>
                        <div className="article-body">
                            <h2 className="article-title">
                                <a href="#">Footprints in Time is perfect House in Kurashiki</a>
                            </h2>
                            <a className="read-more" href="#">Детальніше &raquo;</a>
                        </div>
                    </div>
                </section>

                <section className="col-4 col-6-tablet col-12-mobile">
                    <div className="wrapper">
                        <div className="article-head">
                            <img src="something.png" />
                            <div className="date">
                                <div className="day">22</div>
                                <div className="month">Now</div>
                            </div>
                        </div>
                        <div className="article-body">
                            <h2 className="article-title">
                                <a href="#">Footprints in Time is perfect House in Kurashiki</a>
                            </h2>
                            <a className="read-more" href="#">Детальніше &raquo;</a>
                        </div>
                    </div>
                </section>

                <section className="col-4 col-6-tablet col-12-mobile">
                    <div className="wrapper">
                        <div className="article-head">
                            <img src="something.png" />
                            <div className="date">
                                <div className="day">22</div>
                                <div className="month">Now</div>
                            </div>
                        </div>
                        <div className="article-body">
                            <h2 className="article-title">
                                <a href="#">Footprints in Time is perfect House in Kurashiki</a>
                            </h2>
                            <a className="read-more" href="#">Детальніше &raquo;</a>
                        </div>
                    </div>
                </section>

            </div>
        </article>
    </main>
    );
}