// Homework topic: Virtual Inheritance (Diamond Problem)
//
// This example answers the question about virtual inheritance in C++.
// It is NOT the same as base-pointer polymorphism (runtime dispatch via
// virtual functions through a base-class pointer or reference), which is
// demonstrated separately in examples/polymorphism.cpp.
//
// The diamond problem arises when a class D inherits from two classes B and C,
// both of which independently inherit from the same base A. Without virtual
// inheritance, D would contain two separate copies of A, causing ambiguity
// when calling A's members. Declaring "virtual public A" in B and C ensures
// that D contains exactly one shared copy of A.

#include <iostream>

// Base class A
class A {
public:
    void show() {
        std::cout << "inside A" << std::endl;
    }
};

// B and C both inherit virtually from A.
// "virtual public A" ensures only one shared copy of A exists in D.
// Without "virtual", D would have two copies of A (one from B, one from C),
// making obj.show() ambiguous and causing a compile error.
class B : virtual public A {};
class C : virtual public A {};

// D inherits from both B and C.
// Thanks to virtual inheritance, D has exactly one copy of A.
class D : public B, public C {};

int main() {
    D obj;
    obj.show(); // prints "inside A" — unambiguous due to virtual inheritance
    return 0;
}
