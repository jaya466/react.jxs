// swap_friend.cpp
// Demonstrates a friend function that swaps private data members of two classes.
//
// Compilation: g++ -std=c++17 -o swap_friend swap_friend.cpp
// Run:         ./swap_friend

#include <iostream>

// Forward declarations so each class can reference the other in the friend declaration
class ClassB;
class ClassA;

// Friend function declaration (defined after both classes)
void swapValues(ClassA& a, ClassB& b);

class ClassA {
private:
    int value;

public:
    ClassA(int val) : value(val) {}

    void show() const {
        std::cout << "ClassA::value = " << value << std::endl;
    }

    // Declare swapValues as a friend so it can access the private member 'value'.
    // Without friend, swapValues would not be able to read or modify ClassA::value
    // because it is private and swapValues is a non-member function.
    friend void swapValues(ClassA& a, ClassB& b);
};

class ClassB {
private:
    int value;

public:
    ClassB(int val) : value(val) {}

    void show() const {
        std::cout << "ClassB::value = " << value << std::endl;
    }

    // Declare swapValues as a friend so it can access the private member 'value'.
    friend void swapValues(ClassA& a, ClassB& b);
};

// Friend function: swaps the private data members of ClassA and ClassB.
// This function is granted friend access by both classes, allowing it to
// directly read and write their private members without public getters/setters.
void swapValues(ClassA& objA, ClassB& objB) {
    int temp = objA.value;
    objA.value = objB.value;
    objB.value = temp;
}

int main() {
    ClassA objA(10);
    ClassB objB(20);

    std::cout << "Before swap:" << std::endl;
    objA.show();
    objB.show();

    swapValues(objA, objB);

    std::cout << "\nAfter swap:" << std::endl;
    objA.show();
    objB.show();

    return 0;
}
