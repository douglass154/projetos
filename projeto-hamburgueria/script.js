
const menu = document.querySelector('#menu');
const cartBtn = document.querySelector('#cart-btn');
const cartModal = document.querySelector('#cart-modal');
const cartItemsContainer = document.querySelector('#cart-items');
const cartTotal = document.querySelector('#cart-total');
const checkoutBtn = document.querySelector('#checkout-btn');
const closeModalBtn = document.querySelector('#close-modal-btn');
const cartCounter = document.querySelector('#cart-count');
const adressImput = document.querySelector('#adress');
const adressWarn = document.querySelector('#adress-warn');

let cart = [];

// Abrir o modal do carrinho
cartBtn.addEventListener('click', () => {
    updateCartModal();
    cartModal.style.display = 'flex';
})


// Fechar o modal ao clicar fora
cartModal.addEventListener('click', (event) => {
    if (event.target === cartModal) cartModal.style.display = 'none';
})

closeModalBtn.addEventListener('click', () => {
    cartModal.style.display = 'none';
})


menu.addEventListener('click', (event) => {
    const el = event.target;

    let parentButton = el.closest(".add-to-cart-btn");
    
    if (parentButton) {
        const name = parentButton.getAttribute("data-name");
        const price = parseFloat(parentButton.getAttribute("data-price"));

        // Adicionar no carrinho
        addToCart(name, price);
    }
})


// Função para adicionar no carrinho
function addToCart(name, price) {

    const existingItem = cart.find(item => item.name === name)
    
    if (existingItem) {
        // Se o item já existir, aumenta apenas a quantidade +1
        existingItem.quantity += 1;
    } else {
        cart.push({
            name,
            price,
            quantity: 1,
        });
    }


    updateCartModal();
}


// Atualizar carrinho
function updateCartModal() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('flex', 'justify-between', 'my-3', 'flex-col')

        cartItemElement.innerHTML = `
            <div class="flex justify-between items-center">
                <div>
                    <p class="font-medium">${item.name}</p>
                    <p>(Quantidade: ${item.quantity})</p>
                    <p class="font-medium mt-2">R$ ${item.price.toFixed(2)}</p>
                </div>

                <button class="remove-btn" data-name="${item.name}">
                    Remover
                </button>
            </>
        `

        total += item.price * item.quantity;

        cartItemsContainer.appendChild(cartItemElement);
    })

    cartTotal.textContent = total.toLocaleString('pt-br', {
        style: "currency",
        currency: "BRL",
    })

    cartCounter.textContent = cart.length
}


// Função para remover items do carrinho
cartItemsContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-btn')) {
        const name = event.target.getAttribute('data-name');

        removeItemCart(name);
    }
})

function removeItemCart(name) {
    const index = cart.findIndex(item => item.name === name);

    if (index !== -1) {
        const item = cart[index];

        if (item.quantity > 1) {
            item.quantity -= 1;
            updateCartModal();
            return
        }

        cart.splice(index, 1);
        updateCartModal()
    }
}


//Função para verificar o endereço de entrega
adressImput.addEventListener('click', (event) => {
    let imputValue = event.target.value;

    if (imputValue !== "") {
        adressImput.classList.remove('border-red-500', 'bg-red-100');
        adressWarn.classList.add('hidden');
    }
})


// Finalizar pedido;
checkoutBtn.addEventListener('click', () => {

    const isOpen = checkHour()

    if (!isOpen) {

        Toastify({
            text: "O restaurante está fechado no momento!!",
            duration: 2500,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "#ef4444",
            },
        }).showToast()

        return;
    }

    if (cart.length === 0) return;
    if (adressImput.value === '') {
        adressWarn.classList.remove('hidden');
        adressImput.classList.add('border-red-500', 'bg-red-100');
        return;
    }   
    
    // Enviar o pedido para api do whatsapp
    const cartItems = cart.map((item) => {
        return (
            ` ${item.name}, Quantidade: (${item.quantity}), Preço: R$ ${item.price} |`
        )
    }).join("");

    const message = encodeURIComponent(cartItems);
    const phone = '71985096539';

    window.open(`https://wa.me/${phone}?text=${message} Endereço: ${adressImput.value}`, "_blank");

    cart = [];
    updateCartModal();
})


// Função para verificar a hora e manipular o card do horário
function checkHour() {
    const data = new Date;
    const hora = data.getHours();

    return hora >= 9 && hora < 22; // true = restaurante aberto;
}

const spamItem = document.querySelector('#date-span');
const isOpen = checkHour();

if (isOpen) {
    spamItem.classList.remove('bg-red-500');
    spamItem.classList.add('bg-green-600');
} else {
    spamItem.classList.remove('bg-green-600');
    spamItem.classList.add('bg-red-500');
}