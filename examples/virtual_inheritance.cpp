#include <iostream>

// Base class A
class A {
public:
    void show() {
        std::cout << "inside A" << std::endl;
    }
};

// B and C both inherit virtually from A.
// Using "virtual public A" ensures that only one shared copy of A exists
// in the final derived class D, solving the diamond problem.
// If "virtual" is removed, D would contain two separate copies of A
// (one from B and one from C), causing ambiguity when calling show().
class B : virtual public A {};
class C : virtual public A {};

// D inherits from both B and C.
// Because B and C used virtual inheritance, D has exactly one copy of A.
class D : public B, public C {};

int main() {
    D obj;
    obj.show(); // prints "inside A" — unambiguous due to virtual inheritance
    return 0;
}
