import "./style.css";

class Animal {
  makesound() {
    return "Animal is making sound";
  }
}

class Dog extends Animal {
  makesound() {
    return "Dog barks";
  }
}

function AnimalSound() {
  const d = new Dog();

  const baseClassSound = Animal.prototype.makesound.call(d); // Calls base class function
  const derivedClassSound = d.makesound();                   // Calls derived class function

  return (
    <main>
      <h1>Animal Sound Demo</h1>
      <p><strong>Base class (Animal) sound:</strong> {baseClassSound}</p>
      <p><strong>Derived class (Dog) sound:</strong> {derivedClassSound}</p>
    </main>
  );
}

export default AnimalSound;
