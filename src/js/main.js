const mainContent = document.querySelector('#mainContent');
const menu = document.querySelector('#menu');

window.addEventListener('hashchange', updateRoute);
updateRoute();

async function updateRoute() {
    const route = '/' + location.hash.replace(/^#+/, '');
    
    if (!Object.keys(routes).includes(route)) {
        location.href = '#';
        return;
    }

    const currentRoute = routes[route]();

    const menuItems = menu.querySelectorAll('a');
    menuItems.forEach(item => {
        item.classList.remove('active');
        item.removeAttribute('aria-current');
    });

    const menuActiveItem = menu.querySelector(`a[href="${'#' + location.hash.replace(/^#+/, '')}"]`);
    if (menuActiveItem) {
        menuActiveItem.classList.add('active');
        menuActiveItem.setAttribute('aria-current', 'page');
    }

    const html = await currentRoute.getHTML();
    mainContent.innerHTML = html;
}