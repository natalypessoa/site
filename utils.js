// Máscara CPF
function mascaraCpf(el) {
  el.addEventListener('input', function () {
    let v = this.value.replace(/\D/g, '').substring(0, 11);
    v = v.replace(/(\d{3})(\d)/, '$1.$2')
         .replace(/(\d{3})(\d)/, '$1.$2')
         .replace(/(\d{3})(\d{1,2})/, '$1-$2');
    this.value = v;
  });
}

// Máscara Telefone
function mascaraTel(el) {
  el.addEventListener('input', function () {
    let v = this.value.replace(/\D/g, '').substring(0, 11);
    v = v.length <= 10
      ? v.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3')
      : v.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    this.value = v;
  });
}

// Validações
const validar = {
  nome:  v => v.trim().split(/\s+/).length >= 2 && /^[a-zA-ZÀ-ÿ\s]+$/.test(v.trim()),
  cpf:   v => /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(v),
  email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
  idade: (v, min, max) => { const n = +v; return !isNaN(n) && n >= min && n <= max; },
  tel:   v => v.replace(/\D/g, '').length >= 10,
  sel:   v => !!v,
};

function checar(id, valido) {
  const el = document.getElementById(id);
  el.classList.toggle('tem-erro', !valido);
  return valido;
}

function mostrarSucesso(titulo, texto, linkDash = false) {
  const s = document.getElementById('msg-sucesso');
  document.getElementById('sucesso-titulo').textContent = titulo;
  document.getElementById('sucesso-texto').textContent = texto;
  const btn = s.querySelector('a');
  if (btn) btn.style.display = linkDash ? 'inline-block' : 'none';
  s.classList.add('visivel');
  window.scrollTo(0, 9999);
}