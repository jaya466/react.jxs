import './style.css';

// Abstract base class simulating pure virtual functions
class Shape {
  constructor(name) {
    if (new.target === Shape) {
      throw new Error('Cannot instantiate abstract class Shape directly.');
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

  // Concrete method that uses the pure virtual functions
  describe() {
    return `${this.name}: area = ${this.area().toFixed(2)}, perimeter = ${this.perimeter().toFixed(2)}`;
  }
}

// Concrete subclass — implements all pure virtual functions
class Circle extends Shape {
  constructor(radius) {
    super('Circle');
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }

  perimeter() {
    return 2 * Math.PI * this.radius;
  }
}

// Concrete subclass — implements all pure virtual functions
class Rectangle extends Shape {
  constructor(width, height) {
    super('Rectangle');
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

function AbstractDemo() {
  const shapes = [new Circle(5), new Rectangle(4, 6)];

  let abstractError = '';
  try {
    new Shape('test');
  } catch (e) {
    abstractError = e.message;
  }

  return (
    <main style={{ padding: '30px' }}>
      <h1>Abstract Class with Pure Virtual Functions</h1>
      <p>
        An <strong>abstract class</strong> cannot be instantiated directly. It
        declares <strong>pure virtual functions</strong> that must be implemented
        by every concrete subclass.
      </p>

      <h2>Attempting to instantiate the abstract class <code>Shape</code>:</h2>
      <pre style={{ background: '#fee', padding: '10px', borderRadius: '6px' }}>
        {abstractError}
      </pre>

      <h2>Concrete subclasses of <code>Shape</code></h2>
      <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Shape</th>
            <th>Area</th>
            <th>Perimeter</th>
            <th>describe()</th>
          </tr>
        </thead>
        <tbody>
          {shapes.map((shape) => (
            <tr key={shape.name}>
              <td>{shape.name}</td>
              <td>{shape.area().toFixed(2)}</td>
              <td>{shape.perimeter().toFixed(2)}</td>
              <td>{shape.describe()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default AbstractDemo;
