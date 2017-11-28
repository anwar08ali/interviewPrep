'use strict';

/**
 * @ngdoc function
 * @name myInterviewAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myInterviewAppApp
 */
angular.module('myInterviewAppApp')
  .controller('QsnCtrl', ['$scope', '$location', '$anchorScroll',function ($scope, $location, $anchorScroll) {
    $scope.ansContent = "";
	$scope.jsQsns = false;
	$scope.angQsnAnsObj = [
		{
			id: 1,
			qsn: "What is AngularJS? List its advantages.",
			ans: "AngularJS is a powerful <b>javascript framework</b> used for creating dynamic <b>single web page applications using MVC pattern</b>. <br>It extends the html template with new attributes and data binding to html and expressions. <br><b>Advantages:</b><br> 1) It supports <b>two way data binding.</b> <br>2) It uses <b>MVC framework.</b> <br>3) It provide features like services, directives, scopes, DI etc. <br>4) It provides full features SPA framework through routing and it is open source."
		},
		{
			id: 2,
			qsn: "What is data binding in AngularJS?",
			ans: "Data binding is the <b>automatic synchronization of data between model and view components</b>. <br>If the value is changed in the view then it also gets reflected in the model and vice-versa. It is achieved using ng-model and string interpolation {{}}"
		},
		{
			id: 3,
			qsn:"What are the basic steps to unit test an AngularJS filter?",
			ans:"1. <b>Inject the module</b> that contains the filter. <br>2. <b>Provide any mocks</b> that the filter relies on. <br>3. <b>Get an instance of the filter using $filter('yourFilterName')</b>. <br>4. <b>Assert your expectations."
		},
		{
			id: 4,
			qsn:"What should be the maximum number of concurrent “watches”? Bonus: How would you keep an eye on that number?",
			ans:"To reduce memory consumption and improve performance it is a good idea to limit the number of watches on a page to 2,000. <br>A utility called ng-stats can help track your watch count and digest cycles."
		},
		{
			id: 5,
			qsn:"How do you share data between controllers?",
			ans:"Create an <b>AngularJS service</b> that will hold the data and inject it inside of the controllers.  Using a service is the cleanest, fastest and easiest way to test. <br>However, there are couple of other ways to implement data sharing between controllers, like: – Using events – Using <b>$parent, nextSibling, controllerAs, etc</b>. <br>to directly access the controllers – Using the $rootScope to add the data on (not a good practice) The methods above are all correct, but are not the most efficient and easy to test."
		},
		{
			id: 6,
			qsn:"What is the difference between ng-show/ng-hide and ng-if directives? Also state the performance effect of them. Which is better?",
			ans:"ng-show/ng-hide will always insert the DOM element, but will display/hide it based on the condition.<br> ng-if will not insert the DOM element until the condition is not fulfilled.  <br><br>ng-if is better when we needed the DOM to be loaded conditionally, as it will help load page bit faster compared to ng-show/ng-hide.<br>----Since ng-show leaves the elements alive in the DOM, it <b>means that all of their watch expressions and performance cost are still there even though the user doesn’t see the view at all.</b> <br>In cases where you have a few big views that are toggled with ng-show you might be noticing that things are a bit laggy (like clicking on buttons or typing inside input fields).  <br>If you just replace that ng-show with an ng-if you might witness considerable improvements in the responsiveness of your app because those extra watches are no longer happening.<br>--<b>pitfall:Your controllers will be rerun: The controllers and directives in the element that’s being removed and added again will actually be recreated and so their initialization logic will run again."
		},
		{
			id: 7,
			qsn:"Explain the concept of digest cycle, watchers and dirty checking?",
			ans:"When any change happens in the model the view gets updated. This updation of the model and the view is done by a loop called as digest cycle.Digest cycle follows four important steps:-  <br>Step 1:- Some kind of event is triggered by the end user like typing (onchange), button click etc and due to this activity model value changes. <br>Step 2:- Angular first checks if the new value and old values are same. If they are same he does not do anything. If they are not it then it invokes the digest cycle. <br>Step 3:- Digest cycle then runs through the scope objects to check which objects are getting affected because of this change. Every object in the scope have watchers. Watchers as the name says it listens whether the model has changed or not. Digest cycle informs the watchers about the model change and then watchers synchronize the view with the model data. <br>Step 4 :- In step 3 watchers update the view and due that update its very much possible that the model changes again. Now due to this model change we have to reevaulate the view again. So the digest loop runs once again to ensure that all things are synched up. This second loop which runs is termed as<b> dirty check loop</b>.  <br>So summarizing definitions for the above three concepts:-  <br><b>Digest cycle:</b> - It is a simple loop which updates the model and view. <br><b>Watchers </b>:- They are listeners which are attached to expression and angular directives and fire when the model data changes. <br><b>Dirty check</b> :- This is a extra digest loop which runs to check any cascading left over updates due to the first digest cycle."
		},
		{
			id: 8,
			qsn:"Where should we implement the DOM manipulation in AngularJS?",
			ans:"In the directives. DOM Manipulations should not exist in controllers, services or anywhere else but in directives.To make it reusable , testable"
		},
		{
			id: 9,
			qsn:"Why do we use 'data' as prefix while defining directives like data-my-directive?",
			ans:"It is mainly used to validate HTML in older versions of IE or chrome<br>We use ‘data-’ prefix to make sure html validates and we do not cause IE7, 8 browsers to go into quirks mode. Very Important!!!!"
		},
		{
			id: 10,
			qsn:"Is it a good or bad practice to use AngularJS together with jQuery?",
			ans:"It is definitely a bad practice. We need to stay away from jQuery and try to realize the solution with an AngularJS approach. <br><b>jQuery takes a traditional imperative approach to manipulating the DOM</b>, and in an imperative approach, it is up to the programmer to express the individual steps leading up to the desired outcome.  <br><b>AngularJS, however, takes a declarative approach to DOM manipulation</b>. Here, instead of worrying about all of the step by step details regarding how to do the desired outcome, we are just declaring what we want and AngularJS worries about the rest, taking care of everything for us."
		},
		{
			id: 11,
			qsn:"If you were to migrate from Angular 1.4 to Angular 1.5, what is the main thing that would need refactoring?",
			ans:"Changing <b>.directive to .component</b> to adapt to the new Angular 1.5 components"
		},
		{
			id: 12,
			qsn:"How would you specify that a scope variable should have one-time binding only?",
			ans:"By using “::” in front of it."
		},
		{
			id: 13,
			qsn:"What is the difference between one-way binding and two-way binding?",
			ans:"– One way binding implies that the scope variable in the html will be set to the first value its model is bound to (i.e. assigned to) – Two way binding implies that the scope variable will change it’s value everytime its model is assigned to a different value"
		},
		{
			id: 14,
			qsn:"Explain how $scope.$apply() works",
			ans:"$scope.$apply re-evaluates all the declared ng-models and applies the change to any that have been altered (i.e. assigned to a new value). <br>it <b>forces the angular engine to run on all the watched variables and all external variables and apply the changes on their values</b>"
		},
		{
			id: 15,
			qsn:"What makes the angular.copy() method so powerful?",
			ans:"It creates a deep copy of the variable.  A deep copy of a variable means it doesn’t point to the same memory reference as that variable. Usually assigning one variable to another creates a “shallow copy”, which makes the two variables point to the same memory reference. Therefore if we change one, the other changes as well"
		},
		{
			id: 16,
			qsn:"When should you use an attribute versus an element?",
			ans:"Use an element when you are creating a component that is in control of the template. Use an attribute when you are decorating an existing element with new functionality."
		},
		{
			id: 17,
			qsn:"How do you reset a $timeout, $interval(), and disable a $watch()?",
			ans:"To reset a timeout and/or $interval, assign the result of the function to a variable and then call the .cancel() function.<br>------<code>var customTimeout = $timeout(function () {<br>   // arbitrary code }, 55);<br>  $timeout.cancel(customTimeout);</code><br><br>-------to disable $watch(), we call its deregistration function. $watch() then returns a deregistration function that we store to a variable and that will be called for cleanup<br>----------<code>var deregisterWatchFn = $scope.$on(‘$destroy’, function () {  <br>   // we invoke that deregistration function, to disable the watch     <br>deregisterWatchFn(); });---------"
		},
		{
			id: 18,
			qsn:"What are Directives?transclue.",
			ans:"Directives are markers on a DOM element (such as an attribute, element name, comment or CSS class) that tell AngularJS’s HTML compiler ($compile) to attach a specified behavior to that DOM element (e.g. via event listeners), or even to transform the DOM element and its children. Angular comes with a set of these directives built-in, like ngBind, ngModel, and ngClass.we can use prefix as data- or x- like data-ng-model...Also we can use ng:model,ng_model.<br><b>Transclude:</b>It is use to pass arbitrary contents or template to the directive and append the inner HTML of the directive element using ng-transclue option inside directive's template. Any scope variable used inside transclude will refer to the outer parent scope variable not inner. if outer scope exist then it will take the inner.<br><b>Prefixes are used to bind the parent scope’s methods and properties to the directive scope.There’re 3 types of prefixes AngularJS provides.</b><br>1. '@'   (  Text binding / one-way binding )<br>The “@” prefix is a one-way binding between the directive scope and parent scope. It always expects the mapped attribute to be an expression. This is very important; because to make the “@” prefix work, we need to wrap the attribute value inside {{}}. Since “@” is creating a one-way binding between the parent and directive scope, any changes made in the parent scope will reflect inside the directive scope, but not the other way. “@” prefix is really useful when our directive needs to be initialised with some data from parent scope.<br> 2. '='   ( Direct model binding / two-way binding )<br>Secondly we have the “=” prefix. It creates a two-way binding between the parent and directive scope. The most important point about “=” prefix is, it’ll always expect the attribute value to be the model name. That means you cannot provide an expression as the value of attribute mapped to “=” prefix. This is useful, when any of our directive scope property to be same as the parent scope property.<br> 3. '&'   ( Behaviour binding / Method binding  )<br>Finally, we’re going to talk about the last prefix. The “&” prefix is also known as a method binding. This is used to bind any methods from the parent scope to the directive scope. This will be particularly useful when our directive needs to execute any callbacks in the parent scope. Look at the code to see how attribute value for the “&” prefix to be set.<br><a href='http://www.ng-newsletter.com/posts/directives.html'>Nicely described</a>"
		},
		{
			id: 19,
			qsn:"What is DDO Directive Definition Object?",
			ans:"“DDO is an object used while creating a custome directive. A standard DDO object has following parameters.<br>require: '^^myTabs'----<b>option with value ^^myTabs. When a directive uses this option, $compile will throw an error unless the specified controller is found. The ^^ prefix means that this directive searches for the controller on its parents. (A ^ prefix would make the directive look for the controller on its own element or its parents; without any prefix, the directive would look on its own element only.</b>"
		},
		{
			id: 20,
			qsn:"What is a singleton pattern and where we can find it in Angularjs?",
			ans:"Is a great pattern that restricts the use of a class more than once. We can find singleton pattern in angular in dependency injection and in the services.<br><br>When first time object is created say <br><code>abc = Foo.getInstance()</code>, <br>then it will check whether <code>Foo._instance</code> is set..<br>This property holds the reference of its created object...so if nothing is set the it returns a new object and set <code>'this'</code> to <code>Foo._instance</code> property but if set then it returns <code>'this'</code> instead of creating new object.<br><code>var Foo = function (){ <br>'use strict'; <br>if (Foo._instance) { <br>//this allows the constructor to be called multiple times <br>//and refer to the same instance. Another option is to <br>//throw an error. <br>return Foo._instance; } <br>Foo._instance = this; <br>//Foo initialization code <br>}; <br>Foo.getInstance = function () {<br> 'use strict'; <br>return Foo._instance || new Foo(); <br>}<br><pre class='prettyprint linenums run code-hscroll'><ol class='linenums'><li class='L0'><span class='kwd'>var</span><span class='pln'> </span><span class='typ'>Singleton</span><span class='pln'> </span><span class='pun'>=</span><span class='pln'> </span><span class='pun'>(</span><span class='kwd'>function</span><span class='pln'> </span><span class='pun'>()</span><span class='pln'> </span><span class='pun'>{</span></li><li class='L1'><span class='pln'>    </span><span class='kwd'>var</span><span class='pln'> instance</span><span class='pun'>;</span></li><li class='L2'><span class='pln'>&nbsp;</span></li><li class='L3'><span class='pln'>    </span><span class='kwd'>function</span><span class='pln'> createInstance</span><span class='pun'>()</span><span class='pln'> </span><span class='pun'>{</span></li><li class='L4'><span class='pln'>        </span><span class='kwd'>var</span><span class='pln'> </span><span class='kwd'>object</span><span class='pln'> </span><span class='pun'>=</span><span class='pln'> </span><span class='kwd'>new</span><span class='pln'> </span><span class='typ'>Object</span><span class='pun'>(</span><span class='str'>'I am the instance'</span><span class='pun'>);</span></li><li class='L5'><span class='pln'>        </span><span class='kwd'>return</span><span class='pln'> </span><span class='kwd'>object</span><span class='pun'>;</span></li><li class='L6'><span class='pln'>    </span><span class='pun'>}</span></li><li class='L7'><span class='pln'>&nbsp;</span></li><li class='L8'><span class='pln'>    </span><span class='kwd'>return</span><span class='pln'> </span><span class='pun'>{</span></li><li class='L9'><span class='pln'>        getInstance</span><span class='pun'>:</span><span class='pln'> </span><span class='kwd'>function</span><span class='pln'> </span><span class='pun'>()</span><span class='pln'> </span><span class='pun'>{</span></li><li class='L0'><span class='pln'>            </span><span class='kwd'>if</span><span class='pln'> </span><span class='pun'>(!</span><span class='pln'>instance</span><span class='pun'>)</span><span class='pln'> </span><span class='pun'>{</span></li><li class='L1'><span class='pln'>                instance </span><span class='pun'>=</span><span class='pln'> createInstance</span><span class='pun'>();</span></li><li class='L2'><span class='pln'>            </span><span class='pun'>}</span></li><li class='L3'><span class='pln'>            </span><span class='kwd'>return</span><span class='pln'> instance</span><span class='pun'>;</span></li><li class='L4'><span class='pln'>        </span><span class='pun'>}</span></li><li class='L5'><span class='pln'>    </span><span class='pun'>};</span></li><li class='L6'><span class='pun'>})();</span></li><li class='L7'><span class='pln'>&nbsp;</span></li><li class='L8'><span class='kwd'>function</span><span class='pln'> run</span><span class='pun'>()</span><span class='pln'> </span><span class='pun'>{</span></li><li class='L9'><span class='pln'>&nbsp;</span></li><li class='L0'><span class='pln'>    </span><span class='kwd'>var</span><span class='pln'> instance1 </span><span class='pun'>=</span><span class='pln'> </span><span class='typ'>Singleton</span><span class='pun'>.</span><span class='pln'>getInstance</span><span class='pun'>();</span></li><li class='L1'><span class='pln'>    </span><span class='kwd'>var</span><span class='pln'> instance2 </span><span class='pun'>=</span><span class='pln'> </span><span class='typ'>Singleton</span><span class='pun'>.</span><span class='pln'>getInstance</span><span class='pun'>();</span></li><li class='L2'><span class='pln'>&nbsp;</span></li><li class='L3'><span class='pln'>    alert</span><span class='pun'>(</span><span class='str'>'Same instance? '</span><span class='pln'> </span><span class='pun'>+</span><span class='pln'> </span><span class='pun'>(</span><span class='pln'>instance1 </span><span class='pun'>===</span><span class='pln'> instance2</span><span class='pun'>));</span><span class='pln'>  </span></li><li class='L4'><span class='pun'>}</span></li></ol></pre><br><a href='http://www.dofactory.com/javascript/singleton-design-pattern'>link:http://www.dofactory.com/javascript/singleton-design-pattern</a>"
		},
		{
			id: 21,
			qsn:"What is an interceptor? What are common uses of it?",
			ans:"An interceptor is a middleware code where all the <b>$http requests</b> go through.  The <b>interceptor is a factory</b> that are registered in <b>$httpProvider</b>. You have 2 types of requests that go through the interceptor, <b>request and response</b> (with requestError and responseError respectively). This piece of code is very <b>useful for error handling, authentication or middleware in all the requests/responses.</b>"
		},
		{
			id: 22,
			qsn:"How would you programatically change or adapt the template of a directive before it is executed and transformed?",
			ans:"You would use the <b>compile function</b>. The compile function gives you access to the directive’s template before transclusion occurs and templates are transformed, so changes can safely be made to DOM elements. This is very useful for cases where the <b>DOM needs to be constructed based on runtime directive parameters.</b>"
		},
		{
			id: 23,
			qsn:"How would you implement application-wide exception handling in your Angular app?Also explain decorator.",
			ans:"Angular has a built-in error handler service called <b>$exceptionHandler</b> which can easily be overriden or using decorator as seen below:<br>This is very useful for sending errors to third party error logging services or helpdesk applications. <br>Errors trapped inside of event callbacks are not propagated to this handler, but can manually be relayed to this handler by calling $exceptionHandler(e) from within a try catch block.<br><b>Decorators</b> are used to extend the deafault behavior or modification without affecting the source codes of that function<br>In AngularJS, decorators are functions that allow a service, directive or filter to be modified prior to its usage. <br><code>var app = angular.module('studentApp', []); <br>app.config(function ($provide) {<br>$provide.decorator('$exceptionHandler', function ($delegate) {<br>return function (exception, cause) {<br>$delegate(exception, cause);<br>alert('Error occurred! Please contact admin.');<br>};<br>});<br>});</code>"
		},
		{
			id: 24,
			qsn:"How can we decrease digest cycle time ?",
			ans:"To decrease digest cycle time you need to decrease the number of watchers. Below are some best practices you can follow to decrease number of watchers :-  Remove unnecessary watchers. Use one time Angular binding. Especially if you see ng-repeat loop apply one time binding."
		},
		{
			id: 25,
			qsn:"Explain compile and link phase?pre and post link:",
			ans:"At the heart Angular framework is a parser. A parser which parses the Angular directives and render’s HTML output.  Angular parser works in 3 steps:-  Step 1:- HTML browser parses the HTML and creates a DOM (Document Object Model).  Step 2:- Angular framework runs over this DOM looks at the Angular directives and manipulates the DOM accordingly.  Step 3:- This manipulated is then rendered as HTML in the browser.   Now the above angular parsing is not so simple as it looks to be. It occurs in two phases “Compile” and “Link”. Firs the compile phase occurs then the link phase.   In compile phase the angular parser starts parsing the DOM and whenever the parser encounters a directive it create a function. These functions are termed as template or compiled functions. In this phase we do not have access to the $scope data.  In the link phase the data i.e. ($scope) is attached to the template function and executed to get the final HTML output.<br><b>pre:</b> it gets executed before all of its child directives’ link functions.<br><b>Post:</b> it gets executed after all of its child directives’ link functions<br>best link : <a href='https://www.undefinednull.com/2014/07/07/practical-guide-to-prelink-postlink-and-controller-methods-of-angular-directives/'>Pre and post</a>"
		},
		{
			id: 26,
			qsn:"Difference between library and framework?",
			ans:"In short library is a piece of reusable code that can be used directly without changing the codes. But framework can be a library or collection of libraries or a collection of scripts with which e write our own codes according to the framework rules.   In framework we change the structure of our code according to the rules given by them. In order to use the functionality provided by them. In library we can use the functionality directly without changing our code.  ----Advantage  Advantages of frameworks over libraries is flexibility and extensibility. By definition, a framework provides you with the necessary means to extend its behaviour. You often can even subclass the framework classes and provide a complete new functionality.  Disadvantage  The disadvantage of frameworks is that the temptation to add more and more functionality creates many bloated frameworks that results in immobility and needless complexity.  Summary (From Web developer perspective):   A library can be easily replaceable by another library, but a framework cannot.  If you don't like the jQuery date picker library, you can replace it with another date picker such as bootstrap date picker or pickdate.  If you don't like AngularJs on which you built your product, you cannot just replace it with any other framework. You need to rewrite your entire code base.-----"
		},
		{
			id: 27,
			qsn:"Copy vs clone ? or copy vs extend and merge",
			ans:"angular.copy is simply to clone an object. It uses deep copy. angular.extend – shallow copy: angular.merge – deep (recursive) copy:"
		},
		{
			id: 28,
			qsn:"Describe how e2e testing of AngularJS applications work.",
			ans:"The e2e tests are executed against a running app, that is a fully initialized system. They most often spawn a browser instance and involve the actual input of commands through the user interface. The written code is evaluated by an automation program, such as a Selenium server (webdriver). That program sends commands to a browser instance, then evaluates the visible results and reports back to the user.  The assertions are handled by another library, for Protractor the default is Jasmine."
		},
		{
			id: 29,
			qsn:"When a scope is terminated, two similar “destroy” events are fired. What are they used for, and why are there two?",
			ans:"The first one is an AngularJS event, “$destroy”, and the second one is a jqLite / jQuery event “$destroy”. The first one can be used by AngularJS scopes where they are accessible, such as in controllers or link functions. The jqLite / jQuery event is called whenever a node is removed, which may just happen without scope teardown."
		},
		{
			id: 30,
			qsn:"How does interpolation, e.g. “{{ someModel }}”, actually work?",
			ans:"It relies on $interpolation, a service which is called by the compiler. It evaluates text and markup which may contain AngularJS expressions. For every interpolated expression, a “watch()” is set. $interpolation returns a function, which has a single argument, “context”. By calling that function and providing a scope as context, the expressions are “$parse()”d against that scope."
		},
		{
			id: 31,
			qsn:"List a few ways to improve performance in an AngularJS app.",
			ans:"1.<b>Disabling debug data:</b> That tweak disables appending scope to elements, making scopes inaccessible from the console.<br>2.<b>Enabling strict DI mode:</b>The performance gain lies in the fact that the injected modules are annotated explicitly, hence they don’t need to be discovered dynamically.<br>3.<b>Using one-time binding where possible</b>. Those bindings are set, e.g. in “{{ ::someModel }}” interpolations by prefixing the model with two colons. In such a case, no watch is set and the model is ignored during digest.."
		},
		{
			id: 32,
			qsn:"Difference between services and factories.",
			ans:"Services are single ton objects that can be used in our applications by just injecting it in the required module. it does not return any object as it calls its constructor function. Actually it gets instantiated while DI. Whereas factories are also same but it has to explicitly return the object containing the methods and values.----Most important is to realize that both are singletons in your app, even though the name “factory” might imply differently.  Essentially, factories are functions that return the object, while services are constructor functions of the object which are instantiated with the new keyword.<br><a href='https://blog.thoughtram.io/angular/2015/07/07/service-vs-factory-once-and-for-all.html'>see here</a>"
		},
		{
			id: 33,
			qsn:"Difference between ng-bind and ng-model?",
			ans:"ng-model only replace the expression inside the element where ng-model is declared whereas in ng-bind, everything inside that element will be replaced by that expression"
		},
		{
			id: 34,
			qsn:"Ui-router vs ng-router",
			ans:"Here are some common reason ui-router is chosen over ngRoute:  -----ui-router allows for nested views and multiple named views. This is very useful with larger app where you may have pages that inherit from other sections. ------ui-router allows for you to have strong-type linking between states based on state names. Change the url in one place will update every link to that state when you build your links with ui-sref. Very useful for larger projects where URLs might change. ----There is also the concept of the decorator which could be used to allow your routes to be dynamically created based on the URL that is trying to be accessed. This could mean that you will not need to specify all of your routes before hand. -----states allow you to map and access different information about different states and you can easily pass information between states via $stateParams. ------You can easily determine if you are in a state or parent of a state to adjust UI element (highlighting the navigation of the current state) within your templates via $state provided by ui-router which you can expose via setting it in $rootScope on run."
		},
		{
			id: 35,
			qsn:"Explain what is Angular Expression? Explain what is key difference between angular expressions and JavaScript expressions?",
			ans:"Like JavaScript,  Angular expressions are code snippets that are usually placed in binding such as {{ expression }}  The key difference between the JavaScript expressions and Angular expressions  -----Context :In Angular, the expressions are evaluated against a scope object, while the Javascript expressions are evaluated against the global window ----Forgiving:In Angular expression evaluation is forgiving to null and undefined, while in Javascript undefined properties generates TypeError or ReferenceError ------No Control Flow Statements:Loops, conditionals or exceptions cannot be used in an angular expression ----Filters:To format data before displaying it you can use filters"
		},
		{
			id: 36,
			qsn:"Explain what is injector?",
			ans:"An injector is a service locator.  It is used to retrieve object instances as defined by provider, instantiate types, invoke methods and load modules.  There is a single injector per Angular application, it helps to look up an object instance by its name."
		},
		{
			id: 37,
			qsn:".Explain what is the difference between AngularJS and backbone.js?",
			ans:"AngularJS combines the functionalities of most of the 3rd party libraries, it supports individual functionalities required to develop HTML5 Apps.  While Backbone.js do their jobs individually."
		},
		{
			id: 38,
			qsn:"<ng-non-bindable>",
			ans:"This directive informs AngularJS, not to compile or bind the contents of the current DOM element. It is useful in the case when the user wants to display the expression only and do not want to execute it.  It has the following Syntax. <br>AnyElement ng-non-bindable close the tag"
		},
		{
			id: 39,
			qsn:"Explain The Set Of “Special” Variables Supported With <Ng-Repeat> Directive?",
			ans:"$index $first $middle $last"
		},
		{
			id: 40,
			qsn:"Explain AngularJS Scope Life-Cycle?",
			ans:"After the angular app gets loaded into the browser, scope data passes through different stages called as its life cycle. Learning about this cycle helps us to understand the interaction between scope and other AngularJS components.  The scope data traverses through the following phases.--------Creation –This phase initializes the scope. During the bootstrap process, the $injector creates the root scope for the application. And during template linking, some directives create new child scopes. A digest loop also gets created in this phase that interacts with the browser event loop. This loop is responsible for updating DOM elements with the changes made to the model as well as executing any registered watcher functions.----------Watcher registration –This phase registers watchers for scope created in the above point. These watches propagate the model changes to the DOM elements, automatically. We can also register our own watcher’s on a scope by using the $watch() function.----Model mutation –This phase occurs when there is any change in the scope data. When we do any modification in the angular app code, the scope function <$apply()> updates the model and then calls the <$digest()> function to update the DOM elements and the registered watches. However, when we change the scope inside the angular code like within controllers or services, angular internally calls <$apply()> function for us. But, when we do the changes to the scope outside the angular code, we have to call the <$apply()> function explicitly on the scope, to force the model and DOM to be updated correctly.-------Scope destruction –This phase occurs when the child scopes that are no longer needed, are removed from the browser’s memory by using the $destroy() function. It is the responsibility of the child scope creator to destroy them via scope.$destroy() API. This stops propagation of $digest calls into the child scopes and enables the browsers’ garbage collector to reclaim the unused memory."
		},
		{
			id: 41,
			qsn:"What Are Different Ways To Create Service In AngularJS?",
			ans:"There are 5 different ways to create services in AngularJS.  ---Value:It is similar to a key-value pair or like a variable having a value. It can store only a single value.var app=angular.module(“app”,[]); app.value(“username”,”Madhav”); --Factory ---Service ---Provider ------Constant:As the name suggests, this service helps us to declare constants in our application. We can then use them wherever needed, just by adding it as a dependency. There are many places, where we use constants like some base URLs, application name, etc.  We just define them once and use them anywhere as per our need. Thus, this technique allows us to write the definition at one place. If there is any change in the value later, we have to do the modifications at one place only.  Here is an example of how we can create constants:  app.constant(‘applicationName’, ‘Service Tutorials’);"
		},
		{
			id: 42,
			qsn:"Which One Handles Exception Automatically Between $Digest And $Apply?",
			ans:"When an error occurs in one of the watchers, $digest() cannot handle them via $exceptionHandler service. In that case, you have to handle the exception yourself. However, $apply() uses try catch block internally to handle errors. But, if an error occurs in one of the watchers, then it transfers the errors to $exceptionHandler service."
		},
		{
			id: 43,
			qsn:"why use ng-hide when ng-show can work for both situations?",
			ans:"AngularJS has 'declarative' as one of its core philosophies. If 90% of the time you want an element shown, but occasionally it should be hidden, ng-hide='thatcondition' clearly indicates when it should be hdiden. If most of the time it should be HIDDEN, then ng-show='thatrarecondition' is more readable .Clear, readable code is an important principle in any framework, and especially in AngularJS<br><b>An important detail to note is that both directives look for 'truthy' values, not exactly-equal ones</b>it means ANY non-undefined/null value for order.shipped will hide this block! That means if today, you set it as a true/false, it will work. But tomorrow you change it to a DATE that the order was shipped? The rule will still work! "
		},
		{	
			id: 44,
			qsn:"shared, inherited and isolated scopes in custom directives?",
			ans:"<b>Shared scope:</b> here scope value is false(default), which means directive will use the parent controller's scope and <b>it will be two way binding</b>.<br><b>Inherited:</b>here scope value is set to true.Using this property, the directive will create a new scope for itself. And inherit it from parent scope. <b>If we do any changes to the controller scope it will reflect on directive scope, but it won’t work the other way around. This is because both of them use their own copies of scope object.</b><br><b>Isolated:</b>Here too the directive will create a new scope object but it is not inherited by the parent scope, so now this scope doesn’t know anything about the parent scope."
		},
		{
			id: 45,
			qsn:"replace:true in custom directive.",
			ans:"AngularJS Directive’s replace option can be used to replace the container element itself by directive content. By default, the directive content inserted as the child of the element directive is applied on. But using replace, that container element altogether can be replaced by directive’s actual content HTML."
		},
		{
			id: 46,
			qsn:"define module",
			ans:"it is used to create, register and retrieve angular modules "
		},
		{
			id: 47,
			qsn:"require:'mycontroller'",
			ans:"it is used to get other directive's controllers if needed.In the qsn it will search within the element for the controller <br><b>If we use ^mycontroller</b> then it will search it in the parent not only immediate but all parents.<br><b>?^mycontroller</b> if it wont find it then it wont throw error. "
		},
		{
			id: 48,
			qsn: "Define scope",
			ans: "Scope is an object that refers to the model<br>It acts like a <b>bridge between the controller and view</b>.<br>It gets created when 'ng-controller' directive is encountered."
		},
		{
			id: 49,
			qsn: "Define rootScope in angularjs",
			ans: "It is the parent of all scopes. It gets created during bootstrap process.<br>An app can have only one rootScope which will be shared among all its components."
		},
		{
			id: 50,
			qsn: "MVC",
			ans: "It is a software design pattern consisting of three parts--<br><b>Model:</b> It is resposible for maintaining data<br>View:</b> It is that part of the application which is presented to the user.<br>Controller:</b>It controls the interactions between view and model."
		},
		{
			id: 51,
			qsn: "Define controller",
			ans: "It is a function that holds the business logic and is responsible to control the interaction between view and model."
		},
		{
			id: 52,
			qsn: "Explain AngularJS life-cycle",
			ans: "It has three phases:<br><b>Bootstrap:</b> In this phase, when DOM is loaded into the browser, and the angularjs library is loaded,it initializes its own necessary components and then initializes other modules that ng-app is pointed to.It creates the injector and rootScope and then inject all dependencies and made available to the code.<br><b>Compilation Phase:</b>In this phase angularjs searches for all the directives collects them all and then create the template or compile functions associated with them and which returns a link function. In the link phase, the data is attached to the template function and executed to get the final output.<br><b>Runtime data binding phase:</b>In this phase any changes to the scope are reflected in the view and vice versa."
		},
		{
			id: 53,
			qsn: "What is Dependency Injection?",
			ans: "It is a software design pattern which is used to provide dependencies to other modules or objects.<br><b>Why to use it:</b><br>1. It helps the module to use directly its dependent module because the creation of the dependencies are taken care of by the DI process.<br>2. Allow injecting mock objects as dependencies for testing, by maintaining the agreed contract.<br>Now if dependendencies are injected as normal javascript params which is known as <b>implicit dependency annotation</b>, then while minifying, those names might be shorten. So, now when angular look up for dependencies it will fail because name does not matched.<br>So as a solution we need to follow <b>Inline array annotation/Explicit dependency Annotation</b>.<br><b>Approach 2: $inject property annotation</b><code>var app = angular.module('DemoApp', []);<br>  var DemoController = function (s, h) {<br>     h.get('https://api.github.com/users/angular/repos')         .success(function (repos) {<br>         s.repos = repos;     <br>}); }<br> DemoController['$inject'] = ['$scope', '$http'];  <br>app.controller('DemoController', DemoController);</code><br>PRO TIP: If you are looking for the approach with the best performance, go with the $inject property annotation approach. <b>This approach entirely avoids the function definition parsing</b> because this logic is wrapped within the following check in the annotate function: if (!($inject = fn.$inject)). If $inject is already available, no parsing required!<br><b>ng-strict-di:</b>To help developers avoid using implicit dependency injection, angular 1.3 added Strict DI Mode. This is enabled by adding ng-stict-di to the same element as ng-app:When this is added to the original non-minfied sample (here), error is generated mentioning that MainCtrl is not using explicit annotation and cannot be invoked in strict mode<br><b>ng-annotate:</b>ng-annotate is a program that will automatically add explicit dependency injection to your source code.Note: If ng-annotate detects injection has already been made (e.g. @ngInject was detected), it will not duplicate the $inject code.<br><a href='http://anandmanisankar.com/posts/angularjs-dependency-injection-demystified/'>Read More...</a>"
		},
		
		
		{
			id: 54,
			qsn: "Manual and Automatic bootstrap",
			ans: "<h2>Automatically Bootstrapping an Angular Application</h2><p>Let us have a look at the auto-bootstrap process in angular application that we have used so far. The following code shows the structure of the code</p><ul><li>The script tag is placed at the bottom of the page to improve application load time. By placing script at the end, we can ensure that HTML loading is not blocked by <code>angular.js</code> script loading.</li><li>The<code> ng-app</code> directive can be placed anywhere in the application. That’s going to be the entry point of the application or angular will automatically bootstrap the application when it sees the <code>ng-app</code> directive.</li></ul><div class='container'><div class='line number1 index0 alt2'><code class='xml plain'>&lt;!</code><code class='xml keyword'>doctype</code> <code class='xml plain'>html&gt;</code></div><div class='line number2 index1 alt1'><code class='xml plain'>&lt;</code><code class='xml keyword'>html</code> <code class='xml color1'>lang</code><code class='xml plain'>=</code><code class='xml string'>'en'</code> <code class='xml color1'>ng-app</code><code class='xml plain'>=</code><code class='xml string'>'appName'</code><code class='xml plain'>&gt;</code></div><div class='line number3 index2 alt2'><code class='xml spaces'>&nbsp;&nbsp;&nbsp;&nbsp;</code><code class='xml plain'>&lt;</code><code class='xml keyword'>head</code><code class='xml plain'>&gt;</code></div><div class='line number4 index3 alt1'><code class='xml spaces'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class='xml plain'>&lt;</code><code class='xml keyword'>meta</code> <code class='xml color1'>charset</code><code class='xml plain'>=</code><code class='xml string'>'UTF-8'</code><code class='xml plain'>&gt;</code></div><div class='line number5 index4 alt2'><code class='xml spaces'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class='xml plain'>&lt;</code><code class='xml keyword'>title</code><code class='xml plain'>&gt;AngularJS Application&lt;/</code><code class='xml keyword'>title</code><code class='xml plain'>&gt;</code></div><div class='line number6 index5 alt1'><code class='xml spaces'>&nbsp;&nbsp;&nbsp;&nbsp;</code><code class='xml plain'>&lt;/</code><code class='xml keyword'>head</code><code class='xml plain'>&gt;</code></div><div class='line number7 index6 alt2'><code class='xml spaces'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class='xml plain'>&lt;</code><code class='xml keyword'>body</code><code class='xml plain'>&gt;</code></div><div class='line number8 index7 alt1'>&nbsp;</div><div class='line number9 index8 alt2'><code class='xml spaces'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class='xml comments'>&lt;!-- other code goes here --&gt;</code></div><div class='line number10 index9 alt1'>&nbsp;</div><div class='line number11 index10 alt2'><code class='xml spaces'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class='xml plain'>&lt;</code><code class='xml keyword'>script</code> <code class='xml color1'>type</code><code class='xml plain'>=</code><code class='xml string'>'text/javascript'</code> <code class='xml color1'>src</code><code class='xml plain'>=</code><code class='xml string'>'angular.js'</code><code class='xml plain'>&gt;&lt;/</code><code class='xml keyword'>script</code><code class='xml plain'>&gt;</code></div><div class='line number12 index11 alt1'><code class='xml spaces'>&nbsp;&nbsp;&nbsp;&nbsp;</code><code class='xml plain'>&lt;/</code><code class='xml keyword'>body</code><code class='xml plain'>&gt;</code></div><div class='line number13 index12 alt2'><code class='xml plain'>&lt;/</code><code class='xml keyword'>html</code><code class='xml plain'>&gt;</code></div></div><h3>Initialization Process</h3><p>The following processes takes place in every angular application:</p><ol><li>Angular initializes automatically when DOM content is completely loaded or when the <code>angular.js</code> script is evaluated.</li><li>Angular looks for the <code>ng-app</code> directive, if found then it loads the module associated with the <code>ng-app</code> directive.</li><li>Then an application <a href='https://docs.angularjs.org/api/auto/service/$injector' rel='nofollow' target='_blank'>injector </a>is created.</li><li>This will retrieve object instances, instantiate types, invoke methods, and load modules.</li><li>Compile the DOM elements treating the element containing ng-app directive as the root of the application.</li></ol><h2>Manually Bootstrapping an Angular Application</h2><p><b>The automatic initialization will not work with asynchronously loaded data that need to perform an operation before Angular compiles a page. The angular will not wait until the loading of data if we rely on auto-initialization process. Therefore, in this scenario you need to have a better control over the initialization process.</b></p><p>Angular provides a method to control the bootstrap process programmatically or we say manually using <code>angular.boostrap()</code> method.</p><p>You should not use the <code>ng-app</code> directive if you use <code>angular.bootstrap</code> method.</p><h3>Using <code>angular.bootstrap() </code> Example</h3><p>The following example demonstrates how to use <code>angular.bootstrap</code> method to bootstrap an angular application.</p><p>We will first create a module and define a controller for our application.</p><div><div id='highlighter_646778' class='syntaxhighlighter syntaxhighlighter td  overflow-xscroll important  jscript'><table border='0' cellpadding='0' cellspacing='0'><caption>app.js</caption><tbody><tr><td class='gutter'><div class='line number1 index0 alt2'>1</div><div class='line number2 index1 alt1'>2</div><div class='line number3 index2 alt2'>3</div><div class='line number4 index3 alt1'>4</div><div class='line number5 index4 alt2'>5</div></td><td class='code'><div class='container'><div class='line number1 index0 alt2'><code class='jscript keyword'>var</code> <code class='jscript plain'>app = angular.module(</code><code class='jscript string'>'myApp'</code><code class='jscript plain'>, []);</code></div><div class='line number2 index1 alt1'>&nbsp;</div><div class='line number3 index2 alt2'><code class='jscript spaces'>&nbsp;&nbsp;&nbsp;&nbsp;</code><code class='jscript plain'>app.controller(</code><code class='jscript string'>'MessageCtrl'</code><code class='jscript plain'>, </code><code class='jscript keyword'>function</code><code class='jscript plain'>($scope) {</code></div><div class='line number4 index3 alt1'><code class='jscript spaces'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class='jscript plain'>$scope.message = </code><code class='jscript string'>'Angular Bootstrap - Successful'</code><code class='jscript plain'>;</code></div><div class='line number5 index4 alt2'><code class='jscript spaces'>&nbsp;&nbsp;&nbsp;&nbsp;</code><code class='jscript plain'>});</code></div></div></td></tr></tbody></table></div></div><p>The following script is used to bootstrap the application. We will pass our module name as the second parameter to the <code>angular.bootstrap</code> method. the first parameter is the document itself. When it is ready, we will bootstrap our application using this method.</p><div><div id='highlighter_435830' class='syntaxhighlighter syntaxhighlighter td  overflow-xscroll important  jscript'><table border='0' cellpadding='0' cellspacing='0'><caption>bootstrapApp.js</caption><tbody><tr><td class='gutter'><div class='line number1 index0 alt2'>1</div><div class='line number2 index1 alt1'>2</div><div class='line number3 index2 alt2'>3</div></td><td class='code'><div class='container'><div class='line number1 index0 alt2'><code class='jscript plain'>angular.element(document).ready(</code><code class='jscript keyword'>function</code><code class='jscript plain'>() {</code></div><div class='line number2 index1 alt1'><code class='jscript spaces'>&nbsp;&nbsp;&nbsp;&nbsp;</code><code class='jscript plain'>angular.bootstrap(document, [</code><code class='jscript string'>'myApp'</code><code class='jscript plain'>]);</code></div><div class='line number3 index2 alt2'><code class='jscript plain'>});</code></div></div></td></tr></tbody></table></div></div><p>Now we can include these two files in the HTML page and run our application.</p><div class='container'><div class='line number1 index0 alt2'><code class='xml plain'>&lt;!</code><code class='xml keyword'>DOCTYPE</code> <code class='xml plain'>html&gt;</code></div><div class='line number2 index1 alt1'><code class='xml plain'>&lt;</code><code class='xml keyword'>html</code> <code class='xml color1'>lang</code><code class='xml plain'>=</code><code class='xml string'>'en'</code><code class='xml plain'>&gt;</code></div><div class='line number3 index2 alt2'><code class='xml spaces'>&nbsp;&nbsp;&nbsp;&nbsp;</code><code class='xml plain'>&lt;</code><code class='xml keyword'>head</code><code class='xml plain'>&gt;</code></div><div class='line number4 index3 alt1'><code class='xml spaces'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class='xml plain'>&lt;</code><code class='xml keyword'>meta</code> <code class='xml color1'>charset</code><code class='xml plain'>=</code><code class='xml string'>'UTF-8'</code><code class='xml plain'>&gt;</code></div><div class='line number5 index4 alt2'><code class='xml spaces'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class='xml plain'>&lt;</code><code class='xml keyword'>title</code><code class='xml plain'>&gt;AngularJS Bootstrap&lt;/</code><code class='xml keyword'>title</code><code class='xml plain'>&gt;</code></div><div class='line number6 index5 alt1'><code class='xml spaces'>&nbsp;&nbsp;&nbsp;&nbsp;</code><code class='xml plain'>&lt;/</code><code class='xml keyword'>head</code><code class='xml plain'>&gt;</code></div><div class='line number7 index6 alt2'><code class='xml spaces'>&nbsp;&nbsp;&nbsp;&nbsp;</code><code class='xml plain'>&lt;</code><code class='xml keyword'>body</code><code class='xml plain'>&gt;</code></div><div class='line number8 index7 alt1'><code class='xml spaces'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class='xml plain'>&lt;</code><code class='xml keyword'>div</code> <code class='xml color1'>ng-controller</code><code class='xml plain'>=</code><code class='xml string'>'MessageCtrl'</code><code class='xml plain'>&gt;</code></div><div class='line number9 index8 alt2'>&nbsp;</div><div class='line number10 index9 alt1'><code class='xml spaces'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class='xml plain'>&lt;</code><code class='xml keyword'>p</code><code class='xml plain'>&gt;{{ message }}!&lt;/</code><code class='xml keyword'>p</code><code class='xml plain'>&gt;</code></div><div class='line number11 index10 alt2'>&nbsp;</div><div class='line number12 index11 alt1'><code class='xml spaces'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class='xml plain'>&lt;/</code><code class='xml keyword'>div</code><code class='xml plain'>&gt;</code></div><div class='line number13 index12 alt2'>&nbsp;</div><div class='line number14 index13 alt1'><code class='xml spaces'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class='xml plain'>&lt;</code><code class='xml keyword'>script</code> <code class='xml color1'>src</code><code class='xml plain'>=</code><code class='xml string'>'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js'</code><code class='xml plain'>&gt;&lt;/</code><code class='xml keyword'>script</code><code class='xml plain'>&gt;</code></div><div class='line number15 index14 alt2'><code class='xml spaces'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class='xml plain'>&lt;</code><code class='xml keyword'>script</code> <code class='xml color1'>src</code><code class='xml plain'>=</code><code class='xml string'>'app.js'</code><code class='xml plain'>&gt;&lt;/</code><code class='xml keyword'>script</code><code class='xml plain'>&gt;</code></div><div class='line number16 index15 alt1'><code class='xml spaces'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class='xml plain'>&lt;</code><code class='xml keyword'>script</code> <code class='xml color1'>src</code><code class='xml plain'>=</code><code class='xml string'>'bootstrapApp.js'</code><code class='xml plain'>&gt;&lt;/</code><code class='xml keyword'>script</code><code class='xml plain'>&gt;</code></div><div class='line number17 index16 alt2'><code class='xml spaces'>&nbsp;&nbsp;&nbsp;&nbsp;</code><code class='xml plain'>&lt;/</code><code class='xml keyword'>body</code><code class='xml plain'>&gt;</code></div><div class='line number18 index17 alt1'><code class='xml plain'>&lt;/</code><code class='xml keyword'>html</code><code class='xml plain'>&gt;</code></div></div>"
		},
		{
			id: 55,
			qsn: "Directive with restrict C and M",
			ans: "CSS Class: like<br><div class='w3-test-directive'></div><br>Comment: like <br><!-- directive: w3-test-directive -->"
		},
		{
			id: 56,
			qsn: "What is the use of filter in AngularJS?",
			ans: "A filter is used to format the value of expression to display the formatted output. AngularJS enables us to write our own filter.<br>Link : https://toddmotto.com/everything-about-custom-filters-in-angular-js/"
		},
		{
			id: 57,
			qsn: "Typescript",
			ans: "https://www.codeproject.com/Articles/1071285/Latest-TypeScript-Interview-Questions-for-Beginner<br>"
		},
		{
			id: 58,
			qsn: "angular2",
			ans: "http://www.webdevelopmenthelp.net/2016/12/angularjs2-interview-questions.html<br>https://www.wisdomjobs.com/e-university/angular-2-interview-questions.html<br>"
		},
		{
			id: 59,
			qsn: "responsive app",
			ans: "https://dzone.com/articles/tutorial-how-create-responsive"
		},
		{
			id: 60,
			qsn: "nodejs",
			ans: "https://simpleprogrammer.com/2015/12/04/top-4-javascript-concepts-a-node-js-beginner-must-know/<br>"
		}
	];
	
	$scope.jsQsnAnsObj = [
		{
			id: 1,
			qsn: "Classic inheritance vs. prototypal inheritance",
			ans: "<p><b>Classical Inheritance</b>: A constructor function instantiates an instance via the “new” keyword. This new instance inherits properties from a parent class<br><b>Prototypal Inheritance</b>: An instance is created by cloning an existing object that serves as a prototype. This instance—often instantiated using a factory function or “Object.create()”—can benefit from selective inheritance from many different objects.<br>Every JavaScript object is linked to a prototype object from which it can inherit properties. Prototypes are analogous to classes in other OO languages but differ in the fact that they are objects themselves.You first create an object in JavaScript and then augment your own object or create new objects from it. This is called prototypal inheritance <br></p><p>In <b>classic Inheritance</b> create a function which acts like a constructor for creating a new object:<br>// Person object constructor <br><code class='language-js'>var Person = function(name, age, city, state, country){<br>     this.name = name;<br>     this.age = age;<br>     this.city = city;<br>     this.state = state;<br>     this.country = country<br> }<br>Person.prototype.salutation = function(){     <br>return 'Hi! My name is ' + this.name + ' and I am ' + this.age + ' years old.'; <br>}; <br>Person.prototype.getLocation = function(){<br>     return 'I live in ' + this.city + ', ' + this.state + ', ' + this.country + '.'; <br>}; <br>var me = new Person('Jeremias', 27, 'San Lorenzo', 'Santa Fe', 'Argentina'); </code>;<br> ---- The best thing of this approach is that the code is very clear and readable for new developers.Prototype <b> You may notice that I used prototype to declare a new method for the Person object, so why do that when you could just add a function as any other property, right? The problem with this is that every time you create a new Person instance, JavaScript will create a new anonymous function for every method you declare inside the constructor. If you have two objects you'll have two copies of the salutation method...So, using prototype solves this problem because it keeps only one copy of that function that can be called by any Person object you create avoiding problems regarding memory usage</b>..<br><br>Prototypal inheritance----We are going to begin with a plain object that will contain properties and methods, let's use the Person model again, but this time as an object instead of a function:---<br>// Person object <br><code>var Person = { <br>    name : undefined,   <br>  age : undefined,   <br>  city : undefined, <br>    state : undefined,  <br>   country : undefined, <br>    salutation : function(){   <br>      return 'Hi! My name is ' + this.name + ' and I am ' + this.age + ' years old.';    <br> },<br>     getLocation : function(){ <br>        return 'I live in ' + this.city + ', ' + this.state + ', ' + this.country + '.';     <br>}<br> }</code><br><br>----so  how do we create an instance of this object? <br>One option is creating a clone function that takes a base object and returns a prototyped copy of it that you can assign to a variable.--<br>// clone function <br><code>function clone(obj){ <br>    function F(){};<br>     F.prototype = obj;    <br> return new F;<br> }</code><br><br>----What's happening inside clone? <br>We are creating a new function that will act as the constructor and we are prototyping the properties and methods from the object we are passing as a parameter.<br><b>----In the classic inheritance approach we are using it for methods to prevent JavaScript from creating anonymous functions every time the constructor is called. That's pretty good, but if we choose prototypal inheritance we are prototyping the whole object. That sounded pretty redundant, but it's actually the great thing about it.<br>----When you are creating a new instance using classic inheritance you're creating a whole new copy in memory of the base object with every property even if you're not assigning anything to it, while in prototypal inheritance each property and method makes reference to the ones present in the base object until you assign each one a new value.<br>---So prototypal inheritance approach is good.</b></p>"
		},
		{
			id: 2,
			qsn: "Explain object oriented javascript inheritance.",
			ans: "OOP in javascripts is mainly involves two features --Encapsulation: binding code and data together and inheritance: inherit characteristics of another object.--Why Encapsulation?whenever you want to create objects with similar functionalities (to use the same methods and properties), you encapsulate the main functionalities in a Function and you use that Function’s constructor to create the objects.-------Whenever you overwrite an object’s prototype (object.prototype = someVal), you also overwrite the object’s constructor property.we need to set it manually with this: copyOfParent.constructor = childObject;"
		},
		{
			id: 3,
			qsn: "__proto__ vs Prototype",
			ans: "prototype is a property of a Function object. It is the prototype of objects constructed by that function.  __proto__ is internal property of an object, pointing to its prototype. "
		},
		{
			id: 4,
			qsn: "Private variable",
			ans: "Private variable are created using var keyword inside a constructor function that cannot be accessed from outside neither through this keyword"
		},
		{
			id: 5,
			qsn: "Closures?",
			ans: "Closures are like inner class in java. they are inner functions which always has access to the outer (enclosing) function’s variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function’s variables, and it has access to the global variables.You create a closure by adding a function inside another function. --- Properties: 1. Closures have access to the outer function’s variable even after the outer function returns. 2. Closures store references to the outer function’s variables; "
		},
		{
			id: 6,
			qsn: "Difference between     var a=10;     a=10;     this.a=10;",
			ans: "= is a operator which returns the value you assigned, so a = 1 will evaluate to 1, and you see a 2 when you typed b = 2. var don't return anything, it is a statement not an expression."
		},
		{
			id: 7,
			qsn: "Javascript built in data types",
			ans: "The latest ECMAScript standard defines seven data types:  Six data types that are primitives: Boolean, Null, Undefined, Number, String, Symbol (new in ECMAScript 6) and Object"
		},
		{
			id: 8,
			qsn: "Hoisting in javascript? Compilation or run time mechanism?",
			ans: "Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.JavaScript only hoists declarations, not initializations.-----Unlike variables, a function declaration doesn't just hoist the function's name. It also hoists the actual function definition.However, function definition hoisting only occurs for function declarations, not function expressions. For example:---<br>// Outputs: 'Definition hoisted!' <br><code>definitionHoisted();  <br>// TypeError: undefined is not a function <br>definitionNotHoisted();  <br>function definitionHoisted() {     <br>console.log('Definition hoisted!'); <br>} <br> var definitionNotHoisted = function () { <br>    console.log('Definition not hoisted!); <br>}</code><br>Hoisting is Compile time mecahanism;"
		},
		{
			id: 9,
			qsn: "What is prototype?",
			ans: "Prototype is a property on the function object.All JavaScript objects inherit the properties and methods from their prototype. Objects created using an object literal, or with new Object(), inherit from a prototype called Object.prototype. ... The Object.prototype is on the top of the prototype chain."
		},
		{
			id: 10,
			qsn: "call vs apply vs bind?",
			ans: "<b>Both call and apply are used to set the scope or context in which the function will be invoked.</b><br>Both perform very similar functions: they execute a function in the context, or scope, of the first argument that is passed to them. Also, they're both functions that can <b>only be called on other functions not objects e.g obj.cal().</b><br></b>call gives us a way to 'borrow' a method from one object to use for another.</b><br>--The limitations of call quickly become apparent when you want to write code that doesn't (or shouldn't) know the number of arguments that the functions need--So that's where apply comes in - the second argument needs to be an array, which is unpacked into arguments that are passed to the called function.---So that's the difference between call and apply. Both can be called on functions, which they run in the context of the first argument. In call the subsequent arguments are passed in to the function as they are, while apply expects the second argument to be an array that it unpacks as arguments for the called function.---.Call invokes the function and allows you to pass in arguments one by one. Apply invokes the function and allows you to pass in arguments as an array. <br><h3 id='Using_call_to_chain_constructors_for_an_object'>Using <code>call</code> to chain constructors for an object</h3><br><pre class='brush: js line-numbers  language-js'><code class=' language-js'><span class='token keyword'>function</span> <code class='language-js'><span class='token keyword'>function</span> <span class='token function'>Product</span><span class='token punctuation'>(</span>name<span class='token punctuation'>,</span> price<span class='token punctuation'>)</span> <span class='token punctuation'>{</span>   <span class='token keyword'>this</span><span class='token punctuation'>.</span>name <span class='token operator'>=</span> name<span class='token punctuation'>;</span>   <span class='token keyword'>this</span><span class='token punctuation'>.</span>price <span class='token operator'>=</span> price<span class='token punctuation'>;</span> <span class='token punctuation'>}</span>  <span class='token keyword'>function</span> <span class='token function'>Food</span><span class='token punctuation'>(</span>name<span class='token punctuation'>,</span> price<span class='token punctuation'>)</span> <span class='token punctuation'>{</span>   Product<span class='token punctuation'>.</span><span class='token function'>call</span><span class='token punctuation'>(</span><span class='token keyword'>this</span><span class='token punctuation'>,</span> name<span class='token punctuation'>,</span> price<span class='token punctuation'>)</span><span class='token punctuation'>;</span>   <span class='token keyword'>this</span><span class='token punctuation'>.</span>category <span class='token operator'>=</span> <span class='token string'>'food'</span><span class='token punctuation'>;</span> <span class='token punctuation'>}</span>  <span class='token keyword'>function</span> <span class='token function'>Toy</span><span class='token punctuation'>(</span>name<span class='token punctuation'>,</span> price<span class='token punctuation'>)</span> <span class='token punctuation'>{</span>   Product<span class='token punctuation'>.</span><span class='token function'>call</span><span class='token punctuation'>(</span><span class='token keyword'>this</span><span class='token punctuation'>,</span> name<span class='token punctuation'>,</span> price<span class='token punctuation'>)</span><span class='token punctuation'>;</span>   <span class='token keyword'>this</span><span class='token punctuation'>.</span>category <span class='token operator'>=</span> <span class='token string'>'toy'</span><span class='token punctuation'>;</span> <span class='token punctuation'>}</span>  <span class='token keyword'>var</span> cheese <span class='token operator'>=</span> <span class='token keyword'>new</span> <span class='token class-name'>Food</span><span class='token punctuation'>(</span><span class='token string'>'feta'</span><span class='token punctuation'>,</span> <span class='token number'>5</span><span class='token punctuation'>)</span><span class='token punctuation'>;</span> <span class='token keyword'>var</span> fun <span class='token operator'>=</span> <span class='token keyword'>new</span> <span class='token class-name'>Toy</span><span class='token punctuation'>(</span><span class='token string'>'robot'</span><span class='token punctuation'>,</span> <span class='token number'>40</span><span class='token punctuation'>)</span><span class='token punctuation'>;</span><span class='line-numbers-rows'><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre><br><h3 >Using <code>call</code> to invoke an anonymous function</h3><br><pre class='brush: js line-numbers  language-js'><code class='language-js'><span class='token keyword'>function</span> <code class=' language-js'><span class='token keyword'>var</span> animals <span class='token operator'>=</span> <span class='token punctuation'>[</span>   <span class='token punctuation'>{</span> species<span class='token punctuation'>:</span> <span class='token string'>'Lion'</span><span class='token punctuation'>,</span> name<span class='token punctuation'>:</span> <span class='token string'>'King'</span> <span class='token punctuation'>}</span><span class='token punctuation'>,</span>   <span class='token punctuation'>{</span> species<span class='token punctuation'>:</span> <span class='token string'>'Whale'</span><span class='token punctuation'>,</span> name<span class='token punctuation'>:</span> <span class='token string'>'Fail'</span> <span class='token punctuation'>}</span> <span class='token punctuation'>]</span><span class='token punctuation'>;</span>  <span class='token keyword'>for</span> <span class='token punctuation'>(</span><span class='token keyword'>var</span> i <span class='token operator'>=</span> <span class='token number'>0</span><span class='token punctuation'>;</span> i <span class='token operator'>&lt;</span> animals<span class='token punctuation'>.</span>length<span class='token punctuation'>;</span> i<span class='token operator'>++</span><span class='token punctuation'>)</span> <span class='token punctuation'>{</span>   <span class='token punctuation'>(</span><span class='token keyword'>function</span><span class='token punctuation'>(</span>i<span class='token punctuation'>)</span> <span class='token punctuation'>{</span>     <span class='token keyword'>this</span><span class='token punctuation'>.</span>print <span class='token operator'>=</span> <span class='token keyword'>function</span><span class='token punctuation'>(</span><span class='token punctuation'>)</span> <span class='token punctuation'>{</span>       console<span class='token punctuation'>.</span><span class='token function'>log</span><span class='token punctuation'>(</span><span class='token string'>'#'</span> <span class='token operator'>+</span> i <span class='token operator'>+</span> <span class='token string'>' '</span> <span class='token operator'>+</span> <span class='token keyword'>this</span><span class='token punctuation'>.</span>species                   <span class='token operator'>+</span> <span class='token string'>': '</span> <span class='token operator'>+</span> <span class='token keyword'>this</span><span class='token punctuation'>.</span>name<span class='token punctuation'>)</span><span class='token punctuation'>;</span>     <span class='token punctuation'>}</span>     <span class='token keyword'>this</span><span class='token punctuation'>.</span><span class='token function'>print</span><span class='token punctuation'>(</span><span class='token punctuation'>)</span><span class='token punctuation'>;</span>   <span class='token punctuation'>}</span><span class='token punctuation'>)</span><span class='token punctuation'>.</span><span class='token function'>call</span><span class='token punctuation'>(</span>animals<span class='token punctuation'>[</span>i<span class='token punctuation'>]</span><span class='token punctuation'>,</span> i<span class='token punctuation'>)</span><span class='token punctuation'>;</span> <span class='token punctuation'>}</span><span class='line-numbers-rows'><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre><br><b>Bind returns a new function, allowing you to pass in a this array and any number of arguments.</b>-----Call and apply are pretty interchangeable. Just decide whether it’s easier to send in an array or a comma separated list of arguments. I always remember which one is which by remembering that Call is for comma (separated list) and Apply is for Array. Bind is a bit different. It returns a new function. Call and Apply execute the current function immediately.<br>=======http://adripofjavascript.com/blog/drips/invoking-javascript-functions-with-call-and-apply.html<br>========https://hangar.runway7.net/javascript/difference-call-apply==="
		},
		{
			id:11,
			qsn:"display:none vs visibility:hidden vs opacity:0.4",
			ans:"display:none---it doesn’t take any space and makes element invisible from the view----visibility:hidden---makes element invisible from the view but still takes up the space.---opacity:0.4----it also takes up space but can make that element more or less visible depending on the number i.e the transparency."
		},
		{
			id:12,
			qsn:"JIT ?",
			ans:"Just in time is a javascript compiler.It makes javascript run faster by adding a new part to the JavaScript engine, called a monitor (aka a profiler). That monitor watches the code as it runs, and makes a note of how many times it is run and what types are used. Chrome and safari default uses it."
		},
		{
			id:13,
			qsn:"html 5 elements",
			ans:"new element---<b>[article, dialog, footer,header]..</b><br>---New input types---<b>color date email month number etcs</b>---new attribute---<b>autocomplete autofocus required"
		},
		{
			id:14,
			qsn:"null vs undefined?",
			ans:"<b>null can be used to assing as a value to an object</b> and its <b>type is object</b> whereas <b>undefined type is undefined</b><br><b>'undefined' means this value does not exist. typeof returns 'undefined'</b><br><b>'null' means this value exists with an empty value."
		},
		{
			id:15,
			qsn:"Write a function which accepts n no. of parameters and do some operation on that",
			ans:"we can use 'argument which is an array of arguments'"
		},
		{
			id:16,
			qsn:"use strict",
			ans:"It runs javascript code in strict mode that means if someone accidently wirite a=10 it will throw error coz it is not declared.<br>'use strict'; delete Object.prototype; <br>// throws a TypeError<br>'use strict'; <br>var o = { p: 1, p: 2 }; <br>// !!! syntax error---<br>// Assignment to a non-writable global <br>var undefined = 5; <br>// throws a TypeError"
		},
		{
			id:17,
			qsn:"this keyword",
			ans:"this inside a function refers to the object that invokes it----when a function executes, it gets the this property—a variable with the value of the object that invokes the function where this is used.  The this reference ALWAYS refers to (and holds the value of) an object—a singular object—and it is usually used inside a function or a method, although it can be used outside a function in the global scope. Note that when we use strict mode, this holds the value of undefined in global functions and in anonymous functions that are not bound to any object.  this is used inside a function (let’s say function A) and it contains the value of the object that invokes function A. We need this to access methods and properties of the object that invokes function A, especially since we don’t always know the name of the invoking object, and sometimes there is no name to use to refer to the invoking object. Indeed, this is really just a shortcut reference for the “antecedent object”—the invoking object."
		},
		{
			id:18,
			qsn:"IIFE",
			ans:"It’s an Immediately-Invoked Function Expression, or IIFE for short. It executes immediately after it’s created.  It has nothing to do with any event-handler for any events (such as document.onload). <br>The first pair of parentheses (function(){...}) turns the code within (in this case, a function) into an expression, and the second pair of parentheses (function(){...})() calls the function that results from that evaluated expression.<br><b>The primary reason to use an IIFE is to obtain data privacy</b>. Because JavaScript's var scopes variables to their containing function, any variables declared within the IIFE cannot be accessed by the outside world.<br><b>Of course, you could explicitly name and then invoke a function to achieve the same ends.</b><br>However, this approach has a few downsides. First, it unnecessarily takes up a name in the global namespace, increasing the possibility of name collisions. <br>Second, the intentions of this code aren't as self-documenting as an IIFE. <br>And third, because it is named and isn't self-documenting it might accidentally be invoked more than once."
		},
		{
			id:19,
			qsn:"Define event bubbling, event capturing and event target?",
			ans:"<b>Bubbling: When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors</b>.Let’s say, we have 3 nested elements FORM > DIV > P with a handler on each of them: ---<form onclick='alert('form')'>FORM   <div onclick='alert('div')'>DIV     <p onclick='alert('p')'>P</p>   </div> </form>---So if we click on <p>, then we’ll see 3 alerts: p → div → form.-----<br><b>Almost all events bubble. The key word in this phrase is “almost”.  For instance, a focus event does not bubble.</b> <br> <b>Event.target: The most deeply nested element that caused the event is called a target element, accessible as event.target</b>.For instance, if we have a single handler form.onclick, then it can “catch” all clicks inside the form. No matter where the click happened, it bubbles up to <form> and runs the handler.------Event capturing: It is opposite of bubbling.To catch an event on the capturing phase, we need to set the 3rd argument of addEventListener to true.  There are two possible values for that optional last argument:  If it’s false (default), then the handler is set on the bubbling phase. If it’s true, then the handler is set on the capturing phase."
		},
		{
			id:20,
			qsn:"e.preventDefault() , e.stoppropogation, e.stopimmediatepropogation",
			ans:"The event.preventDefault() method stops the default action of an element from happening.  For example:  Prevent a submit button from submitting a form-----e.stoppropogation: The event.stopPropagation() method stops the bubbling of an event to parent elements, preventing any parent event handlers from being executed.----e.stopimmediatepropogation: stopImmediatePropagation will prevent any parent handlers and also any other handlers from executing"
		},
		{
			id:21,
			qsn:"empty, remove, detach in jquery",
			ans:"empty() will remove all the contents of the selection. remove() will remove the selection and its contents.And also all bound events and jQuery data associated with the elements are removed. ---<div>     <p><strong>foo</strong></p> </div>  $('p').empty();  // --> '<div><p></p></div>'  // whereas, $('p').remove(); // --> '<div></div>'-----detach() is like remove(), but keeps the stored data and events associated with the matched elements.<br><a href='http://www.jquerybyexample.net/2012/05/empty-vs-remove-vs-detach-jquery.html'>Read...</a>"
		},
		{
			id:22,
			qsn:"event delegation/event propagation",
			ans:"The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor......<b>Event delegation allows us to attach a single event listener, to a parent element, that will fire for all descendants matching a selector, whether those descendants exist now or are added in the future.</b>---- event propagation is same as bubbling"
		},
		{
			id:23,
			qsn:"What are cookies? In which location cookies are stored on the hard disk?",
			ans:"A cookie is information stored on your computer by a website you visit.  In some browsers, each cookie is a small file, but in Firefox, all cookies are stored in a single file, located in the Firefox profile folder.  Cookies often store your settings for a website, such as your preferred language or location"
		},
		{
			id:24,
			qsn:"local vs session storage vs cookies?",
			ans:"<b>sessionStorage, localStorage and Cookies all are used to store data on the client side</b>. Each one has its own storage and expiration limit.  localStorage: stores data with no expiration date, and gets cleared only through JavaScript, or clearing the Browser Cache / Locally Stored Data  sessionStorage: similar to localStorage but expires when the browser closed (not the tab).  Cookie: stores data that has to be sent back to the server with subsequent requests. Its expiration varies based on the type and the expiration duration can be set from either server-side or client-side (normally from server-side).  <b>Cookies are primarily for server-side reading (can also be read on client-side), localStorage and sessionStorage can only be read on client-side.</b>"
		},
		{
			id:25,
			qsn:"How to delete object prototype from inherited object",
			ans:"the delete() function only affects the referenced object, regardless of the prototype chain that contains said object. Unlike property references, which will travel up the prototype chain looking for values, a call to the delete() function will only affect the given reference.e.g delete(obj.name)"
		},
		{
			id:26,
			qsn:"call parent function from inherited object",
			ans:"using call or apply....Here's how its done: ParentClass.prototype.myMethod();  Or if you want to call it in the context of the current instance, you can do: ParentClass.prototype.myMethod.call(this)"
		},
		{
			id:27,
			qsn:"Constructors vs Factory Methods",
			ans:"Constructors methods are used to create and initialize an object. When an object is created using the new keyword,constructor function is called whose name is name as class name. Factory Methods are just like other methods which returns an object. And can also be created using factory method like Object.create(obj);"
		},
		{
			id:28,
			qsn:"ways to create objects",
			ans:"using curly braces like obj = {}, using new keyword like obj = new Object(), using obj = Object.create(null)"
		},
		{
			id:29,
			qsn:"how singleton pattern is achieved?",
			ans:"when first tyme object is created say abc = Foo.getInstance(), then it will check whether Foo._instance is set..This property holds the reference of its created object...so if nothing is set the it returns a new object and set 'this' to Foo._instance property but if set then it returns 'this' instead of creating new object.------------var Foo = function () {     'use strict';     if (Foo._instance) {         //this allows the constructor to be called multiple times         //and refer to the same instance. Another option is to         //throw an error.         return Foo._instance;     }     Foo._instance = this;     //Foo initialization code }; Foo.getInstance = function () {     'use strict';     return Foo._instance || new Foo(); }---------link: http://www.dofactory.com/javascript/singleton-design-pattern"
		},
		{
			id:30,
			qsn:"combination of e.preventDefault and e.stoppropagation --> return false;",
			ans:"Firstly, in JavaScript's event model, you will come across a concept called as event bubbling (which makes an event to propagate from child element to a parent element). In order to avoid such kind of bubbling effect, many developers use an event method called stopPropagation( ). Alternatively, developers have started to use return false statement to stop such propagation. Now, there is another terminology called preventDefault( ). As the name indicates, this method prevents any default behavior of an element to trigger. Best use case is to prevent an anchor tag to open a link.  You may come across a scenario where you would like to prevent the anchor tag from opening a link (default behavior) as well as stop the event from going up to the parent. In such situation, instead of writing two lines of code, you can get it done in single line i.e; return false"
		},
		{
			id:31,
			qsn:"difference between ecma and javascript",
			ans:"ECMAScript is a Standard for scripting languages. Languages like Javascript are based on the ECMAScript standard.ECMA means European Computer Manufacturer's Association."
		},
		{
			id:32,
			qsn:"Uses of closure",
			ans:"One powerful use of closures is to use the outer function as a factory for creating functions that are somehow related.---Namespacing private functions Many object-oriented languages provide the ability to declare methods as either public or private. JavaScript doesn’t have this functionality built in, but it does allow to emulate this functionality through the use of closures, which is known as the module pattern.keeps general namespaces clean, preventing naming collisions"
		},
		{
			id:33,
			qsn:"Promise.all()",
			ans:"The Promise.all() method returns a single Promise that resolves when all of the promises in the iterable argument have resolved or when the iterable argument contains no promises. It rejects with the reason of the first promise that rejects.------This method can be useful for aggregating the results of multiple promises.  Fulfillment: If an empty iterable is passed, then this method returns (synchronously) an already resolved promise. If all of the passed-in promises fulfill, or are not promises, the promise returned by Promise.all is fulfilled asynchronously. In all cases, the returned promise is fulfilled with an array containing all the values of the iterable passed as argument (also non-promise values).  Rejection: If any of the passed-in promises reject, Promise.all asynchronously rejects with the value of the promise that rejected, whether or not the other promises have resolved."
		},
		{
			id:34,
			qsn:"events in jquery",
			ans:"All the different visitor's actions that a web page can respond to are called events.---click,mouseenter,mouseleave etc"
		},
		{
			id:35,
			qsn:"ajax call in jquery",
			ans:"Perform an asynchronous HTTP (Ajax) request."
		},
		{
			id:36,
			qsn:"json vs jsonp",
			ans:"JSON is a language designed for lightweight data exchange in an format that is easy for both humans and computers to understand.JSONP is JSON with padding. Response is JSON data but with a function call wrappedaround it.  functioncallExample({ 'Name': 'Web Technology", 'Website': "Web Technology Experts Notes' });  JSONP is a simple way to overcome browser restrictions when sending JSON responses from different domains from the client."
		},
		{
			id:37,
			qsn:"What is a potential pitfall with using typeof bar === 'object' to determine if bar is an object? How can this pitfall be avoided?",
			ans:"Although typeof bar === 'object' is a reliable way of checking if bar is an object, the surprising gotcha in JavaScript is that null is also considered an object!---the problem can easily be avoided by also checking if bar is null:  console.log((bar !== null) && (typeof bar === 'object'));  // logs false"
		},
		{
			id:38,
			qsn:"What will the code below output to the console and why?<br><code>  (function(){   <br>var a = b = 3; <br>})();  <br>console.log('a defined? ' + (typeof a !== 'undefined')); <br>console.log('b defined? ' + (typeof b !== 'undefined'));</code>",
			ans:"var a = b = 3; is actually shorthand for:  b = 3; var a = b;---As a result (if you are not using strict mode), the output of the code snippet would be:  a defined? false b defined? true But how can b be defined outside of the scope of the enclosing function? Well, since the statement var a = b = 3; is shorthand for the statements b = 3; and var a = b;, b ends up being a global variable (since it is not preceded by the var keyword) and is therefore still in scope even outside of the enclosing function."
		},
		{
			id:39,
			qsn:"What will the code below output to the console and why?  <br><code>var myObject = {  <br>   foo: 'bar',  <br>   func: function() {  <br>       var self = this;    <br>     console.log('outer func:  this.foo = ' + this.foo);<br>         console.log('outer func:  self.foo = ' + self.foo);  <br>       (function() {   <br>          console.log('inner func:  this.foo = ' + this.foo);     <br>        console.log('inner func:  self.foo = ' + self.foo);   <br>      }());   <br>  } }; <br>myObject.func();</code>",
			ans:"outer func:  this.foo = bar outer func:  self.foo = bar inner func:  this.foo = undefined inner func:  self.foo = bar In the outer function, both this and self refer to myObject and therefore both can properly reference and access foo.  In the inner function, though, this no longer refers to myObject. As a result, this.foo is undefined in the inner function, whereas the reference to the local variable self remains in scope and is accessible there."
		},
		{
			id:40,
			qsn:"What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?",
			ans:"This is an increasingly common practice, employed by many popular JavaScript libraries (jQuery, Node.js, etc.). This technique creates a closure around the entire contents of the file which, perhaps most importantly, creates a private namespace and thereby helps avoid potential name clashes between different JavaScript modules and libraries.  Another feature of this technique is to allow for an easily referenceable (presumably shorter) alias for a global variable. This is often used, for example, in jQuery plugins. jQuery allows you to disable the $ reference to the jQuery namespace, using jQuery.noConflict(). If this has been done, your code can still use $ employing this closure technique, as follows:  (function($) { /* jQuery plugin code referencing $ */ } )(jQuery);"
		},
		{
			id:41,
			qsn:"What will the code below output? Explain your answer.  console.log(0.1 + 0.2); console.log(0.1 + 0.2 == 0.3);",
			ans:"An educated answer to this question would simply be: “You can’t be sure. it might print out “0.3” and “true”, or it might not. Numbers in JavaScript are all treated with floating point precision, and as such, may not always yield the expected results.”  The example provided above is classic case that demonstrates this issue. Surprisingly, it will print out:  0.30000000000000004 false"
		},
		{
			id:42,
			qsn:"Discuss possible ways to write a function isInteger(x) that determines if x is an integer.",
			ans:"with ECMAscript 6 which introduces a new Number.isInteger()----the simplest and cleanest pre-ECMAScript-6 solution function isInteger(x) { return (x^0) === x; } "
		},
		{
			id:43,
			qsn:"palindrome?",
			ans:"function isPalindrome(str) {     str = str.replace(/\W/g, '').toLowerCase();     return (str == str.split('').reverse().join('')); }"
		},
		{
			id:44,
			qsn:"Write a sum method which will work properly when invoked using either syntax below.  console.log(sum(2,3));   // Outputs 5 console.log(sum(2)(3));  // Outputs 5",
			ans:"function sum(x) {   if (arguments.length == 2) {     return arguments[0] + arguments[1];   } else {     return function(y) { return x + y; };   } } -------function sum(x, y) {   if (y !== undefined) {     return x + y;   } else {     return function(y) { return x + y; };   } }"
		},
		{
			id:45,
			qsn:"var arr1 = 'john'.split(''); var arr2 = arr1.reverse(); var arr3 = 'jones'.split(''); arr2.push(arr3); console.log('array 1: length=' + arr1.length + ' last=' + arr1.slice(-1)); console.log('array 2: length=' + arr2.length + ' last=' + arr2.slice(-1));",
			ans:"arr1 and arr2 are the same after the above code is executed for the following reasons:  Calling an array object’s reverse() method doesn’t only return the array in reverse order, it also reverses the order of the array itself (i.e., in this case, arr1). The reverse() method returns a reference to the array itself (i.e., in this case, arr1). As a result, arr2 is simply a reference to (rather than a copy of) arr1. Therefore, when anything is done to arr2 (i.e., when we invoke arr2.push(arr3);), arr1 will be affected as well since arr1 and arr2 are simply references to the same object. And a couple of side points here that can sometimes trip someone up in answering this question:  Passing an array to the push() method of another array pushes that entire array as a single element onto the end of the array. As a result, the statement arr2.push(arr3); adds arr3 in its entirety as a single element to the end of arr2 (i.e., it does not concatenate the two arrays, that’s what the concat() method is for). Like Python, JavaScript honors negative subscripts in calls to array methods like slice() as a way of referencing elements at the end of the array; e.g., a subscript of -1 indicates the last element in the array, and so on."
		},
		{
			id:46,
			qsn:"for (var i = 0; i < 5; i++) {   setTimeout(function() { console.log(i); }, i * 1000 ); }",
			ans:"The code sample shown will not display the values 0, 1, 2, 3, and 4 as might be expected; rather, it will display 5, 5, 5, 5, and 5.  The reason for this is that each function executed within the loop will be executed after the entire loop has completed and all will therefore reference the last value stored in i, which was 5.  Closures can be used to prevent this problem by creating a unique scope for each iteration, storing each unique value of the variable within its scope, as follows:  for (var i = 0; i < 5; i++) { 	(function(x) {     	setTimeout(function() { console.log(x); }, x * 1000 );     })(i); } This will produce the presumably desired result of logging 0, 1, 2, 3, and 4 to the console."
		},
		{
			id:47,
			qsn:"console.log('0 || 1 = '+(0 || 1)); console.log('1 || 2 = '+(1 || 2)); console.log('0 && 1 = '+(0 && 1)); console.log('1 && 2 = '+(1 && 2));",
			ans:"Output: 1,1,0 and 2 <br>In JavaScript, both || and && are logical operators that return the first fully-determined “logical value” when evaluated from left to right.  The or (||) operator. In an expression of the form X||Y, X is first evaluated and interpreted as a boolean value. If this boolean value is true, then true (1) is returned and Y is not evaluated, since the “or” condition has already been satisfied. If this boolean value is “false”, though, we still don’t know if X||Y is true or false until we evaluate Y, and interpret it as a boolean value as well.  Accordingly, 0 || 1 evaluates to true (1), as does 1 || 2.  The and (&&) operator. In an expression of the form X&&Y, X is first evaluated and interpreted as a boolean value. If this boolean value is false, then false (0) is returned and Y is not evaluated, since the “and” condition has already failed. If this boolean value is “true”, though, we still don’t know if X&&Y is true or false until we evaluate Y, and interpret it as a boolean value as well.  <b>However, the interesting thing with the && operator is that when an expression is evaluated as “true”, then the expression itself is returned. This is fine, since it counts as “true” in logical expressions, but also can be used to return that value when you care to do so. This explains why, somewhat surprisingly, 1 && 2 returns 2 (whereas you might it expect it to return true or 1)."
		},
		{
			id:48,
			qsn:"var a={},     b={key:'b'},     c={key:'c'};  a[b]=123; a[c]=456;  console.log(a[b]);",
			ans:"The output of this code will be 456 (not 123).  The reason for this is as follows: When setting an object property, JavaScript will implicitly stringify the parameter value. In this case, since b and c are both objects, they will both be converted to '[object Object]'. As a result, a[b] anda[c] are both equivalent to a['[object Object]'] and can be used interchangeably. Therefore, setting or referencing a[c] is precisely the same as setting or referencing a[b]."
		},
		{
			id:49,
			qsn:"var hero = {     _name: 'John Doe',     getSecretIdentity: function (){         return this._name;     } };  var stoleSecretIdentity = hero.getSecretIdentity;  console.log(stoleSecretIdentity()); console.log(hero.getSecretIdentity());",
			ans:"The first console.log prints undefined because we are extracting the method from the hero object, so stoleSecretIdentity() is being invoked in the global context (i.e., the window object) where the _name property does not exist.  One way to fix the stoleSecretIdentity() function is as follows:  var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);"
		},
		{
			id:50,
			qsn:"What are the advantages of using JavaScript?",
			ans:"Lightweight: JavaScript can be executed within the user’s browser without having to communicate with the server, saving on bandwidth.----Versatile: JavaScript supports multiple programming paradigms—object-oriented, imperative, and functional programming and can be used on both front-end and server-side technologies.----------Prototypal Inheritance: Objects can inherit from other objects, which makes JavaScript so simple, powerful, and great for dynamic applications."
		},
		{
			id:51,
			qsn:"What are the disadvantages of using JavaScript?",
			ans:"JavaScript’s main weakness is security."
		},
		{
			id:52,
			qsn:"How would you empty the array below?  Var emptyArray = [‘this’, ‘array’, ‘is’, ‘full’];",
			ans:"emptyArray.length = 0;   emptyArray.splice(0, emptyArray.length);   while(emptyArray.length){     emptyArray.pop(); }----The easiest method would be to set “emptyArray” equal to “[ ]”—which creates a new empty array. However, if the array is referenced anywhere else, the original array will remain unchanged."
		},
		{
			id:53,
			qsn:"Arrays methods and some tricks",
			ans:"1.Loop over array(forEach()): fruits.forEach(function(item, index, array) {   console.log(item, index); });<br>2.to add/rem elemts at/from end use push and pop respectively.<br>3.Add/rem from front use unshift/shift respectively.<b>In both cases removing an elm returns that elm while in case of adding returns the new length</b><br>4.Slice:Extracts a section of an array and returns a new array.<b>slice does not alter the original array. It returns a shallow copy of elements from the original array. Elements of the original array are copied into the returned array as follows:  <br>For object references (and not the actual object), slice copies object references into the new array. Both the original and new array refer to the same object. If a referenced object changes, the changes are visible to both the new and original arrays. <br>For strings, numbers and booleans (not String, Number and Boolean objects), slice copies the values into the new array. Changes to the string, number or boolean in one array do not affect the other array. <br>If a new element is added to either array, the other array is not affected.</b><br>5.Splice: Adds and/or removes elements from an array.<br>6.map: Creates a new array with the results of calling a provided function on every element in this array.<br>https://www.tutorialspoint.com/javascript/javascript_builtin_functions.htm<br>https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
		},
		{
			id:54,
			qsn:"What Is Currying?",
			ans:"currying is a way of constructing functions that allows partial application of a function’s arguments. What this means is that you can pass all of the arguments a function is expecting and get the result, or pass a subset of those arguments and get a function back that’s waiting for the rest of the arguments. It really is that simple.-----var greetCurried = function(greeting) {   return function(name) {     console.log(greeting + ', ' + name);   }; };---var greetHello = greetCurried('Hello'); greetHello('Heidi'); //'Hello, Heidi'----OR greetCurried('Hi there')('Howard');"
		},
		{
			id:55,
			qsn:"Function expression vs function declaration",
			ans:"Function expression can be used as-- As closures As arguments to other functions As Immediately Invoked Function Expressions (IIFE)...it doesnt make much difference between function declaration"
		},
		{
			id:56,
			qsn:"What is the difference between undefined and not defined in JavaScript?",
			ans:"when we try to access a variable that is declared but not defined yet, we will get the result undefined.e.g--var x; // Declaration if(typeof x === 'undefined') // Will return true----If a variable that is neither declared nor defined, when we try to reference such a variable we'd get the result not defined.  > console.log(y);  // Output: ReferenceError: y is not defined"
		},
		{
			id:57,
			qsn:"What will be the output of the code below?var y = 1;   if (function f(){}) {     y += typeof f;   }   console.log(y);",
			ans:"The output would be 1undefined. The if condition statement evaluates using eval, so eval(function f(){}) returns function f(){} (which is true). Therefore, inside the if statement, executing typeof f returns undefined because the if statement code executes at run time, and the statement inside the if condition is evaluated during run time.But ------var k = 1;   if (1) {     function foo(){};     k += typeof foo;   }   console.log(k); // output 1function"
		},
		{
			id:58,
			qsn:"What is the drawback of creating true private methods in JavaScript?",
			ans:"One of the drawbacks of creating true private methods in JavaScript is that they are very memory-inefficient, as a new copy of the method would be created for each instance."
		},
		{
			id:59,
			qsn:"How do you check if an object is an array or not?",
			ans:"The best way to find out whether or not an object is an instance of a particular class is to use the toString method from Object.prototype:---if( Object.prototype.toString.call( arrayList ) === '[object Array]' ) {     console.log('Array!'); }"
		},
		{
			id:60,
			qsn:"What is undefined x 1 in JavaScript?",
			ans:"'undefined × 1' is just way of displaying an array's uninitialised index in Chrome.e.g----var trees = ['redwood','bay','cedar','oak','maple']; delete trees[3]; into your Chrome developer console, you will get ['redwood', 'bay', 'cedar', undefined × 1, 'maple']"
		},
		{
			id:61,
			qsn:"var bar = true; console.log(bar + 0);   console.log(bar + 'xyz');  console.log(bar + true);  console.log(bar + false);   ",
			ans:"The code will output 1, 'truexyz', 2, 1"
		},
		{
			id:62,
			qsn:"What is the difference between the function declarations below?var foo = function(){     // Some code }; ---function bar(){     // Some code }; ",
			ans:"The main difference is the function foo is defined at run-time whereas function bar is defined at parse time."
		},
		{
			id:63,
			qsn:"Functional Programming",
			ans:"In FP, the code is essentially a combination of functions.Functions are the building blocks of the programming. Moreover, the data is immutable, which leads to writing programs with no side effects. In functional code, a function is not able to change the outside world, and the output value depends only on the given arguments. This allows to keep strong control over the program flow.----Functional: You pass an object to the function and do stuff....OOP: You call function on the object and do stuff"
		},
		{
			id:64,
			qsn:"Pure Functions?",
			ans:"A function is only pure if, given the same input, it will always produce the same output.but if it had side-effects, such as saving the value to disk or logging to the console, you couldn’t simply replace `double(5)` with 10 without changing the meaning.<br>Math.random() is impure"
		},
		{
			id:65,
			qsn:"synchronous vs asynchronous programming",
			ans:"When you execute something synchronously, you wait for it to finish before moving on to another task. When you execute something asynchronously, you can move on to another task before it finishes..Suppose we query in the db then next line will have to wait util the query is finished but in asynchronous programming, we dont have to wait for the query to execute, rather the next line will execute and then when the response comes from the server for query then response will execute"
		},
		{
			id:67,
			qsn:"DI",
			ans:"http://anandmanisankar.com/posts/angularjs-dependency-injection-demystified/"
		},
		{
			id:68,
			qsn:"Most imp",
			ans:"https://www.toptal.com/angular-js/top-18-most-common-angularjs-developer-mistakes<br>https://www.thatjsdude.com/interview/js2.html#objectEquality"
		},
		{
			id:69,
			qsn:"Callbacks",
			ans:"Callbacks, the most widely used functional programming paradigm, are anonymous functions in JavaScript that can be passed as arguments to other functions and can be executed or returned from that function to be executed later.When we pass a callback function as an argument to another function, we only pass the function definition, i.e., we never know when that callback function will execute. The timing of the execution solely depends on the mechanism of the calling function. It is “called back” at some later point of time, hence the name.<br>setTimeout(function() { 	console.log('world'); }, 2000)  console.log('hello');<br>This is one of the simplest example of a callback. We passed an anonymous function as an argument, which simply logs some output on the console to the setTimeout  function. Since it's only the function definition, the function doesn't know when to execute. The execution time is determined by the calling setTimeout  function via the second argument, which determines that it will be executed after 2 seconds. First, the second log statement logs the output to the console and then after two seconds, the log statement in the callback function logs the output."
		},
		{
			id:70,
			qsn:"Memoization",
			ans:"Memoization is an optimization technique that speeds up function execution by storing results of expensive operations and returning the cached results when the same set of inputs occur again. JavaScript objects behave like associative arrays, making it easy to implement memoization in JavaScript. For example, we can convert a recursive factorial function into a memoized factorial function as shown below:<br><code>function memoizeFunction(func) {     <br> var cache = {};      <br>return function() {          <br> var key = arguments[0];          <br> if(cache[key]) {         <br>  return cache[key];           }           else {           <br>var val = func.apply(this, arguments);           <br>cache[key] = val;           <br>return val;          <br> }    <br>  }; }   <br>var fibonacci = memoizeFunction(function(n) {      <br>return (n === 0 || n === 1) ? n : fibonacci(n - 1) + fibonacci(n - 2); });</code>"
		},
		{
			id: 71,
			qsn: "Method Overloading",
			ans: "Method overloading allows multiple methods to have the same name but different arguments. The compiler or interpreter determines which function to call based on the number of arguments passed. Method overloading is not directly supported in JavaScript. But you can achieve something very much like it as shown below:<br>link: https://www.infoworld.com/article/3196070/node-js/10-javascript-concepts-nodejs-programmers-must-master.html"
		},
		{
			id: 72,
			qsn: "let",
			ans:"The let statement declares a block scope local variable, optionally initializing it to a value.let, unlike var, does not create a property on the global object. For example:<br>var x = 'global'; let y = 'global'; console.log(this.x); // 'global' console.log(this.y); // undefined'"
		},
		{
			id: 73,
			qsn: "$watch imp",
			ans:"Watching an Array/object <br>So you need to watch an Array on your scope for changes, but what does “change” mean?  Assuming your controller looks something like this:<br>app.controller('watchDemoCtrl', ['$scope', function($scope){     $scope.letters = ['A','B','C']; }]); <br>one option is using a call like this one:<br>$scope.$watch('letters', function (newValue, oldValue, scope) {     //Do anything with $scope.letters });<br>The point is: when will this listener be called? As a matter of fact, you can add, remove, replace elements in the letters array, and nothing will happen. This is because, by default, $watch assumes you only want referential equality, so only if you assign a new value to $scope.letters will the callback be fired.  If you need to act upon changes to any element of the array, you need to pass true as your third argument to watch (i.e. as the value of the optional objectEquality parameter described above).<br>$scope.$watch('letters', function (newValue, oldValue, scope) {     //Do anything with $scope.letters }, true);<br><b>Watching the Nth Element of an Array</b><br>$scope.$watch('letters[N]', function (newValue, oldValue, scope) {     //... }, true);say for N=4, What if the array has only 2 elements? No problem, your callback won’t be fired until you add a 4th element. Well, OK, technically it will fire when you set up the watch, and then only when you add a fourth element.<br><b>$watchGroup()</b> is a convenient shortcut that allows you to set up many watchers with the same callback, passing an array of watchExpressions.  Each of the expressions passed will be watched using the standard $scope.$watch() method.<br>$scope.$watchGroup(['exp1', 'exp2', 'exp3'], function(newValues, oldValues, scope) {     //...   });<br><b>$watchCollection()</b>:This is another convenient shortcut to watch arrays or objects. For arrays, the listener will be called when any of the elements is replaced, deleted, or added. For objects, when any property is changed. Again, $watchCollection() doesn’t allow objectEquality, so it will only shallow watches elements/fields, and won’t react on changes to their subfields."
		}
		
		
	];
	$scope.gotoTop = function(){
		$location.hash('top');
		// call $anchorScroll()
		$anchorScroll();
	}
	$scope.test1 = function(){
		alert('par')
	}
	$scope.test2 = function(){
		alert('child')
	}
	$scope.showAns = function(id){
		$scope.ansId = id;
		$scope.ansContent = getAns(id);
		$location.hash('content');
		// call $anchorScroll()
		$anchorScroll();
	}
	
	$scope.choseTopic = function(topic){
		$scope.ansContent = "";
		if(angular.equals(topic,"angular")){
			$scope.jsQsns = false;
		}else{
			$scope.jsQsns = true;
		}
	}
	function getAns(qsnId){
		var res = "";
		var qsnArr = [];
		if(!$scope.jsQsns){
			qsnArr = $scope.angQsnAnsObj;
		}else{
			qsnArr = $scope.jsQsnAnsObj;
		}
		//console.log(qsnId,$scope.jsQsns,qsnArr);
		angular.forEach(qsnArr, function(val,key){
			if(val.id == qsnId){
				res = val.ans;
			}
		});
		return res;
	}
  }]);
