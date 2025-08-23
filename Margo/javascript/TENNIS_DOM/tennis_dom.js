const GROUND_WIDTH = 500;
const GROUND_HEIGHT = 300;

const PLAYER_WIDTH = 10;
const PLAYER_HEIGHT = 100;
const PLAYER_SPEED = 5;

const LEFT_PLAYER_START_X = 0;
const LEFT_PLAYER_START_Y = (GROUND_HEIGHT - PLAYER_HEIGHT) / 2;
const RIGHT_PLAYER_START_X = GROUND_WIDTH - PLAYER_WIDTH;
const RIGHT_PLAYER_START_Y = (GROUND_HEIGHT - PLAYER_HEIGHT) / 2;

const BALL_WIDTH = 20;
const BALL_HEIGHT = 20;
const BALL_SPEED_X = 10;
const BALL_SPEED_Y = 10;
const BALL_START_X = (GROUND_WIDTH - BALL_WIDTH) / 2;
const BALL_START_Y = (GROUND_HEIGHT - BALL_HEIGHT) / 2;

const left_score_el = document.getElementById('left_score');
const right_score_el = document.getElementById('right_score');
const tennis_ground_el = document.getElementById('tennis_ground');
const left_player_el = document.getElementById('left_player');
const right_player_el = document.getElementById('right_player');
const ball_el = document.getElementById('ball');

tennis_ground_el.style.width = GROUND_WIDTH + "px";
tennis_ground_el.style.height = GROUND_HEIGHT + "px";

left_player_el.style.width = PLAYER_WIDTH + "px";
right_player_el.style.width = PLAYER_WIDTH + "px";
left_player_el.style.height = PLAYER_HEIGHT + "px";
right_player_el.style.height = PLAYER_HEIGHT + "px"

left_player_el.style.top = LEFT_PLAYER_START_Y + "px";
right_player_el.style.top = RIGHT_PLAYER_START_Y + "px";

left_player_el.style.left = LEFT_PLAYER_START_X + "px";
right_player_el.style.left = RIGHT_PLAYER_START_X + "px";

ball_el.style.width = BALL_WIDTH + "px";
ball_el.style.height = BALL_HEIGHT + "px";

ball_el.style.top = BALL_START_Y + "px";
ball_el.style.left = BALL_START_X + "px";

document.addEventListener('keydown', keyPressed);
document.addEventListener('keyup', keyUnpressed);

let left_player = {
    posX: 0,
    posY: (GROUND_HEIGHT - PLAYER_HEIGHT) / 2,
    speedY: 0,
    // speedY: PLAYER_SPEED,
    width: PLAYER_WIDTH,
    height: PLAYER_HEIGHT,

    update: function() {
        // left_player_el.style.left = left_player.posX + "px";
        left_player_el.style.top = left_player.posY + "px";
    }
}

let right_player = {
    posX: GROUND_WIDTH - PLAYER_WIDTH,
    posY: (GROUND_HEIGHT - PLAYER_HEIGHT) / 2,
    speedY: 0,
    width: PLAYER_WIDTH,
    height: PLAYER_HEIGHT,

    update: function() {
        right_player_el.style.top = right_player.posY + "px";
    }
}

let ball = {
    posX: (GROUND_WIDTH - BALL_WIDTH) / 2,
    posY: (GROUND_HEIGHT - BALL_HEIGHT) / 2,
    speedX: BALL_SPEED_X,
    speedY: BALL_SPEED_Y,
    width: BALL_WIDTH,
    height: BALL_HEIGHT,

    update : function() {
        ball_el.style.left = this.posX + "px";
        ball_el.style.top = this.posY + "px";
    }
}

let loopStarted = false;
let playing = false

function start() {
    launchBallRandom();
    if (!loopStarted) {
        setInterval(tick, 40);
        loopStarted = true;
        playing = true;
    }
    else {
        ball.posX = BALL_START_X;
        ball.posY = BALL_START_Y;
        left_player.posX = LEFT_PLAYER_START_X;
        left_player.posY = LEFT_PLAYER_START_Y;
        right_player.posX = RIGHT_PLAYER_START_X;
        right_player.posY = RIGHT_PLAYER_START_Y;
        ball.update();
        left_player.update();
        right_player.update();
        playing = true;

    }
}

