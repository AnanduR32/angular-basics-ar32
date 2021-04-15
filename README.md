# Typescript basics

Component controls a patch of screen called a view whose application logic is defined in a class. 

Every time a new component is created 4 files are created:
* component.css : Styling 
* component.html : Frontend
* component.spec.ts : For testing purpose
* component.ts : Backend  

For a component to be available to other components and services, the component must belong to a NgModule.  
A component is declared to be belonging to a NgModule by specifying the component name in the 'declarations: [...]' array property of the @NgModule decorator.  
There is atleast one module in each angular app, AppModule is by default provided root module.

### Decorators 
They are placed before a class to specify whether the class is a module or a component.  
There can be simple as well as parameterized decorators, and generally begin with at-the-rate symbol '@...'  
They help distinguish between classes.

* @NgModule - decorators used for class that represents a module. 
* @Component - decorators used for class that represent a component.

The above two decorators are parameterized and each take an input which is an object that specify the properties of that class.

The various properties of a component type decorator are: 
* selector: To refer the component html code that will replace the html template directive in a parent component. Names a component with an appropriate identifier which can be used to point to the component from a parent module/component, or a module from the main module.
* templateUrl: Specifies the frontend view page for the particular backend component class
* styleUrls: Location of styling code

The various properties of a NgModule type decorator are:
* declarations: A component is declared to be belonging to a NgModule by specifying the component name in the 'declarations: [...]' array.
* exports: Allows other angular application to import the particular module.
* imports: To import third-party functions/libraries/modules into the angular application.
* providers: Provide services to the compoenents 
* bootstrap: Tells which is the main component of the module. The platformBrowserDynamic().bootstrapModule(AppModule) in main.ts file tells that the "AppModule" module is the entry point or the main module for the angular app.

### Data binding 
One way string interpolation allows us to use typescript variables in the html view using double curly brackets '{{<variable in component.ts file>}}'  
  
### Property binding 
One way manipulation value of property of an attribute (html tag) in the view template using square brackets '[]'. Where a property is bound to a typescript variable within the component.ts file.   
  eg: <button [disabled] = "flag">, if flag==true, then button diabled, else if flag==false then button is enabled.  

### Event binding
It allows information to flow from view to the component when some event occurs/is triggered.   
  eg: <button (click) = "sendMessage($event)">, upon button click the function sendMessage() in component is called and the event properties are passed as arguments during the function call.   

### Two-way data binding
from view to component and vice-verse. Uses a NgModel object to pass data to a variable which is part of the FormsModule which has to be imported from '@angular/forms'; 
