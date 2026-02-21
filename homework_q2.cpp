#include <iostream>
using namespace std;

// Base class
class Shape {
public:
    // Virtual function enables runtime polymorphism
    virtual void draw() const {
        cout << "Drawing a generic shape." << endl;
    }

    virtual ~Shape() {}
};

// Derived class 1
class Circle : public Shape {
public:
    void draw() const override {
        cout << "Drawing a Circle." << endl;
    }
};

// Derived class 2
class Rectangle : public Shape {
public:
    void draw() const override {
        cout << "Drawing a Rectangle." << endl;
    }
};

int main() {
    // Base class pointer pointing to derived class objects
    Shape* ptr;

    Circle c;
    Rectangle r;

    // ptr points to a Circle object
    ptr = &c;
    ptr->draw();  // Output: Drawing a Circle.

    // ptr points to a Rectangle object
    ptr = &r;
    ptr->draw();  // Output: Drawing a Rectangle.

    return 0;
}
