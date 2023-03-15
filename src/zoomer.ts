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
        this.x = x*32;
        this.y = y*32;
    };

    //
    // TOP CLOCK       RIGH CLOCK     LEFT CLOCK
    //                       o|         |  
    //  ==    =|   ==         |         |o
    //  o     o    o|
    //                       o|         ==
    // DOWN CLOCK           ==         |o
    //                              
    //   o    |o    o        o|=        =
    //  ==    ==   |=                   |o
    //


    _canMoveStraightClock() {
        let x = Math.floor(this.x / blockWitdh);
        let y = Math.floor(this.y / blockHeight);

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

    _canMoveStraightCounter() {
        let x = Math.floor(this.x / blockWitdh);
        let y = Math.floor(this.y / blockHeight);

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
                    //right
                    if (this._canMoveStraightClock()) {
                        this.x += 1;
                    } else {
                        this._reverseDirection();
                    }
                    //up
                    //down
                    break;
                case (this.RIGHT):
                    //down
                    if (this._canMoveStraightClock()) {
                        this.y += 1;
                    } else {
                        this._reverseDirection();
                    }
                    //left
                    //right
                    break;
                case (this.LEFT):
                    //up
                    if (this._canMoveStraightClock()) {
                        this.y -= 1;
                    } else {
                        this._reverseDirection();
                    }
                    //right
                    //left
                    break;
                case (this.DOWN):
                    //left
                    if (this._canMoveStraightClock()) {
                        this.x -= 1;
                    } else {
                        this._reverseDirection();
                    }
                    //up
                    //down
                    break;
                default:
                    break;
            }
        } else {
            switch (this.anchor) {
                case (this.TOP):
                    //right
                    if (this._canMoveStraightCounter()) {
                        this.x -= 1;
                    } else {
                        this._reverseDirection();
                    }
                    //up
                    //down
                    break;
                case (this.RIGHT):
                    //down
                    if (this._canMoveStraightCounter()) {
                        this.y -= 1;
                    } else {
                        this._reverseDirection();
                    }
                    //left
                    //right
                    break;
                case (this.LEFT):
                    //up
                    if (this._canMoveStraightCounter()) {
                        this.y += 1;
                    } else {
                        this._reverseDirection();
                    }
                    //right
                    //left
                    break;
                case (this.DOWN):
                    //left
                    if (this._canMoveStraightCounter()) {
                        this.x += 1;
                    } else {
                        this._reverseDirection();
                    }
                    //up
                    //down
                    break;
                default:
                    break;
            }
        };
    };
    
}