/* 
Making everything inherited will make the codebase complex and hard to maintain.
"Keep it simple, stupid!" - KISS principle

Inheritance is useful when we have a relationship between two or more objects. The base idea is to start simple, and when we find similarities between objects, we extract them to a common object, and make the other objects inherit from it. This way, we can avoid code duplication and make the codebase more maintainable.

Things to remember:
------------------
- Do not create hierarchies, don't go more than one level. Don't do - Animal -> Mammal -> Dog, Animal -> Bird -> Parrot, etc. Use composition instead.

Composition:
----------------------
Create a new object that can contain all the common functionality, and use it in the objects that need it. This way, we can avoid code duplication and make the codebase more maintainable.

For example - Animals  canEat(), canWalk(), canSwim(), CanRun(), canFly()

Now we can combine canEat(), canRun() and canWalk() in a new object called Mammal, and canFly() and canEat() in a new object called Bird. Now we can use these objects in the objects that need them.

We can use mixins to do this. Mixins are a group of methods that we can use in other objects. We can use Object.assign() to copy the methods from the mixin to the object.
*/
