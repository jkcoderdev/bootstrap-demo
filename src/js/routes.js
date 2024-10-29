const routes = {
    '/': () => new Page({
        title: 'Bootstrap Demo',
        file: 'home.html',
    }),
    '/about': () => new Page({
        title: 'About us',
        file: 'about.html',
    }),
    '/services': () => new Page({
        title: 'Services',
        file: 'services.html',
    }),
    '/contact': () => new Page({
        title: 'Contact',
        file: 'contact.html',
    })
};