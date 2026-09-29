import { getRoute, navigate } from './router.js';
import { renderHome, renderCadastro, renderConfirmation } from './templates.js';
import { saveCadastro } from './storage.js';
import { formatField, validateField, validateForm } from './validation.js';

const app = document.querySelector('#app');
document.body.replaceChildren(app);

function clearFields(form) {
    form.querySelectorAll('[data-validate]').forEach(field => {
        field.value = '';
        field.classList.remove('is-valid', 'is-invalid');
    });
}

function render() {
    const route = getRoute();
    app.innerHTML = route === 'cadastro' ? renderCadastro() : route === 'confirmacao' ? renderConfirmation() : renderHome();
    document.title = route === 'cadastro' ? 'Cadastro | Pró Maná' : route === 'confirmacao' ? 'Cadastro realizado | Pró Maná' : 'Pró Maná - Início';
    document.querySelectorAll('[data-route]').forEach(link => link.addEventListener('click', event => { event.preventDefault(); navigate(link.dataset.route); }));
    const form = document.querySelector('#cadastroForm');
    if (!form) return;
    form.querySelectorAll('[data-validate]').forEach(field => {
        field.addEventListener('beforeinput', event => { if (event.data && /\D/.test(event.data)) event.preventDefault(); });
        field.addEventListener('input', () => { formatField(field); if (field.classList.contains('is-invalid')) validateField(field); });
        field.addEventListener('blur', () => validateField(field));
    });
    form.addEventListener('submit', event => {
        event.preventDefault();
        if (!validateForm(form)) return;
        saveCadastro(Object.fromEntries(new FormData(form)));
        clearFields(form);
        const modalElement = document.querySelector('#cadastroSuccessModal');
        bootstrap.Modal.getOrCreateInstance(modalElement).show();
    });
}

window.addEventListener('popstate', render);
window.addEventListener('hashchange', render);
render();
