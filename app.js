const manuals = [
    { id: 1, name: "Montagem 01", image: "assets/images/01_sirene.png", pdf: "assets/pdfs/manual01.pdf" },
    { id: 2, name: "Montagem 02", image: "assets/images/montagem02.jpg", pdf: "assets/pdfs/manual02.pdf" },
    { id: 3, name: "Montagem 03", image: "assets/images/montagem03.jpg", pdf: "assets/pdfs/manual03.pdf" },
    { id: 4, name: "Montagem 04", image: "assets/images/montagem04.jpg", pdf: "assets/pdfs/manual04.pdf" },
    { id: 5, name: "Montagem 05", image: "assets/images/montagem05.jpg", pdf: "assets/pdfs/manual05.pdf" },
    { id: 6, name: "Montagem 06", image: "assets/images/montagem06.jpg", pdf: "assets/pdfs/manual06.pdf" },
    { id: 7, name: "Montagem 07", image: "assets/images/montagem07.jpg", pdf: "assets/pdfs/manual07.pdf" },
    { id: 8, name: "Montagem 08", image: "assets/images/montagem08.jpg", pdf: "assets/pdfs/manual08.pdf" },
    { id: 9, name: "Montagem 09", image: "assets/images/montagem09.jpg", pdf: "assets/pdfs/manual09.pdf" },
    { id: 10, name: "Montagem 10", image: "assets/images/montagem10.jpg", pdf: "assets/pdfs/manual10.pdf" },
    { id: 11, name: "Montagem 11", image: "assets/images/montagem11.jpg", pdf: "assets/pdfs/manual11.pdf" },
    { id: 12, name: "Montagem 12", image: "assets/images/montagem12.jpg", pdf: "assets/pdfs/manual12.pdf" }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('manuals-grid');
    grid.innerHTML = ''; // Limpa o loading

    manuals.forEach(manual => {
        const card = document.createElement('a');
        card.href = `viewer.html?pdf=${encodeURIComponent(manual.pdf)}`;
        card.className = 'manual-card';
        
        card.innerHTML = `
            <div class="image-container">
                <img src="${manual.image}" alt="${manual.name}" onerror="this.src='https://via.placeholder.com/400x225/2d3748/f39c12?text=${encodeURIComponent(manual.name)}'">
            </div>
            <div class="card-content">
                <h3>${manual.name}</h3>
            </div>
        `;
        
        grid.appendChild(card);
    });
});
