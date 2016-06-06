// that

// We have already seen:

var Point = function (x, y) {
    this.x = x;
    this.y = y;
    this.show = function() {
        console.log(this.x, this.y);
    }
};

var p1 = new Point(10, 5);
p1.show();
var p2 = new Point(3, 2);
p2.show();

// but:

var callTwice = function(f) {
    f();
    f();
};

callTwice(p1.show);
// generates "undefined undefined".

// A useful pattern to avoid this pitfall:

var Point = function (x, y) {
    var that = this;
    this.x = x;
    this.y = y;
    this.show = function() {
        console.log(that.x, that.y);
    }
};

var p1 = new Point(10, 5);
callTwice(p1.show);

// sometimes we use self instead of that.