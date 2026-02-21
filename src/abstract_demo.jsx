import './style.css';

const codeExample = `#include <iostream>
using namespace std;

class Shape {
public:
    // Pure virtual functions make Shape an abstract class
    virtual double area() const = 0;
    virtual void draw() const = 0;
    virtual ~Shape() = default;
};

class Rectangle : public Shape {
    double width, height;
public:
    Rectangle(double w, double h) : width(w), height(h) {}
    double area() const override { return width * height; }
    void draw() const override {
        cout << "Rectangle (" << width << " x " << height << ")" << endl;
    }
};

class Circle : public Shape {
    double radius;
public:
    explicit Circle(double r) : radius(r) {}
    double area() const override { return 3.14159 * radius * radius; }
    void draw() const override {
        cout << "Circle (r = " << radius << ")" << endl;
    }
};

void showShape(const Shape& shape) {
    shape.draw();
    cout << "Area: " << shape.area() << "\n" << endl;
}

int main() {
    Rectangle rect(4, 3);
    Circle circ(2.5);

    showShape(rect);
    showShape(circ);

    return 0;
}`;

const outputExample = `Rectangle (4 x 3)
Area: 12

Circle (r = 2.5)
Area: 19.6349`;

function AbstractDemo() {
  return (
    <main className="abstract-page">
      <h1>Abstract Class Using Pure Virtual Functions</h1>
      <p className="abstract-lead">
        Problem statement: Write a program to demonstrate an abstract class using pure virtual
        functions. The example below shows a Shape base class with pure virtual methods that
        must be implemented by every derived shape.
      </p>

      <section className="code-section">
        <h2>Sample Program</h2>
        <pre className="code-block">
          <code>{codeExample}</code>
        </pre>
      </section>

      <section className="code-section">
        <h2>Expected Output</h2>
        <pre className="code-block">
          <code>{outputExample}</code>
        </pre>
      </section>
    </main>
  );
}

export default AbstractDemo;
