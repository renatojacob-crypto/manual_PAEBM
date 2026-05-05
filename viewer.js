pdfjsLib.GlobalWorkerOptions.workerSrc =
'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get('id'));

const manuals = [
	{
		id: 1, 
		pdfs: [
			{ path: "assets/pdfs/01.1_manual_sirene_lego.pdf", title: "Manual de Montagem da Sirene" },
			{ path: "assets/pdfs/01.2_circuito_eletronico_sirenes.pdf", title: "Circuito Eletrônico e Programação da Sirene" }
		]
	},
	{
		id: 2,
		pdfs: [
			{ path: "assets/pdfs/02_poste_sinalizacao.pdf", title: "Manual de Montagem das Sinalizações da Rota de Fuga"  }
		]
	},
	{
		id: 3,
		pdfs: [
			{ path: "assets/pdfs/03_lateral_barragem.pdf", title: "Manual de Montagem da Estrutura Lateral das Barragens" }
		]
	},
	{
		id: 4,
		pdfs: [
			{ path: "assets/pdfs/04_barragem_centro_linha.pdf", title: "Manual de Montagem da Barregem por Centro de Linha" }
		]
	},
	{
		id: 5,
		pdfs: [
			{ path: "assets/pdfs/05_barragem_jusante.pdf", title: "Manual de Montagem da Barragem a Jusante" }
		]
	},
	{
		id: 6,
		pdfs: [
			{ path: "assets/pdfs/06.1_barragem_montante.pdf", title: "Manual de Montagem da Barragem a Montante" },
			{ path: "assets/pdfs/06.2_circuito_eletronico_barragem.pdf", title: "Circuito Eletrônico e Programação da Barragem" }
		]
	},
	{
		id: 7,
		pdfs: [
			{ path: "assets/pdfs/07_manual duplex 70x70x140.pdf", title: "Manual de Montagem da Casa Maior" }
		]
	},
	{
		id: 8,
		pdfs: [
			{ path: "assets/pdfs/08_manual_casa3D_70x70x70.pdf", title: "Manual de Montagem da Casa Menor" }
		]
	},
	{
		id: 9,
		pdfs: [
			{ path: "assets/pdfs/09.1_manual_radar_lego.pdf", title: "Manual de Montagem do Radar Doppler" },
			{ path: "assets/pdfs/09.2_manual_casa_radar_doppler.pdf", title: "Manual de Montagem da Casa do Radar Doppler" }
		]
	},
	{
		id: 10,
		pdfs: [
			{ path: "assets/pdfs/10.1_escritorio_CMG.pdf", title: "Manual de Montagem do Escritório do CMG" },
			{ path: "assets/pdfs/10.2_circuito_eletronico_CMG.pdf", title: "Circuito Eletrônico e Programação do CMG" }
		]
	},
	{
		id: 11,
		pdfs: [
			{ path: "assets/pdfs/11_poste_videomonitoramento.pdf", title: "Manual de Montagem do Poste de Videomonitoramento" }
		]
	},
	{
		id: 12,
		pdfs: [
			{ path: "adicionar aqui.", title: "adicionar aqui" }
		]
	},
    ]
    // 👉 Adicione aqui todos os outros IDs,
    // mesmo que tenham apenas 1 PDF

const container = document.getElementById("pdf-container");
const topBtn = document.getElementById("topBtn");

const manual = manuals.find(m => m.id === id);

if (!manual) {
    container.innerHTML = `
        <div style="text-align:center; margin-top:100px;">
            <h2>Manual não encontrado</h2>
            <p>Verifique o ID passado na URL.</p>
        </div>
    `;
} else {
    manual.pdfs.forEach(pdf => {
        createPdfViewer(pdf.path, pdf.title);
    });
}

function createPdfViewer(pdfPath, titleText) {

    const block = document.createElement("div");
    block.className = "pdf-block";

    const title = document.createElement("div");
    title.className = "pdf-title";
    title.innerText = titleText;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const controls = document.createElement("div");
    controls.className = "controls";

    const prevBtn = createButton("⬅", "nav-btn");
    const nextBtn = createButton("➡", "nav-btn");
    const zoomIn = createButton("+", "zoom-btn");
    const zoomOut = createButton("−", "zoom-btn");

    const pageInfo = document.createElement("span");

    controls.append(prevBtn, zoomOut, zoomIn, pageInfo, nextBtn);
    block.append(title, canvas, controls);
    container.appendChild(block);

    let pdfDoc = null;
    let currentPage = 1;
    let scale = 1;

    pdfjsLib.getDocument(pdfPath).promise.then(pdf => {
        pdfDoc = pdf;
        renderPage(currentPage);
    }).catch(error => {
        block.innerHTML = `<p style="color:red;">Erro ao carregar PDF.</p>`;
        console.error(error);
    });

    function renderPage(num) {
        pdfDoc.getPage(num).then(page => {
            const viewport = page.getViewport({ scale });
            canvas.width = viewport.width;
            canvas.height = viewport.height;

            page.render({
                canvasContext: ctx,
                viewport: viewport
            });

            pageInfo.textContent = `Página ${num} de ${pdfDoc.numPages}`;
        });
    }

    prevBtn.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            renderPage(currentPage);
        }
    };

    nextBtn.onclick = () => {
        if (currentPage < pdfDoc.numPages) {
            currentPage++;
            renderPage(currentPage);
        }
    };

    zoomIn.onclick = () => {
        scale += 0.2;
        renderPage(currentPage);
    };

    zoomOut.onclick = () => {
        if (scale > 0.4) {
            scale -= 0.2;
            renderPage(currentPage);
        }
    };

    document.addEventListener("keydown", e => {
        if (e.key === "ArrowLeft") prevBtn.click();
        if (e.key === "ArrowRight") nextBtn.click();
    });

    let startX = 0;

    canvas.addEventListener("touchstart", e => {
        startX = e.touches[0].clientX;
    });

    canvas.addEventListener("touchend", e => {
        let endX = e.changedTouches[0].clientX;
        if (endX < startX - 50) nextBtn.click();
        if (endX > startX + 50) prevBtn.click();
    });
}

function createButton(text, className) {
    const btn = document.createElement("button");
    btn.innerText = text;
    btn.className = className;
    return btn;
}

window.onscroll = function() {
    if (document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
};