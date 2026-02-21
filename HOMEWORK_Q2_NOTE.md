# Homework Q2 — Base Class Pointer Pointing to Derived Class Object

## Can you use the previously shared C++ code for Q2?

**Yes — but only if your code correctly demonstrates a base class pointer pointing to a derived class object using virtual functions (runtime polymorphism).**

If the code you submitted does *not* include `virtual` functions in the base class, it will not demonstrate true polymorphism, and the base class pointer will not dispatch calls to the derived class's overridden methods at runtime. In that case, the code is **not suitable** for Q2 as written.

---

## Correct Example (see `homework_q2.cpp`)

The file [`homework_q2.cpp`](./homework_q2.cpp) in this repository shows the correct pattern:

1. **Base class** (`Shape`) declares a `virtual` member function `draw()`.
2. **Derived classes** (`Circle`, `Rectangle`) override `draw()`.
3. A **base class pointer** (`Shape* ptr`) is assigned the address of derived class objects.
4. Calling `ptr->draw()` invokes the *derived class* version at runtime — this is **runtime polymorphism**.

### Key rules for this pattern to work correctly:
- The base class function **must** be declared `virtual`.
- The derived class should use the `override` keyword (C++11 and later) for clarity and safety.
- The base class should have a `virtual` destructor to ensure proper cleanup when deleting through a base pointer.

### Expected output:
```
Drawing a Circle.
Drawing a Rectangle.
```

---

## Summary

| Requirement | Status in `homework_q2.cpp` |
|---|---|
| Base class pointer | ✅ `Shape* ptr` |
| Points to derived object | ✅ `ptr = &c` / `ptr = &r` |
| Virtual function in base | ✅ `virtual void draw()` |
| Override in derived class | ✅ `override` keyword used |
| Virtual destructor | ✅ `virtual ~Shape() {}` |

This example is correct and suitable for homework Q2.
