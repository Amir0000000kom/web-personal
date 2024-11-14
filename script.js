// script.js
document.addEventListener('DOMContentLoaded', function () {
    const houseList = document.getElementById('house-list');

    const houses = [
        { id: 1, name: 'Motor Jepang Ke Inggrisan', price: 'IDR 150,000,000', img: 's.jpg', specifications: 'Mesin 400cc, 4-stroke, Kinerja tinggi' },
        { id: 2, name: 'BSA 400', price: 'IDR 200,000,000', img: 'bsa.jpg', specifications: 'Mesin 500cc, Retro Style, High Torque' },
        { id: 3, name: 'Yamaha', price: 'IDR 250,000,000', img: 'yamaha.jpg', specifications: 'Mesin 600cc, 4-stroke, Teknologi terbaru' },
        { id: 4, name: 'Chopper V4', price: 'IDR 300,000,000', img: 'choper.jpg', specifications: 'Mesin V4, Kustom klasik, Rangka kustom' },
        { id: 5, name: 'Motor Inggris Ke Jepangan', price: 'IDR 300,000,000', img: 'briis.jpg', specifications: 'Mesin 650cc, Desain klasik, Performa tinggi' },
        { id: 6, name: 'Harley da Byson', price: 'IDR 2,000,000,000', img: 'hr.jpg', specifications: 'Mesin 750cc, Power tinggi, Ekstra stabil' },
        { id: 7, name: 'British Maksa', price: 'IDR 500,000,000', img: 'britis.jpg', specifications: 'Mesin besar, Desain vintage, Kendali kuat' },
        { id: 8, name: 'Copy Dangdut', price: 'IDR 100,000,000', img: 'copy.jpg', specifications: 'Mesin 350cc, Mudah dirawat, Harga terjangkau' }
    ];


    if (houseList) {
        houses.forEach(house => {
            const houseItem = document.createElement('div');
            houseItem.classList.add('house-item');

            const houseImg = document.createElement('img');
            houseImg.src = house.img;
            houseImg.alt = house.name;

            const houseName = document.createElement('h3');
            houseName.textContent = house.name;

            const housePrice = document.createElement('p');
            housePrice.textContent = house.price;

            const buyButton = document.createElement('button');
            buyButton.textContent = 'Beli';
            buyButton.classList.add('buy-button');
            buyButton.addEventListener('click', () => handlePurchase(house));

            houseItem.appendChild(houseImg);
            houseItem.appendChild(houseName);
            houseItem.appendChild(housePrice);
            houseItem.appendChild(buyButton);

            houseList.appendChild(houseItem);
        });
    }

    // Menambahkan kelas 'active' ke elemen navigasi yang sesuai
    const currentLocation = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
        link.addEventListener('click', function () {
            // Menghapus kelas 'clicked' dari semua link
            navLinks.forEach(navLink => navLink.classList.remove('clicked'));

            // Menambahkan kelas 'clicked' ke link yang di klik
            link.classList.add('clicked');
        });
    });
    // Background image slideshow
    const backgroundImages = [
        'url(d.jpg)',
        // 'url(ds.jpg)',
        // 'url(sa.jpg)',
        // 'url(u.jpg)',
        // 'url(bag.jpg)',

    ];

    let currentIndex = 0;

    function changeBackground() {
        document.body.style.backgroundImage = backgroundImages[currentIndex];
        currentIndex = (currentIndex + 1) % backgroundImages.length;
    }

    setInterval(changeBackground, 20000); // Change background every 5 seconds
    changeBackground(); // Initial background setup

    function handlePurchase(house) {
        // Membuat elemen popup atau modal untuk detail spesifikasi
        const modal = document.createElement('div');
        modal.classList.add('modal');

        modal.innerHTML = `
    <div class="modal-content">
        <span class="close-button">&times;</span>
        <h3>${house.name}</h3>
        <img src="${house.img}" alt="${house.name}">
        <p><strong>Harga:</strong> ${house.price}</p>
        <p><strong>Spesifikasi:</strong> ${house.specifications}</p>
        <button class="confirm-button">Konfirmasi Pembelian</button>
    </div>
    `;

        // Tambahkan modal ke body dengan efek fade-in
        modal.style.opacity = "0"; // Mulai dari transparan
        document.body.appendChild(modal);
        setTimeout(() => {
            modal.style.opacity = "1"; // Tambahkan efek fade-in
            modal.style.transition = "opacity 0.3s ease";
        }, 10);

        // Close button event
        modal.querySelector('.close-button').addEventListener('click', () => {
            modal.style.opacity = "0";
            setTimeout(() => document.body.removeChild(modal), 300); // Fade-out sebelum menghapus modal
        });

        // Konfirmasi pembelian
        modal.querySelector('.confirm-button').addEventListener('click', () => {
            alert(`Anda telah membeli: ${house.name} seharga ${house.price}`);
            modal.style.opacity = "0";
            setTimeout(() => document.body.removeChild(modal), 300); // Fade-out sebelum menghapus modal
        });
    }


});