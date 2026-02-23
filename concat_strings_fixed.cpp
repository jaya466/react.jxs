// concat_strings_fixed.cpp
// Demonstrates operator+ overloading for string concatenation using class A.
//
// Compilation: g++ -std=c++17 -o concat_strings_fixed concat_strings_fixed.cpp
// Run:         ./concat_strings_fixed

#include <iostream>
#include <string>

class A {
private:
    std::string data;

public:
    // Read a string value from standard input
    void read() {
        std::cin >> data;
    }

    // Print the stored string to standard output
    void show() const {
        std::cout << data << std::endl;
    }

    // Overload operator+ to concatenate two A objects and return a new A
    A operator+(const A& other) const {
        A result;
        result.data = this->data + other.data;
        return result;
    }
};

int main() {
    A obj1, obj2, obj3;

    std::cout << "Enter first string: ";
    obj1.read();

    std::cout << "Enter second string: ";
    obj2.read();

    // Concatenate using overloaded operator+
    obj3 = obj1 + obj2;

    std::cout << "Concatenated result: ";
    obj3.show();

    return 0;
}
