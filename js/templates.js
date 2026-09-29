import { routeHref } from './router.js';
import { loadCadastro } from './storage.js';

function navigation() {
    return `<header class="topo"><nav class="navbar navbar-expand-lg bg-body-tertiary"><div class="container-fluid"><a class="navbar-brand" href="${routeHref('home')}" data-route="home">ONG Pró Maná</a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuPrincipal" aria-controls="menuPrincipal" aria-expanded="false" aria-label="Abrir menu"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="menuPrincipal"><ul class="navbar-nav ms-auto gap-lg-2"><li class="nav-item"><a class="btn btn-success btn-sm" href="${routeHref('cadastro')}" data-route="cadastro">Realizar Cadastro</a></li><li class="nav-item"><a class="nav-link" href="quem somos.html">Quem Somos</a></li><li class="nav-item"><a class="btn btn-outline-success btn-sm" href="${routeHref('home')}" data-route="home">Início</a></li></ul></div></div></nav></header>`;
}

export function renderHome() {
    return `${navigation()}<main class="d-flex flex-column align-items-center my-4"><section class="container text-center mb-4" id="sobre-ong"><h1 class="texto-titulo">Compartilhando o pão nosso de cada dia</h1><p class="texto-base fw-bold">Ambiente seguro para doações</p><h2 class="texto-subtitulo">Sua ajuda abençoa famílias</h2><p class="texto-base">Escolha a forma como prefere contribuir hoje. Cada gesto faz uma enorme diferença!</p></section><section class="container shadow rounded p-0 bg-body-tertiary overflow-hidden"><header class="text-center text-bg-success p-3"><h2 class="texto-subtitulo">Central de Doações</h2><p class="m-0">Escolha a melhor forma de contribuir</p></header><div class="p-3"><h3 class="texto-subtitulo">Qual tipo de doação deseja fazer?</h3><a class="btn btn-success w-100" href="${routeHref('cadastro')}" data-route="cadastro">Cadastrar entrega</a></div></section></main><footer><div class="container text-center py-3"><p class="m-0">&copy; 2026 ONG Pró Maná. Todos os direitos reservados.</p></div></footer>`;
}

export function renderCadastro() {
    const data = loadCadastro();
    return `${navigation()}<main class="container py-4" style="max-width: 520px"><h1 class="texto-titulo mb-4">Cadastro</h1><div id="formFeedback" class="feedback-cadastro d-none" role="status" aria-live="polite"></div><form id="cadastroForm" novalidate>${input('telefone', 'Telefone', '(00) 00000-0000', data.telefone || '', 'tel')} ${input('cpf', 'CPF', '000.000.000-00', data.cpf || '', 'text')} ${input('cep', 'CEP', '00000-000', data.cep || '', 'text')}<button type="submit" class="btn btn-success w-100">Enviar dados</button></form></main><div class="modal fade" id="cadastroSuccessModal" tabindex="-1" aria-labelledby="cadastroSuccessModalLabel" aria-hidden="true"><div class="modal-dialog modal-dialog-centered"><div class="modal-content"><div class="modal-header"><h2 class="modal-title fs-5" id="cadastroSuccessModalLabel">Cadastro enviado</h2><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button></div><div class="modal-body">Seus dados foram enviados com sucesso.</div><div class="modal-footer"><button type="button" class="btn btn-success" data-bs-dismiss="modal">Entendi</button></div></div></div></div>`;
}

export function renderConfirmation() {
    return `<main class="container py-5" style="max-width: 520px"><section class="feedback-cadastro feedback-cadastro--sucesso text-center" role="status" aria-live="polite"><h1 class="texto-titulo">cadastrado</h1></section></main>`;
}

function input(name, label, placeholder, value, type) {
    const maxLength = name === 'telefone' ? 15 : name === 'cpf' ? 14 : 9;
    const pattern = name === 'telefone' ? '\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}' : name === 'cpf' ? '[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}' : '[0-9]{5}-[0-9]{3}';
    const hint = name === 'telefone' ? '<div class="form-text">Digite o DDD e depois o número: (00) 00000-0000.</div>' : '';
    return `<div class="mb-3"><label class="form-label" for="${name}">${label}</label><input class="form-control" type="${type}" id="${name}" name="${name}" placeholder="${placeholder}" value="${value}" inputmode="numeric" maxlength="${maxLength}" pattern="${pattern}" data-validate required><div class="invalid-feedback"></div>${hint}</div>`;
}
