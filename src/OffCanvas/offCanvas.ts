let map = {
    "name": "Brinstar",
    "width": 32,
    "height": 20,
    "orientation": "horizontal",
    "data": [
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    ]
};

let canvasWitdh = 512;
let canvasHeight = 480;
let canvasBlockWitdh = 16;
let canvasBlockHeight = 15;
let blockWitdh = 32;
let blockHeight = 32;
let cameraX = 0;
let cameraY = 0;
let step = 16;
let ctx, img0, img1, img2, images, offcanvas, offctx;

function allMapOffCanvasRender() {

    let firstBlockX = Math.floor(cameraX / blockWitdh);
    let firstBlockY = Math.floor(cameraY / blockHeight);
    let drawPosOffsetX = cameraX % blockWitdh;
    let drawPosOffsetY = cameraY % blockHeight;

    for (let i = firstBlockY; i < firstBlockY + canvasBlockHeight + 1; i++) {
        for (let j = firstBlockX; j < firstBlockX + canvasBlockWitdh + 1; j++) {
            if ((j < map.width) && (i < map.height)) {
                let x = ((j - firstBlockX) * blockWitdh) - drawPosOffsetX;
                let y = ((i - firstBlockY) * blockHeight) - drawPosOffsetY;
                offctx.drawImage(images[map.data[i][j]], x, y);
            }
        }
    }
    ctx.drawImage(offcanvas ,0 ,0);
}

//
// On Key Down
//
window.onkeydown = function (event) {
    //console.log('window.onkeydown[' + event.key + ']...');
    if (event.key === "ArrowRight") {
        if (cameraX < ((map.width) * blockWitdh) - (canvasBlockWitdh * blockWitdh)) {
            cameraX += step;
            allMapOffCanvasRender();
        }
    }
    if (event.key === "ArrowLeft") {
        if (cameraX >= step) {
            cameraX -= step;
            allMapOffCanvasRender();
        }
    }
    if (event.key === "ArrowUp") {
        if (cameraY >= step) {
            cameraY -= step;
            allMapOffCanvasRender();
        }
    }
    if (event.key === "ArrowDown") {
        if (cameraY < ((map.height) * blockHeight) - (canvasBlockHeight * blockHeight)) {
        cameraY += step;
        allMapOffCanvasRender();
        }
    }
}

//
// On Window Load
//
window.onload = () => {
    console.log('Window.onLoad...');
    ctx = document.getElementById("canvas").getContext("2d");
    img0 = document.getElementById("block_0");
    img1 = document.getElementById("block_1");
    img2 = document.getElementById("block_2");
    images = [img0, img1, img2];
    offcanvas = document.createElement('canvas');
    offcanvas.width = canvasWitdh;
    offcanvas.height = canvasHeight;
    offctx = offcanvas.getContext("2d");
    allMapOffCanvasRender();
}