function launchBallRandom() {
    const side = Math.random() < 0.5 ? -1 : 1;

    const deg = (15 + Math.random() * 60) * (Math.random() < 0.5 ? 1 : -1);
    const rad = deg * Math.PI / 180;

    ball.speedX = side * BALL_SPEED_X * Math.cos(rad);
    ball.speedY =        BALL_SPEED_Y * Math.sin(rad);

    if (Math.abs(ball.speedY) < 1) ball.speedY = Math.sign(ball.speedY || 1) * 1;


}

function tick() {
    if (!playing) return;
    if (left_player.speedY !== 0) {
        left_player.posY += left_player.speedY;
        if (left_player.posY < 0) {
            left_player.posY = 0;
            left_player.speedY = 0;
        }
        if (left_player.posY > GROUND_HEIGHT - PLAYER_HEIGHT) {
            left_player.posY = GROUND_HEIGHT - PLAYER_HEIGHT;
            left_player.speedY = 0;
        }

        left_player.update();
    }

    if (right_player.speedY !== 0) {
        right_player.posY += right_player.speedY;
        if (right_player.posY < 0) {
            right_player.posY = 0;
            right_player.speedY = 0;
        }
        if (right_player.posY > GROUND_HEIGHT - PLAYER_HEIGHT) {
            right_player.posY = GROUND_HEIGHT - PLAYER_HEIGHT;
            right_player.speedY = 0;
        }

        right_player.update();
    }

    ball.posX += ball.speedX;
    if (ball.posX + ball.width >= GROUND_WIDTH - right_player.width) { // правая стенка
        if (ball.posY + ball.height / 2 < right_player.posY || ball.posY + ball.height / 2 > right_player.posY + right_player.height) { // не попал в рокетку
            left_score_el.textContent = (parseInt(left_score_el.textContent) + 1).toString();
            ball.posX = GROUND_WIDTH - ball.width;
            ball.speedX = 0;
            ball.speedY = 0;
            playing = false;
        }
        else {
            ball.speedX = - ball.speedX;
            ball.posX = GROUND_WIDTH - ball.width - right_player.width;
        }

    }
    if (ball.posX < left_player.width) { // левая стенка
        if (ball.posY + ball.height / 2 < left_player.posY || ball.posY + ball.height / 2 > left_player.posY + left_player.height) {
            right_score_el.textContent = (parseInt(right_score_el.textContent) + 1).toString();
            ball.posX = 0;
            ball.speedX = 0;
            ball.speedY = 0;
            playing = false;
        }
        else {
            ball.speedX = - ball.speedX;
            ball.posX = left_player.width;
        }

    }

    ball.posY += ball.speedY;
    if (ball.posY < 0) {
        ball.speedY = - ball.speedY;
        ball.posY = 0;
    }
    if (ball.posY + ball.height >= GROUND_HEIGHT) {
        ball.speedY = - ball.speedY;
        ball.posY = GROUND_HEIGHT - ball.height;
    }

    ball.update();
}

ball.update();

function keyPressed(eo) {
    if (eo.key === "Shift") {
        left_player.speedY = - PLAYER_SPEED;
    }
    else if (eo.key === "Control") {
        left_player.speedY = PLAYER_SPEED;
    }
    else if (eo.key === "ArrowUp") {
        right_player.speedY = - PLAYER_SPEED;
    }
    else if (eo.key === "ArrowDown") {
        right_player.speedY = PLAYER_SPEED;
    }
}

function keyUnpressed(eo) {
    if (eo.key === "Shift" || eo.key === "Control") {
        left_player.speedY = 0;
    }
    else if (eo.key === "ArrowUp" || eo.key === "ArrowDown") {
        right_player.speedY = 0;
    }
}

