function trapMessage() {
    return "It's a Trap!!!"
}

var handler = {
    apply: function(target, thisArg) {
        return target.apply(thisArg);
    }
};

var proxy = new Proxy(trapMessage, handler);
console.log(proxy());  //returns It's a Trap!!