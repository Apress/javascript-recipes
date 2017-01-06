
var countdown = {
    max: 3,
    [Symbol.iterator]() {
        
        return this;
    },
    next() {
        
		if(this.max == undefined){
			this.max = max;
		}else if(this.max > -1){
			return {value: this.max --};
		}else{
			return {done: true};
		}
    }
};

for (let i of countdown) {
  console.log(i);
}

 