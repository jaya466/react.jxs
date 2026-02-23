#include <iostream>
#include <cmath>
using namespace std;

const double PI = M_PI;

// Abstract base class
class Shape {
public:
    virtual double area() = 0; // Pure virtual function
    virtual ~Shape() = default;
};

// Derived class
class Circle : public Shape {
private:
    double radius;
public:
    Circle(double r) : radius(r) {}

    double area() override {
        return PI * radius * radius;
    }
};

int main() {
    Circle c(5);
    cout << "Area of Circle: " << c.area() << endl;
    return 0;
}
