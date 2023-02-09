import Sprite from "./Sprite.js";

class Ball extends Sprite {
    bounce(canvasWidth, canvasHeight) {
        if(this.x < 0 || this.x+this.width > canvasWidth) {
            this.dx *= -1;
        } else if(this.y < 0 || this.y+this.height > canvasHeight) {
            this.dy *= -1;
        }
    }

    collides(paddle) {
        if(this.intersects(paddle)) {
            this.dy *= -1;
        }
    }
}

export default Ball;