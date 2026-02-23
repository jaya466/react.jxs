// count_objects_friend.cpp
// Demonstrates counting the number of live objects of a class using a friend function.
//
// Compilation: g++ -std=c++17 -o count_objects_friend count_objects_friend.cpp
// Run:         ./count_objects_friend

#include <iostream>

class Counter {
private:
    // Static member shared across all instances; tracks the current object count.
    // It is private so only Counter methods and declared friends can access it.
    static int objectCount;

public:
    // Increment count whenever a new Counter object is created
    Counter() {
        ++objectCount;
    }

    // Decrement count whenever a Counter object is destroyed
    ~Counter() {
        --objectCount;
    }

    // Declare getObjectCount as a friend so it can read the private static member.
    // Without friend, a non-member function cannot access Counter::count directly
    // because static private members follow the same access rules as other private members.
    friend int getObjectCount();
};

// Initialize the static member outside the class definition
int Counter::objectCount = 0;

// Friend function: returns the current number of live Counter objects.
// Because it is a friend of Counter, it has direct access to Counter::objectCount
// even though objectCount is private.
int getObjectCount() {
    return Counter::objectCount;
}

int main() {
    std::cout << "Object count: " << getObjectCount() << std::endl; // 0

    Counter c1;
    std::cout << "After creating c1 — Object count: " << getObjectCount() << std::endl; // 1

    {
        // c2 and c3 are destroyed when this block exits
        Counter c2;
        Counter c3;
        std::cout << "After creating c2 and c3 — Object count: " << getObjectCount() << std::endl; // 3
    }

    // c2 and c3 have been destroyed by the end of the block above
    std::cout << "After c2 and c3 go out of scope — Object count: " << getObjectCount() << std::endl; // 1

    Counter c4;
    std::cout << "After creating c4 — Object count: " << getObjectCount() << std::endl; // 2

    return 0;
    // c1 and c4 are destroyed here; count returns to 0
}
