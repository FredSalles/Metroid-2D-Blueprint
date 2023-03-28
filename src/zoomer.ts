class Zoomer {

    // Anchor
    TOP = 1;
    DOWN = 2;
    LEFT = 3;
    RIGHT = 4;

    // Direction
    CLOCK = 1;
    COUNTERCLOCK = 0;

    direction = this.COUNTERCLOCK;
    anchor = this.TOP;
    x = 0;
    y = 0;
    map;

    spawn(map, direction, anchor, x, y) {
        this.map = map;
        this.direction = direction;
        this.anchor = anchor;
        this.x = x * 32;
        this.y = y * 32;
    };

    _canMoveStraightClock() {
        let x, y;
        if ((this.anchor == this.LEFT)|| (this.anchor == this.DOWN)) {
            x = Math.ceil(this.x / blockWitdh);
            y = Math.ceil(this.y / blockHeight);
        } else {
            x = Math.floor(this.x / blockWitdh);
            y = Math.floor(this.y / blockHeight);
        }
        if (this.anchor == this.TOP) {
            let empty = map.data[y][x + 1];
            let solid = map.data[y - 1][x + 1];
            if ((empty) == 0 && (solid != 0)) return true;
        }
        if (this.anchor == this.DOWN) {
            let empty = map.data[y][x - 1];
            let solid = map.data[y + 1][x - 1];
            if ((empty) == 0 && (solid != 0)) return true;
        }
        if (this.anchor == this.RIGHT) {
            let empty = map.data[y + 1][x];
            let solid = map.data[y + 1][x + 1];
            if ((empty) == 0 && (solid != 0)) return true;
        }
        if (this.anchor == this.LEFT) {
            let empty = map.data[y - 1][x];
            let solid = map.data[y - 1][x - 1];
            if ((empty) == 0 && (solid != 0)) return true;
        }
        return false;
    };

    _canTurnClock() {
        let x = Math.round(this.x / blockWitdh);
        let y = Math.round(this.y / blockHeight);

        if (this.anchor == this.TOP) {
            let solid = map.data[y][x + 1];
            let empty = map.data[y + 1][x];
            if ((empty) == 0 && (solid != 0)) return true;
        }
        if (this.anchor == this.DOWN) {
            let solid = map.data[y - 1][x - 1];
            let empty = map.data[y - 1][x];
            if ((empty) == 0 && (solid != 0)) {
                return true;
            }
        }
        if (this.anchor == this.RIGHT) {
            let solid = map.data[y + 1][x];
            let empty = map.data[y][x - 1];
            if ((empty) == 0 && (solid != 0)) return true;
        }
        if (this.anchor == this.LEFT) {
            let solid = map.data[y - 1][x + 1];
            let empty = map.data[y][x + 1];
            if ((empty) == 0 && (solid != 0)) return true;
        }
        return false;
    };

    _canTurnCounter() {
        let x = Math.floor(this.x / blockWitdh);
        let y = Math.floor(this.y / blockHeight);

        if (this.anchor == this.TOP) {
            let empty = map.data[y+1][x];
            let solid = map.data[y +1][x - 1];
            if ((empty) == 0 && (solid != 0)) return true;
        }
        if (this.anchor == this.DOWN) {
            let empty = map.data[y-1][x];
            let solid = map.data[y-1][x + 1];
            if ((empty) == 0 && (solid != 0)) return true;
        }
        if (this.anchor == this.RIGHT) {
            let empty = map.data[y][x-1];
            let solid = map.data[y - 1][x - 1];
            if ((empty) == 0 && (solid != 0)) return true;
        }
        if (this.anchor == this.LEFT) {
            let empty = map.data[y][x+1];
            let solid = map.data[y + 1][x + 1];
            if ((empty) == 0 && (solid != 0)) return true;
        }
        return false;
    };

    _canMoveStraightCounter() {
        let x, y;
        if (((this.anchor == this.TOP) || (this.anchor == this.RIGHT))) {
            x = Math.ceil(this.x / blockWitdh);
            y = Math.ceil(this.y / blockHeight);
        } else {
            x = Math.floor(this.x / blockWitdh);
            y = Math.floor(this.y / blockHeight);
        }

        if (this.anchor == this.TOP) {
            let empty = map.data[y][x - 1];
            let solid = map.data[y - 1][x - 1];
            if ((empty) == 0 && (solid != 0)) return true;
        }
        if (this.anchor == this.DOWN) {
            let empty = map.data[y][x + 1];
            let solid = map.data[y + 1][x + 1];
            if ((empty) == 0 && (solid != 0)) return true;
        }
        if (this.anchor == this.RIGHT) {
            let empty = map.data[y - 1][x];
            let solid = map.data[y - 1][x + 1];
            if ((empty) == 0 && (solid != 0)) return true;
        }
        if (this.anchor == this.LEFT) {
            let empty = map.data[y + 1][x];
            let solid = map.data[y + 1][x - 1];
            if ((empty) == 0 && (solid != 0)) return true;
        }
        return false;
    };

    _reverseDirection() {
        if (this.direction == this.CLOCK) {
            this.direction = this.COUNTERCLOCK;
        } else {
            this.direction = this.CLOCK;
        }
    };

    move(delta) {
        if (this.direction == this.CLOCK) {
            switch (this.anchor) {
                case (this.TOP):
                    if (this._canMoveStraightClock()) this.x += 1; // right
                    else if (this._canTurnClock()) this.anchor = this.RIGHT; // down
                    else this._reverseDirection();
                    //up
                    break;
                case (this.RIGHT):
                    if (this._canMoveStraightClock()) this.y += 1; // down
                    else if (this._canTurnClock())this.anchor = this.DOWN; // left
                    else this._reverseDirection();
                    //right
                    break;
                case (this.LEFT):
                    if (this._canMoveStraightClock()) this.y -= 1; // up
                    else if (this._canTurnClock())this.anchor = this.TOP; // right
                    else this._reverseDirection();
                    //left
                    break;
                case (this.DOWN):
                    if (this._canMoveStraightClock()) this.x -= 1; // left
                    else if (this._canTurnClock())this.anchor = this.LEFT; // up
                    else this._reverseDirection();
                    //down
                    break;
                default:
                    break;
            }
        } else {
            switch (this.anchor) {
                case (this.TOP):
                    if (this._canMoveStraightCounter()) this.x -= 1; // left
                    else if (this._canTurnCounter()) this.anchor = this.LEFT; // down
                    else this._reverseDirection();
                    //up
                    break;
                case (this.RIGHT):
                    if (this._canMoveStraightCounter()) this.y -= 1; // up
                    else if (this._canTurnCounter()) this.anchor = this.TOP; // left
                    else this._reverseDirection();
                    //right
                    break;
                case (this.LEFT):
                    if (this._canMoveStraightCounter()) this.y += 1; // down
                    else if (this._canTurnCounter()) this.anchor = this.DOWN; // right
                    else this._reverseDirection();
                    //left
                    break;
                case (this.DOWN):
                    if (this._canMoveStraightCounter()) this.x += 1; // right
                    else if (this._canTurnCounter()) this.anchor = this.RIGHT; // up
                    else this._reverseDirection();
                    //down
                    break;
                default:
                    break;
            }
        };
    };
}