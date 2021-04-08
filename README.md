# Typescript basics

Every time a new component is created 4 files are created:
* component.css : Styling 
* component.html : Frontend
* component.spec.ts : For testing purpose
* component.ts : Backend


### Decorators 
They are placed before a class to specify whether the class is a module or a component.  
There can be simple as well as parameterized decorators, and generally begin with at-the-rate symbol '@...'  
They help distinguish between classes.

* @NgModule - decorators used for class that represents a module. 
* @Component - decorators used for class that represent a component.

The above two decorators are parameterized and each take an input which is an object that specify the properties of that class.

The various properties of a component type decorator are: 
* selector: 
* templateUrl: Specifies the frontend view page for the particular backend component class
* styleUrls: Location of styling code