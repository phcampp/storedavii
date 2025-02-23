// Dados dos produtos
const products = [
    { id: 1, name: 'Card de Futebol', price: 'R$ 50,00', imageUrl: 'https://via.placeholder.com/250x250?text=Card+de+Futebol', whatsappMessage: 'Quero comprar o card de futebol!' },
    { id: 2, name: 'Card de Anime', price: 'R$ 35,00', imageUrl: 'https://via.placeholder.com/250x250?text=Card+de+Anime', whatsappMessage: 'Quero comprar o card de anime!' },
    // Adicione outros produtos conforme necessário
];

// Renderizar os produtos
function renderProducts() {
    const productsContainer = document.getElementById('products-list');
    productsContainer.innerHTML = ''; // Limpa os produtos antes de renderizar

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${product.price}</p>
            <a href="https://wa.me/55SEUNUMERO?text=${encodeURIComponent(product.whatsappMessage)}" target="_blank" class="btn-buy">
                Comprar no WhatsApp
            </a>
        `;
        productsContainer.appendChild(productCard);
    });
}

// Função de login (simulação de login com Gmail)
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;

    if (email.includes('@gmail.com')) {
        alert('Login realizado com sucesso!');
    } else {
        alert('Por favor, use um e-mail Gmail para fazer login.');
    }
});

// Renderiza os produtos ao carregar a página
renderProducts();
