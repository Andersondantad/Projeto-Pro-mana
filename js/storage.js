const STORAGE_KEY = 'pro-mana-cadastros';

export function loadCadastro() {
    return {};
}

export function saveCadastro(data) {
    let cadastros = [];
    try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
        cadastros = Array.isArray(saved) ? saved : [];
    } catch {
        cadastros = [];
    }
    cadastros.push({ ...data, criadoEm: new Date().toISOString() });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cadastros));
}
