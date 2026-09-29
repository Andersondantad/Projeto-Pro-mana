export function getRoute() {
    const route = window.location.hash.replace('#', '');
    if (route === 'home' || route === 'cadastro' || route === 'confirmacao') return route;
    return decodeURIComponent(window.location.pathname).includes('pagina de cadastro') ? 'cadastro' : 'home';
}

export function navigate(route) {
    window.history.pushState({}, '', `${window.location.pathname}#${route}`);
    window.dispatchEvent(new PopStateEvent('popstate'));
}

export function routeHref(route) {
    return `#${route}`;
}
