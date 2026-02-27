const manuals = [
    { id: 1, name: "Sistema de Alerta Sirene", image: "assets/images/01_sirene.png", pdfs: ["assets/pdfs/01.1_manual_sirene_lego.pdf","01.2_circuito_eletronico_sirenes.pdf"] },
    { id: 2, name: "Postes Rota de Fuga", image: "assets/images/02_poste_sinalizacao.png", pdfs: ["assets/pdfs/02_poste_sinalizacao.pdf"] },
    { id: 3, name: "Estrutura Lateral das Barragens", image: "assets/images/03_lateral_barragem.png", pdfs: ["assets/pdfs/03_lateral_barragem.pdf"] },
    { id: 4, name: "Barragem por Centro de Linha", image: "assets/images/04_barragem_centro_linha.png", pdfs: ["assets/pdfs/04_barragem_centro_linha.pdf"] },
    { id: 5, name: "Barragem a Jusante", image: "assets/images/05_barragem_jusante.png", pdfs: ["assets/pdfs/05_barragem_jusante.pdf"] },
    { id: 6, name: "Barragem a Montante", image: "assets/images/06_barragem_montante.png", pdfs: ["assets/pdfs/06.1_barragem_montante.pdf","06.2_circuito_eletronico_barragem.pdf"]},
    { id: 7, name: "Casa Menor da Cidade", image: "assets/images/07_duplex 70x70x140.png", pdfs: ["assets/pdfs/07_manual duplex 70x70x140.pdf"] },
    { id: 8, name: "Casa Maior da Cidade", image: "assets/images/08_casa3D 70x70x70.png", pdfs: ["assets/pdfs/08_manual_casa3D_70x70x70.pdf"] },
    { id: 9, name: "Radar Doppler", image: "assets/images/09_casa3D_radar_doppler.png", pdfs: ["assets/pdfs/09.1_manual_radar_lego.pdf","09.2_manual_casa_radar_doppler.pdf"]},
    { id: 10, name: "Centro de Monitoramente Geotécnico", image: "assets/images/10.1_escritorio_CMG.png", pdfs: ["assets/pdfs/10.1_escritorio_CMG.pdf","10.2_circuito_eletronico_CMG.pdf"]},
    { id: 11, name: "Poste do Vídeo Monitoramento", image: "assets/images/11_poste_videomonitoramento.png", pdfs: ["assets/pdfs/11_poste_videomonitoramento.pdf"] },
    { id: 12, name: "Montagem 12", image: "assets/images/montagem12.jpg", pdfs: ["assets/pdfs/manual12.pdf"] }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('manuals-grid');
    grid.innerHTML = ''; // Limpa o loading

    manuals.forEach(manual => {
        const card = document.createElement('a');
        card.href = `viewer.html?id=${manual.id}`;
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
