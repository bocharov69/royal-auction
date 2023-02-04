document.write(`<header class="header">
    <nav>
        <ul class="header__menu">
            <li class="header__menu-item-wrapper">
                <a href="tockens.html" class="header__menu-item" id="header__menu-link--tockens">
                    <div class="header__menu-item-img" style="margin-right: 7px">
                        <img src="./img/logo.svg" alt="">
                    </div>
                    20
                </a>
            </li>
            <li class="header__menu-item-wrapper">
                <button class="header__menu-item" id="header__menu-link--language"></button>
            </li>
            <li class="header__menu-item-wrapper">
                <a href="notifications.html" class="header__menu-item is-unread" id="header__menu-link--notifications">
                    <div class="header__menu-item-img">
                        <img src="./img/icons/nav/notifications.svg" alt="">
                    </div>
                    <div class="unread"></div>
                </a>
            </li>
            <li class="header__menu-item-wrapper">
                <a href="profile.html" class="header__menu-item" id="header__menu-link--profile">
                    Nickname
                    <div class="header__menu-item-img user-avatar-wrapper">
                        <img src="./img/avatar.png" alt="Ava" class="user-avatar">
                    </div>
                </a>
            </li>
            <li class="header__menu-item-wrapper">
                <a href="##" class="header__menu-item" id="header__menu-link--logout">
                    <div class="header__menu-item-img">
                        <img src="./img/icons/nav/logout.svg" alt="">
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</header>`);