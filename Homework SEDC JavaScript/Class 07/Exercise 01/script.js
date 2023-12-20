function Animal(name, kind) {
    this.name = name;
    this.kind = kind;
    
    this.speak = function(message) {
      console.log(`${this.kind} ${this.name} says: '${message}'`);
    };
  }
  
let dog = new Animal("Buddy", "Dog");
  dog.speak("Hey bro!!!"); 
  
let cat = new Animal("Whiskers", "Cat");
  cat.speak("Meow!"); 
  