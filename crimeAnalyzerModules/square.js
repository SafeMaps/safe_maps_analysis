const Point = require('./point');

class Square {
    /*
        p1      p2

        p3      p4
    */

    // Takes four points as parameters
    constructor(p1,p2,p3,p4) {
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
        this.p4 = p4;
    }
}

module.exports = Square;

