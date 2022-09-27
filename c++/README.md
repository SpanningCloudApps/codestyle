# Coding guidelines for C++

## Table of contents

- [`Why do we need guidelines?`](#why-do-we-need-guidelines)
- [`Development ideology`](#development-ideology)
- [`Coding principles`](#coding-principles)
- [`Design principles`](#design-principles)
- [`Formatting and naming`](#formatting-and-naming)
- [`Coding patterns`](#coding-patterns)
- [`Framework usage`](#framework-usage)
- [`Recommended reading`](#recommended-reading)

> _Being able to do something is not sufficient reason for doing it_  
> Bjarne Stroustrup

## Why do we need guidelines

1. Get everyone on the same page
1. Easier to understand code that looks uniformly
1. Share knowledge
1. Use the subset of C++ that is most high-level, less error-prone and less complex (and don't shoot
    yourself in the leg)
1. Compromises for the sake of common team goal

In general, why everything around is getting standardized? Actually, the standard is a set of _restrictions._
Simply speaking, you can't build a large system with a wide variety of low-level subsystems. According to
Sedov's Law, or the Law of hierarchical compensations: _The increase in variety on the upper level of a
hierarchical organization results from the restriction of variety on the lower levels, and inversely –
increase in variety on the lower level, destroys the upper level of an organization._

Thus, the guidelines restrict the variety of low-level subsystems (functions, variables, classes, modules)
for the sake of building a large and complex system (enterprise application).

## Development ideology

1. ### Don't Repeat Yourself (DRY, Single Source of Truth). [ideo.dry]

    The DRY principle is stated as "Every piece of knowledge must have a single, unambiguous,
    authoritative representation within a system." The principle has been formulated by Andy Hunt
    and Dave Thomas in their book The Pragmatic Programmer. They apply it quite broadly to include
    "atabase schemas, test plans, the build system, even documentation." When the DRY principle is
    applied successfully, a modification of any single element of a system does not require a change in
    other logically unrelated elements. Additionally, elements that are logically related all change
    predictably and uniformly, and are thus kept in sync. The principle encourages [Code reuse](
        https://en.wikipedia.org/wiki/Code_reuse)
    and prohibits [Copy and paste programming](https://en.wikipedia.org/wiki/Copy_and_paste_programming)

1. ### Single Responsibility Principle (SRP) [ideo.srp]

    [Single Responsibility Principle (SRP)](https://en.wikipedia.org/wiki/Single_responsibility_principle
    ) states that every class should have a single responsibility,
    and that responsibility should be entirely encapsulated by the class. Also applies to
    functions/methods as well as classes.

1. ### Interface Segregation Principle (ISP) [ideo.isp]

    [Interface Segregation Principle (ISP)](https://en.wikipedia.org/wiki/Interface_segregation_principle
    ) states that no client should be forced to depend on methods
    it does not use. ISP splits interfaces which are very large into smaller and more specific ones so
    that clients will only have to know about the methods that are of interest to them. Such shrunken
    interfaces are also called role interfaces. ISP is intended to keep a system decoupled and thus
    easier to refactor, change, and redeploy.

1. ### Repair Broken Windows [ideo.bwin]

    [The broken windows theory](https://en.wikipedia.org/wiki/Broken_windows_theory
    ) is a criminological theory which states that maintaining and monitoring
    urban environments in a well-ordered condition may stop further vandalism and escalation into more
    serious crime. As for programming, by all means we should repair "broken windows"
    (bad designs, wrong decisions, or poor code) or at least initiate the right change even if it doesn't
    cover the whole problem area.

1. ### Poka Yoke (foolproofness) [ideo.poka]

    [A poka-yoke](https://en.wikipedia.org/wiki/Poka-yoke
    ) (foolproofness, from Japanese: "mistake-proofing")
    is any mechanism in a manufacturing process that helps an equipment operator avoid (yokeru) mistakes
    (poka). Its purpose is to eliminate product defects by preventing, correcting, or drawing attention
    to human errors as they occur. As for programming, we must aim to produce the code/API
    interfaces/UI/etc that has no way to be used incorrectly by other developer (even by yourself
    in future), or by the end-user

1. ### Conceptual Consistency

    Conceptual Consistency in code/interfaces/UI is the key aspect of programming which makes the
    system _predictable_ for its users. This is related to all of the following points -
    variable/name/class/interface/module naming, parameters passing, architecture layering etc. If the
    system is conceptually consistent, user or developer can make an opinion about how things work even
    in the area he doesn't know about just by extrapolating his knowledge about other parts of the system.

1. ### Test-Driven Development [ideo.tdd]

    [Test-Driven Development](https://en.wikipedia.org/wiki/Test-driven_development
    ) is a process when unit test is written prior to writing the code. Thus the
    classes are initially designed in a testable way.

1. ### Code Self-Documentation [ideo.selfdoc]

    Code Self-Documentation is a way of programming when the code itself is self-documented by
    variable/methods names. Closely related to _type-rich programming_. The complex parts of code must
    be commented anyways.

1. ### Occam's Razor [ideo.razor]

    Occam's Razor adopted for programming states that _Entities must not be multiplied beyond necessity_.
    Citing Albert Einstein, _Everything should be made as simple as possible, but not simpler._

1. ### High Cohesion and Loose Coupling [ideo.hclc]

    The important goal of object-oriented design is to have [high cohesion classes and loose coupling](
        https://en.wikipedia.org/wiki/Coupling_(computer_programming))
    between these classes.

1. ### Don't Be Clever. Don't Be Stupid. KISS [ideo.kiss]

    [KISS](https://en.wikipedia.org/wiki/KISS_principle
    ) (aka Simplicity ~~Simplicity Simplicity~~) principle states that if the problem _must_ be solved with
    the easiest solution possible

1. ### Don't Optimize Prematurely. Don't Pessimize Prematurely. Keep Scalability in Mind [ideo.dnopt]

    Don't waste too much time on premature optimizations because this may not be the right place to
    optimize. At the same time, don't introduce complex data structures/algorithms where it may be made
    simpler. Remember that the code you write may be scaled to a higher number of users/connections etc.

1. ### Avoid Doing Unnecessary Things [ideo.unnecs]

    Look at the code with a fresh sight. Are you doing anything that may be omitted?

1. ### Prefer Explicitness over Implicitness [ideo.explicit]

    If intention may be expressed explicitly, it **MUST** be done this way. Implicit stuff complicates
    understanding.

## Coding principles

1. ### Standard compliance

    1. All the code MUST be C++17 standard compliant **[coding.cpp17]**
    1. Prohibited features
        - C library **[coding.cpp17.clib]**
        - C-style cast **[coding.cpp17.ccast]**
        - Functions with variable number of arguments **[coding.cpp17.vararg]**
        - friend (because of high coupling) **[coding.cpp17.friend]**

1. ### Structural

    1. [Don't copy-paste](https://en.wikipedia.org/wiki/Copy_and_paste_programming
        ). Avoid copy-pasting by introducing: **[coding.copypaste]**
        - functions/methods
        - templates
    1. Limit method body length reasonably (as a rule, method shouldn't occupy more than one screen,
        or 40 lines) **[coding.long]**
    1. Don't use macros **[coding.macros]**
        except for the case when the same cannot be easily achieved with other language features
        (functions, templates)
    1. Use #pragma once in h files, not #ifdef guards
    1. Header files should be minimal:
        - Use forward declarations where possible.

            ```c++
            // unique_ptr does not require a complete type for declaration
            class ISessionIterator;
            using ISessionIteratorPtr = std::unique_ptr<ISessionIterator> ;

            // Even templates are forward-declarable!
            template<typename T>
            class IForwardIterator;
            ```

        - Don't include unncessary files.
        - Don't expose implementation-specific details in headers. Consider using pimpl idiom.
    1. Organize #include properly **[coding.include.order]** 
       - Organize #includes alphabetically, separated by a blank line where the path is different.
       - Further organize #includes with the following rules:
         1. Our libraries first, separated by a blank line where the library changes
         2. Header corresponding to the current .cpp file and headers from the same directory as the .cpp file
         3. 3rd party headers
         4. STL headers
         5. Platform specific headers
         6. Use <> for non-project headers, "" for project ones 


        ```c++
        #include "Core/BaseException.h"
        #include "Core/StringAlgorithm.h"

        #include "Utility/Utf8String.h"

        #include "ThisClass.h"

        #include <string>
        #include <unordered_map>

        #include <Windows.h>        ```

    1. Use anonymous namespace for helper classes/functions defined in cpp file
    1. Use "using" directive responsibly:
        - don't use "using" directive in header files to avoid conflicts between different headers included along.
        - don't use "using namespace Namespace" form to avoid pollution of a global namespace.
            Prefer either namespace aliasing or particular type using:

            ```c++
            namespace Alias = Namespace;
            using Namespace::Type;
            ```

    1. Prefer explicitly specifing the namespace over `using namespace` declaration in .cpp files (`std::string` vs `using namespace std`).
    1. Use narrowest scope possible for local variables
    1. Avoid long function bodies, deep cycles and conditional nesting (more than 4)
    1. Minimize global data
    1. Don't use hard-coded magic numbers/constants, refer to named ones instead **[coding.magic]**
    1. Don't leave any unreachable/uncalled code

1. ### Resource management

    1. Avoid dynamic allocation. Don't use it without a reason (polymorphic objects, pImpl, etc).
    1. Don't use raw pointers. Use references or smart pointers instead.
    1. Use smart pointers (unique\_ptr, shared\_ptr) for dynamically allocated objects.
        [Select a correct one by the following rules](
            https://herbsutter.com/2013/05/29/gotw-89-solution-smart-pointers/):
        - **[coding.unique\_ptr]** by default, use unique\_ptr
        - use unique\_ptr for storing dynamic-size arrays (unique\_ptr<Type[]> specialization)
        - use shared\_ptr only if you really need to _share_ ownership and/or altogether with weak\_ptr
    1. Usage of shared\_ptr, unique\_ptr
        - Use std::make\_shared, std::make\_unique for allocating a new smart-pointed object
        - Use appropriate casts for casting shared\_ptr: static\_pointer\_cast
    1. Use [RAII idiom](https://en.wikipedia.org/wiki/Resource_Acquisition_Is_Initialization
        ) for resource management. I.e. use an object to represent a resource:
        - unique\_ptr or shared\_ptr with deleter function or with no deleter at all
        - self-written resource wrappers (scoped objects)
    1. Prefer STL smart pointers over boost counterparts for new code, wherever possible

1. ### File system management

    1. Always cleanup filesystem stuff that is not gonna be used anymore. E.g.:
        - Temporary files after you are done with them
        - Installation package files and files produced by the application during its lifecycle
            (logs etc.) while uninstalling
    1. Treat cleanup errors as non-critical but log them. E.g. backup should not fail if it is impossible
        to remove temporary file
    1. Use RAII for filesystem resources where possible
    1. Do not use public access or user-provided folders directly, create sub-folders instead. E.g. if
        user has specified C: as a temporary file location, put them into C:\%Some subfolder%. Then you
        are safer with cleanup.
    1. Do not remove files/folders recursively. Remove only files/folders you've created (by keeping
        explicit list or using a narrowly specialized mask.

1. ### Types and parameters

    1. Use appropriate null values because it makes the code more readable and demonstrates the
        programmer intention **[coding.types.null]**
        - false for bools
        - 0 for integers
        - 0 for floating-point
        - '\0' for chars
        - nullptr for [smart] pointers

            ```c++
            class MyClass
            {
            public:
                MyClass() :
                    m_paid(false),
                    m_cost(0.0)
                {
                }

                ...

            private:
                bool m_paid;
                double m_cost;
            };

            std::unique_ptr<iterator> it;
            if (it != nullptr)
            {
                DoSomething(*it);
            }
            ```

    1. Use typecasts properly: **[coding.types.cast]**
        - use C++ typecasts because they clearly demonstrate developers intention.
        - don't use C-style casts.
        - don't use reinterpret\_cast / const\_cast by default. Any usage is an exception and must be approved.
    1. Use access specifiers properly: **[coding.member.access]**
        - don't use protected variables because allowing descendants to change class internal state is
            breaking the encapsulation
        - avoid protected methods: use them only if really needed
    1. Pass parameters properly: **[coding.param.pass]**
        - by value for primitive types (integral types, enums)
        - by [const-]reference for classes/structs
        - by reference for output parameters
        - order by intention: first input, then output
        - don't use default parameters for the sake of explicity: they make code maintenance and
            refactoring more difficult **[coding.param.default]**
    1. Avoid anonymous parameters: in functions and function types declarations **[coding.param.anon]**

        ```c++
        typedef std::function<void(SchedulingItem::TaskType const,
            ExtraParameters const&,
            std::int32_t const, std::int32_t)> // BAD: not clear what is passed here
            StartThreadFunction;
        ```

    1. Use const wherever possible: **[coding.types.const]**
        - for local and global variable declarations
        - for member variable declarations
        - for non-primitive parameter passing. Note that there's not much sense to use const for a
            primitive parameter in function declaration, but you _can_ use const in the definition to
            protect from non-intentional modification. Refer to:
            [https://herbsutter.com/2013/05/28/gotw-6b-solution-const-correctness-part-2/](
                https://herbsutter.com/2013/05/28/gotw-6b-solution-const-correctness-part-2/)

            ```c++
            // In Something.h
            void DoSomething(int const number);
            // No sense to put const above, it even doesn't change function signature, but

            // In Something.cpp
            void DoSomething(int const number)
            {
                // OK, protect from non-intentional write to number parameter
            }
            ```

        - for logically const methods. Use mutable if required
        - don't use const for logically non-constant methods

            ```c++
            void DeleteFile(std::string const& filename) const; // const doesn't make sense, sinde method has 'side effects'
            ```

        - don't use const for return type when returning by value e.g.

            ```c++
            Node const GetNodeByPath(); // const doesn't make sense here
            ```
        - avoid const_cast unless you really have to (like interacting with a library that is not const-correct)

    1. Prefer passing the underlying type as an argument instead of passing a reference to a smart pointer. 

1. ### Exceptions [coding.except]

    1. As a rule, use exception only to indicate an error
    1. Each exception must have a non-empty message string. This will ease a possible error case
        investigation in future.
    1. Don't build logic on exceptions **[coding.except.logic]**
        because exceptions are usually slower and less-intuitive than normal code flow. Use exceptions
        only for true _exceptional_ cases
    1. Don't catch (…) in functional code except for rare special cases that must be approved, use `catch (const Something&)`
    1. Pass source location to methods designed to throw on error wherever possible.
    1. Consider `noexcept` specification where appropriate. Don't use C++98 `throw()` modifier.
    1. Follow at least basic exception guarantee from [Abrahams exception guarantees](
        https://en.wikipedia.org/wiki/Exception_safety)

1. ### Construction and destruction

    1. Initialize all members in constructors
    1. Use initializer lists in constructors, **[coding.ctor.ilist]** not assignment in constructor body.
        Always enumerate all members in initializer list in order of declaration.
    1. Declare and define destructor near constructor because they usually do paired things
    1. Use explicit C++ keyword for constructors with one argument
    1. Don't throw from destructor: wrap potentially throwing code in a destructor in a try-catch block
    1. Throw from constructor to express an object initialization failure
    1. If _any_ ctor, dtor or assignment is specified, you must declare all. Use `default` or `delete` appropriately.


1. ### Threading

    1. Use RAII guards for mutexes, prefer `std::lock_guard<std::mutex>` **[coding.mutex]**
    1. Do not use std::recursive\_mutex without a serious reason. **[coding.mutex]**  
        Using of recursive\_mutex is an indication of poor design and must be approved in every
        particular case
    1. Don't use busy wait because it eats up processor time, use synchronization primitives instead,
        e.g. condition variable **[coding.busy\_wait]**

1. ### Comments

    1. Comment complex/unusual parts of code
    1. Don't use redundant/obvious comments
    1. Don't leave the code that is commented out. You can always find previous versions in the version
        control system.

1. ### Various

    1. Prefer function objects (functors) to function pointers
    1. Use sizeof(varname) instead of sizeof(type) whenever possible
    1. Use prefix increment (++i, not i++) due to performance reasons
    1. Consider using 64-bit integers when you work with file/data sizes
    1. Always use type-alias over typedef (`using Something = ...` and not `typedef ... Something`).


## Design principles [design]

1. Interface **[design.iface]**
    1. Interface is a class featured as follows: **[design.iface.feat]**
        - name starts with I
        - all methods are public and pure virtual
        - no member variables
        - mandatory virtual destructor at the bottom of member list
    1. Interface should be minimal but sufficient **[design.iface.min]**
1. Inheritance
    1. Use interfaces to designate abstraction contracts.
    1. Don't inherit from multiple non-interface classes. Inheritance from multiple interfaces is legal.
    1. Prefer aggregation to inheritance because of looser coupling
    1. [Don't inherit from built-in types, STL types (std::string, containers, smart pointers etc.)](
        https://stackoverflow.com/questions/6806173/subclass-inherit-standard-containers), however it's possible to build your exceptions hierarchy on top of std::exception
1. Modularity **[design.module]**
    1. Use modules (projects) to isolate independent but logically common functionality.
    1. Use folders to group files within the module.
    1. Do not put core functionality to executables. Extract it to libraries instead.
    1. Avoid unnecessary dependencies between modules
    1. Do not introduce cyclic dependencies between projects. **[design.module.cyclic]**
    1. Put each public class or struct into a separate file **[design.class.per.file]**
1. Test-driven development (TDD) **[design.tdd]**
    1. Provide unit tests for code that does not require environment
    1. Design your code to be unit-testable.
    1. Use Mock objects
    1. Try to keep unit test not time-consuming
    1. Unit tests must have determinate behavior
    1. [Follow F.I.R.S.T. approach for unit tests](https://medium.com/@tasdikrahman/f-i-r-s-t-principles-of-testing-1a497acda8d6)
    1. Create separate unit-test module for every library module
    1. Place unit test in a "Test" namespace (`Kaseya::Something::Test`)

## Platform specific issues

1. ### Platform specifics

    1. Awoid using `#ifdef platform` inline
    1. Place platform specific functionality in separate files
    1. Only include platform specific files for that specific platform in CMakeLists.txt.
    1. At the top of a platform specific .cpp file, include a similar  compile-guard:
    
    ```
    #ifndef KASEYA_WINDOWS
        #pragma error("This file must only be compiled on the Windows platform")
    #endif
    ```
    1. Identify platform specific files appropriately by appending the platform name at the end (`NetworkInterfaceLinux.cpp`)
    1. Platforms are named as follows:
        * "Windows", "Linux", "Mac" if intended specifically for that platform.
        * "Unix" if intended for any Unix-like system or Posix compliant system.
    7. Use exact length types `std::uint8_t` and friends where exact length is relevant.


## Build tools
1. ### CMake
    1. List files in CMakeLists.txt alphabetically
    1. Include platform-specific file for the target system only
    1. Define global platform-specific macro within CMakeLists.txt

## Formatting and naming

1. ### Formatting [fmt]

    1. Tabs are prohibited in source files. Indentation size is 4 spaces. Configure your Editor/IDE for this.
    1. Preprocessor directives
        1. The hash mark that starts a preprocessor directive should always be at the beginning of the line
        1. There must not be a space after hashmark:

            ```c++
            #if ENABLE_GOD_MODE // OK
                WalkThroughWalls();
            # if ENABLE_BLACK_MAGIC // Wrong -- spaces after #
                InvokeEvil();
            # endif // ENABLE_BLACK_MAGIC // Wrong -- spaces after #
            #endif // ENABLE_GOD_MODE // OK
            ```

        1. After **#endif** put on same line comment with argument of **#if** /  **#ifdef** /  **#ifndef** directive:

            ```c++
            #ifndef DISABLE_BUGS
                EnableBugs();
            #endif // Wrong! -- no comment with argument of #ifndef directive

            #ifdef WINTER
                CloseWindow();
            #endif // WINTER // OK
            ```

    1. Namespace doesn't imply an extra indentation. After closing bracket put on same line comment
        with namespace name. Wrap your code into namespace `Kaseya`. Also place namespace declaration on one line including brace (`namespace Kaseya {`)

        ```c++
        namespace N
        {
            class A; // Wrong!
        } // namespace N

        namespace Kaseya {
        namespace N {
        class A; // OK
        } // namespace N
        } // namespace Kaseya
        ```

    1. Function calls. Spaces after '(' or before ')' in the parameter lists of function calls must be
        avoided. One space must be used between function parameters, placed after each comma
        separating the parameters, in declarations and calls. The same applies to operators,
        constructors and catch blocks:

        ```c++
        void DoSomething(Type1 param1, Type2 param2);

        int const sum = a + b; // Note spaces around = and +

        try
        {
            DoSomethingThrowing();
        }
        catch (std::exception const& e) // Note a space after catch
        {
            // Report error.
        }
        ```

    1. **[fmt.braces]** Braces must be used around each control block, even if consists of a single line:

        ```c++
        if (conditional1)
        {
            DoSomething1();
        }
        else
        {
            DoSomethingElse1();
            DoSomethingElse2();
        }

        while (conditional2)
        {
            if (conditional3)
            {
                DoSomething2();
            }
        }
        ```
        
        - One-line lambdas are OK (`auto shortLambda = [] { something };`)
        - Namespaces are excepted

    1. Curly braces should always be on a new line.
    1. if, for, while and switch should have spaces after the keyword and opening parenthesis (`while (...)` and not `while(...)`).
    1. Member order in class declaration:
        - constructor/destructor
        - own public methods
        - public or private overriden methods
        - own private methods
        - private member variables (with a separate private section for readability)

            ```c++
            class TransactionConveyor : public ITransactionConveyor
            {
            public:
                // Construction/destruction.
                TransactionConveyor(ConveyorItem const& item, TimeUnit const& stopTimeout);
                ~TransactionConveyor() override;

                // Own public methods.
                void Start();

            private:
                // Overriden methods. Private by default.
                void PushItem(ConveyorItem const& item) override;
                ConveyorItem PopItem() override;

            private:
                // Private member variables.
                ConveyorItem m_item;
                TimeUnit const m_stopTimeout;
            };
            ```

    1. Member order in struct declaration:
        - public variables
        - public static variables
        - constructor/destructor
        - own public methods
        - own private methods

            ```c++
            struct StorageInfo
            {
                Optional<int> Id;
                Optional<int> LocationId;
                Optional<int> ActiveAccounts;
                Optional<int> TotalAccounts;

                StorageCommonInfo CommonInfo;
                StorageStateInfo StateInfo;
                StorageModeInfo ModeInfo;

                StorageInfo();

                bool IsSecuredFtp() const;
            };
            ```

    1. **[fmt.ctor.init]** Constructor initialization list must be aligned as follows:

        ```c++
        TransactionConveyor::TransactionConveyor(ConveyorItem const& item,
            TimeUnit const& stopTimeout) :
            m_item(item),
            m_stopTimeout(stopTimeout)
        {
        }
        ```

    1. **[fmt.override] override** keyword must be used in derived class for methods inherited from base
        classes (interfaces).  
        This improves code readability and helps to understand design intentions.
    1. **[fmt.const]** Align **const** to the right of the type in declarations.  
        This simplifies human reading of complex declarations from right to left like "constant string"
        or "reference to a constant string" for these examples:

        ```c++
        std::string const s1 = "Code complete";
        std::string const& s2 = s1;
        ```
    1. Put type modifiers &&, & and * _together_ with the type (`std::string& s` vs `std::string &s`).
    1. Switch statements
        1. Do not include `default:` if all cases are handled.
        2. `case` labels are indented one level from `switch` opening brace.
        ```
        switch (something)
        {
            case MyCase:
            {
            }
        }
        ```

1. ### Case [fmt.case]

    1. Source file names are PascalCased e.g:  
        ```VirtualDisk.h, SomeHelper.cpp```
    1. Namespaces are PascalCased e.g:  
        ```MySql, RansomwareApi```
    1. Classes and structs are PascalCased e.g:  
        ```BackupProcessor, TransactionCoordinator```
    1. Functions and methods are PascalCased e.g:  
        ```EnumerateAccounts, StartProcessing```
    1. Local variables are camelCased e.g.:  
        ```expirationTimeout, finalizationRequest```
    1. Parameters are camelCased. Parameter name must be provided or commented out.  
        ```void Foonction(Type1 param1, Type2 /\*param2IsNotUsed\*/);```
    1. Member variables
        - Private non-static member variables are m\_camelCased e.g.:  
            ```m_nodeType, m_executionQueue```
        - Public variables (both static and non-static) are PascalCased e.g.  
            ```Node::Type, ProductManager::DefaultProductName```
    1. Global variables
        - Const global variables are PascalCased e.g.  
            ```RootPartnerName```
        - Non-const global variables are g\_camelCased e.g.  
            ```g_shutdownRequested, g_threads```
    1. Abbreviations are PascalCased, if have 3+ characters, if 2 - uppercased, e.g. IO, Http, Xml, Uri etc. **[fmt.abbr]**
    1. `Id` and `Ok` are abbreviations, not acronyms (e.g. `scheduleId` and not `scheduleID`).

1. ### Naming [naming]

    1. Name must reflect code entity responsibility and should be relevant to usage context **[naming.relevance]**
    1. Names must be written in English **[naming.english]**
    1. Name must be a correct phrase compound of full words except for well-known abbreviations
        (e.g. Http, Xml, Ptr etc.) **[naming.correct]**
        - classes and variable names should be noun-based e.g.  
            ```trialsCount, processedNodeIndex, archivedSlice```
        - Function names should be verb-based e.g.  
            ```ProcessNode, BeginTransaction, AddPartner```
    1. Identifiers should contain only English alphabet letters ('a'-'z', 'A'-'Z'), digits (0-9) and
        underscore (for m\_, s\_, g\_ prefixes only) **[naming.correct]**
    1. Hungarian notation is prohibited except m\_ prefix. **[naming.hung]**  
        E.g. no type/pointer/reference prefixes allowed (e.g. rNumberOfItems, pAccountName, iCount are
        invalid identifiers)
    1. Do *not* use prefixes for class names
    1. ...with the exception of interfaces (`ITaskManager`)
    1. End derived class names with the interface (`ITaskManager` -> `EndpointTaskManager`).
    1. When naming user-configurable parameters (e.g. in config.ini) that have some measurement units,
        include these units into the name to minimize human errors e.g. **[naming.unit\_human]**

        ```ini
        CheckPeriodicityInSeconds=60
        CacheSizeInMb=500
        ```

## Coding patterns [pat]

1. [Hidden implementation (pimpl) idiom](https://c2.com/cgi/wiki?PimplIdiom
    ) used to hide implementation details in cpp file and don't expose
    it in header file. Use unique\_ptr to store pointer to the implementation.
1. [Null object pattern](https://en.wikipedia.org/wiki/Null_Object_pattern
    ) used to express a "degenerate" conditional statements
1. Resource management patterns
    - [unique\_ptr with deleter](
        https://www.codeproject.com/Tips/459832/Unique_ptr-custom-deleters-and-class-factories)
1. Avoid singletons. Use them only for non-business logic code (e.g. Logger, Audit etc.) or some other
    exceptional cases only after approval.

## Framework usage [fram]

1. Enums (including Undefined/First, Max/Count) **[fram.enum]**
1. Rich types **[fram.rich]**
1. Logging framework **[fram.log]**
    - Logging level can be configured
    - _Debug_ - any technical information that may become useful for problem investigation. Provide
        essential details. Avoid being too verbose.
    - _Warning_ - expected errors that normally may occur during application functioning and are correctly
        handled by the code.
    - _Error_ - unexpected errors, something that should "never happen" (kind of a run-time assert
        in release build). Gets reported to the ErrorTracker and can be analyzed later.
    - _Log_ - significant application lifetime events, e.g. start, stop etc.
1. Before implementing or "borrowing" new functionality ensure that it is not already implemented
    in the existing/used code in the following order: **[fram.newfunc]**
    - Lookup in the Framework
    - Lookup in the Standard and STL
    - Lookup in Boost
    - Lookup in our other External libraries
    - Lookup in System API
    - Lookup in other Thirdparty libraries

## Projects on disk

1. The project structure should be well organized on disk.
2. Minimize header includes for compile performance.
    - Do not include headers in other headers unless absolutely necessary.
3. New test projects should use "." in the directory and project name (`Audit.Test` vs `AuditTest`).

## The ISO CPP core guidlines
https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines

## Recommended reading

- Object-Oriented Analysis and Design with Applications / Grady Booch
- Design Patterns: Elements of Reusable Object-Oriented Software / Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides
- Code Complete: A Practical Handbook of Software Construction / Steve McConnell
- The Pragmatic Programmer / David Thomas, Andrew Hunt 
- Refactoring / Martin Fowler
- The Mythical Man-Month /  Frederick Brooks Jr.
- C++ Concurrency in Action / Anthony Williams
- Effective C++: 55 Specific Ways to Improve Your Programs and Designs / Scott Meyers
- More Effective C++: 35 New Ways to Improve Your Programs and Designs / Scott Meyers
- Effective Modern C++: 42 Specific Ways to Improve Your Use of C++11 and C++14 / Scott Meyers
- Effective STL: 50 Specific Ways to Improve Your Use of the Standard Template Library / Scott Meyers
- The C++ Programming Language / Bjarne Stroustrup
- 