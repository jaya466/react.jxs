import "./style.css";

// Abstract base class simulating pure virtual functions
class Shape {
  constructor(name) {
    if (new.target === Shape) {
      throw new Error("Cannot instantiate abstract class Shape directly.");
    }
    this.name = name;
  }

  // Pure virtual function — must be overridden by subclasses
  area() {
    throw new Error(`${this.constructor.name} must implement area()`);
  }

  // Pure virtual function — must be overridden by subclasses
  perimeter() {
    throw new Error(`${this.constructor.name} must implement perimeter()`);
  }

  describe() {
    return `Shape: ${this.name}, Area: ${this.area().toFixed(2)}, Perimeter: ${this.perimeter().toFixed(2)}`;
  }
}

// Concrete subclass Circle
class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }

  perimeter() {
    return 2 * Math.PI * this.radius;
  }
}

// Concrete subclass Rectangle
class Rectangle extends Shape {
  constructor(width, height) {
    super("Rectangle");
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }
}

// Concrete subclass Triangle
class Triangle extends Shape {
  constructor(a, b, c) {
    super("Triangle");
    this.a = a;
    this.b = b;
    this.c = c;
  }

  area() {
    const s = (this.a + this.b + this.c) / 2;
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }

  perimeter() {
    return this.a + this.b + this.c;
  }
}

const shapes = [
  new Circle(5),
  new Rectangle(4, 6),
  new Triangle(3, 4, 5),
];

function AbstractClassDemo() {
  return (
    <main>
      <h1>Abstract Class Demo</h1>
      <p>
        Demonstrates an abstract class <strong>Shape</strong> with pure virtual
        functions <code>area()</code> and <code>perimeter()</code> implemented
        by concrete subclasses.
      </p>
      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Shape</th>
            <th>Area</th>
            <th>Perimeter</th>
          </tr>
        </thead>
        <tbody>
          {shapes.map((shape, index) => (
            <tr key={index}>
              <td>{shape.name}</td>
              <td>{shape.area().toFixed(2)}</td>
              <td>{shape.perimeter().toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default AbstractClassDemo;
