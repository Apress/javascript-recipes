var marxBros = ['Groucho', 'Harpo', 'Chico'];
marxBros.splice(2, 0, 'Zeppo');
console.log(marxBros); //returns ['Groucho', 'Harpo', 'Chico', 'Zeppo']

marxBros.splice(1, 3);
console.log(marxBros); //returns ['Groucho']