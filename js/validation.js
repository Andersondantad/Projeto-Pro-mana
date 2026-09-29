const patterns = {
    telefone: /^\([0-9]{2}\) [0-9]{5}-[0-9]{4}$/,
    cpf: /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/,
    cep: /^[0-9]{5}-[0-9]{3}$/
};

export function formatField(field) {
    const digits = field.value.replace(/\D/g, '');
    if (field.name === 'telefone') {
        const value = digits.slice(0, 11);
        const ddd = value.slice(0, 2);
        const number = value.slice(2);
        field.value = ddd.length < 2 ? `(${ddd}` : `(${ddd}) ${number}`.replace(/(\d{5})(\d)/, '$1-$2');
    }
    if (field.name === 'cpf') field.value = digits.slice(0, 11).replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1-$2');
    if (field.name === 'cep') field.value = digits.slice(0, 8).replace(/(\d{5})(\d)/, '$1-$2');
}

export function validateField(field) {
    const valid = Boolean(field.value.trim() && patterns[field.name]?.test(field.value));
    field.classList.toggle('is-valid', valid);
    field.classList.toggle('is-invalid', !valid);
    field.parentElement.querySelector('.invalid-feedback').textContent = valid ? '' : 'Campo invalido';
    return valid;
}

export function validateForm(form) {
    return [...form.querySelectorAll('[data-validate]')].map(validateField).every(Boolean);
}
