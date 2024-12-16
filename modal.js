function createModal(buttonId, title, content) {
    // Модальное окно
    const modalTemplate = `
        <div class="modal" style="display: none;">
            <div class="modal-content">
                <div class="modal-header">
                    <span class="modal-title">${title}</span>
                    <span class="close-button">&times;</span>
                </div>
                <div class="modal-body">
                    ${content}
                </div>
            </div>
        </div>
    `;
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalTemplate;
    document.body.appendChild(modalContainer);

    // Кнопка закрытия
    const modal = modalContainer.firstElementChild;
    const closeButton = modal.querySelector('.close-button');
    closeButton.onclick = function() {modal.style.display = 'none';};

    // Кнопка открытия
    const button = document.getElementById(buttonId);
    if(button){button.onclick = function(){modal.style.display = 'block';};}
}

const style = document.createElement('style');
style.innerHTML = `
    .modal {
        display: none;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0,0,0);
        background-color: rgba(0,0,0,0.4);
    }
    .modal-content {
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
    }
    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .close-button {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }
    .modal-title {
        font-size: 24px;
        font-weight: bold;
    }
    .close-button:hover,
    .close-button:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
    .modal-body {
        margin-top: 20px;
    }
`;
document.head.appendChild(style);