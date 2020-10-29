import React from 'react';

export function Header() {
    return (
        <header className="container">
			<div className="col-12 header-top is-desktop">
				<div className="container">
					<div className="col-2 header-top-social">
						<a href="#">
							<i className="fab fa-google" />
						</a>
						<a href="https://www.facebook.com/chpk.cv" target="_blank">
							<i className="fab fa-facebook-f" />
						</a>
						<a href="#">
							<i className="fab fa-instagram" />
						</a>
						<a href="#">
							<i className="fab fa-twitter" />
						</a>
					</div>
					<div className="col-10 header-top-info">
						<ul>
							<li><a href="mailto:mail@polytech.cv.ua">mail@polytech.cv.ua</a></li>
							<li><a href="tel:+380506726735">050 6726 735</a></li>
							<li><a href="https://goo.gl/maps/CNHNs2ktArRVrkME8" target="_blank">м. Чернівці, вул. Павла Каспрука, 2</a></li>
						</ul>
					</div>
				</div>
			</div>
			
			<div className="col-12 header-bottom">
				<div className="container">
					<div className="col-2 header-logo is-desktop">
						<a href="#">
							<i style={{ color: '#2d3092' }} className="fas fa-graduation-cap" />
                            Polytech
						</a>
					</div>

					<nav className="col-12-tablet col-10 burger-menu">
						<input type="checkbox" id="burger-input" hidden />
						<label onclick="on_click_burger_menu()" className="burger-icon is-mobile" for="burger-input">
							<span></span>
							<span></span>
							<span></span>
						</label>

						<div className="burger-logo is-mobile">
							<a href="#">
								<i style={{color: '#2d3092'}} className="fas fa-graduation-cap" /> Polytech
							</a>
						</div>

						<ul>
							<li><a href="#">Головна</a></li>
							<li>
								<div className="dropdown is-desktop">
									<a className="dropdown-button">
										<span className="is-desktop">
											<i className="fas fa-caret-down" /> Про нас
										</span>
									</a>
									<div className="dropdown-content">
										<a href="#">Історія коледжу</a>
										<a href="#">Фотогалерея</a>
										<a href="#">Державні закупівлі</a>
										<a href="#">Установчі документи</a>
										<a href="#">Нормативна база</a>
										<a href="#">Адміністрація</a>
										<a href="#">Циклова комісія</a>
										<a href="#">Публічна інформація</a>
										<a href="#">Випускникам</a>
									</div>
								</div>

								<div className="is-mobile mobile-dropdown">
									<input type="checkbox" id="test3" />
									<label for="test3">
										<div className="dropdown-button">
											<span className="is-mobile">
												Про нас <i className="icon fas fa-caret-down" />
											</span>
										</div>
									</label>
									<div className="dropdown-content">
										<a href="#">Історія коледжу</a>
										<a href="#">Фотогалерея</a>
										<a href="#">Державні закупівлі</a>
										<a href="#">Установчі документи</a>
										<a href="#">Нормативна база</a>
										<a href="#">Адміністрація</a>
										<a href="#">Циклова комісія</a>
										<a href="#">Публічна інформація</a>
										<a href="#">Випускникам</a>
									</div>
								</div>
							</li>
							<li>
								<div className="dropdown is-desktop">
									<a className="dropdown-button">
										<span className="is-desktop">
											<i className="fas fa-caret-down"/> Відділення
										</span>
									</a>
									<div className="dropdown-content">
										<a href="#">Відділення архітектури та будівництва</a>
										<a href="#">Відділення інформаційних технологій</a>
										<a href="#">Відділення електроніки та телекомунікацій</a>
									</div>
								</div>

								<div className="is-mobile mobile-dropdown">
									<input type="checkbox" id="test" />
									<label for="test">
										<div className="dropdown-button">
											<span className="is-mobile">
												Відділення <i className="icon fas fa-caret-down" />
											</span>
										</div>
									</label>
									<div className="dropdown-content">
										<a href="#">Відділення архітектури та будівництва</a>
										<a href="#">Відділення інформаційних технологій</a>
										<a href="#">Відділення електроніки та телекомунікацій</a>
									</div>
								</div>
							</li>
							<li>
								<div className="dropdown is-desktop">
									<a className="dropdown-button">
										<span className="is-desktop">
											<i className="fas fa-caret-down"></i> Студентам
										</span>
									</a>
									<div className="dropdown-content">
										<a href="#">Студентська рада</a>
										<a href="#">Студентські новини</a>
										<a href="#">Електронне навчання</a>
										<a href="#">Навчально-виховний процес</a>
										<a href="#">Стипендіальне запезпечення</a>
										<a href="#">ЗНО 2020</a>
									</div>
								</div>

								<div className="is-mobile mobile-dropdown">
									<input type="checkbox" id="test2" />
									<label for="test2">
										<div className="dropdown-button">
											<span className="is-mobile">
												Студентам <i className="icon fas fa-caret-down"></i>
											</span>
										</div>
									</label>
									<div className="dropdown-content">
										<a href="#">Студентська рада</a>
										<a href="#">Студентські новини</a>
										<a href="#">Електронне навчання</a>
										<a href="#">Навчально-виховний процес</a>
										<a href="#">Стипендіальне запезпечення</a>
										<a href="#">ЗНО 2020</a>
									</div>
								</div>
							</li>
							<li><a href="#">Абітурієнтам</a></li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
    )
}