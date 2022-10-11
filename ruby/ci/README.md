# Ruby Style Guide

This is Kaseya's Ruby Style Guide.

It was inspired by [GitHub's guide](https://web.archive.org/web/20160410033955/https://github.com/styleguide/ruby) and [RuboCop's guide][rubocop-guide].

## Table of Contents

  1. [Whitespace](#whitespace)
      1. [Indentation](#indentation)
      1. [Inline](#inline)
      1. [Newlines](#newlines)
  1. [Line Length](#line-length)
  1. [Commenting](#commenting)
      1. [File/class-level comments](#fileclass-level-comments)
      1. [Function comments](#function-comments)
      1. [Block and inline comments](#block-and-inline-comments)
      1. [Punctuation, spelling, and grammar](#punctuation-spelling-and-grammar)
      1. [TODO comments](#todo-comments)
      1. [Commented-out code](#commented-out-code)
  1. [Methods](#methods)
      1. [Method definitions](#method-definitions)
      1. [Method calls](#method-calls)
  1. [Conditional Expressions](#conditional-expressions)
      1. [Conditional keywords](#conditional-keywords)
      1. [Ternary operator](#ternary-operator)
  1. [Syntax](#syntax)
  1. [Naming](#naming)
  1. [Time](#time)
  1. [Classes](#classes)
  1. [Exceptions](#exceptions)
  1. [Collections](#collections)
  1. [Strings](#strings)
  1. [Regular Expressions](#regular-expressions)
  1. [Percent Literals](#percent-literals)
  1. [Rails](#rails)
      1. [Scopes](#scopes)
  1. [Tests](#tests)
  1. [Be Consistent](#be-consistent)
  1. [Translation](#translation)

## Whitespace

### Indentation

* Use soft-tabs with a two-space indent.

* Indent `when` as deep as `case`.

    ```ruby
    case
    when song.name == 'Misty'
      puts 'Not again!'
    when song.duration > 120
      puts 'Too long!'
    when Time.now.hour > 21
      puts "It's too late"
    else
      song.play
    end

    kind = case year
           when 1850..1889 then 'Blues'
           when 1890..1909 then 'Ragtime'
           when 1910..1929 then 'New Orleans Jazz'
           when 1930..1939 then 'Swing'
           when 1940..1950 then 'Bebop'
           else 'Jazz'
           end
    ```

* Align function parameters either all on
    the same line or one per line.

    ```ruby
    # bad
    def self.create_translation(phrase_id, phrase_key, target_locale,
                                value, user_id, do_xss_check, allow_verification)
      ...
    end

    # good
    def self.create_translation(phrase_id,
                                phrase_key,
                                target_locale,
                                value,
                                user_id,
                                do_xss_check,
                                allow_verification)
      ...
    end

    # good
    def self.create_translation(
      phrase_id,
      phrase_key,
      target_locale,
      value,
      user_id,
      do_xss_check,
      allow_verification
    )
      ...
    end
    ```

* Indent succeeding lines in multi-line
    boolean expressions.

    ```ruby
    # bad
    def is_eligible?(user)
      Trebuchet.current.launch?(ProgramEligibilityHelper::PROGRAM_TREBUCHET_FLAG) &&
      is_in_program?(user) &&
      program_not_expired
    end

    # good
    def is_eligible?(user)
      Trebuchet.current.launch?(ProgramEligibilityHelper::PROGRAM_TREBUCHET_FLAG) &&
        is_in_program?(user) &&
        program_not_expired
    end
    ```

### Inline

* Never leave trailing whitespace.

* When making inline comments, include a
    space between the end of the code and the start of your comment.

    ```ruby
    # bad
    result = func(a, b)# we might want to change b to c

    # good
    result = func(a, b) # we might want to change b to c
    ```

* Use spaces around operators; after commas,
    colons, and semicolons; and around `{` and before `}`.

    ```ruby
    sum = 1 + 2
    a, b = 1, 2
    1 > 2 ? true : false; puts 'Hi'
    [1, 2, 3].each { |e| puts e }
    ```

* Never include a space before a comma.

    ```ruby
    result = func(a, b)
    ```

* Do not include space inside block
    parameter pipes. Include one space between parameters in a block.
    Include one space outside block parameter pipes.

    ```ruby
    # bad
    {}.each { | x,  y |puts x }

    # good
    {}.each { |x, y| puts x }
    ```

* Do not leave space between `!` and its
    argument.

    ```ruby
    # bad
    ! something
    
    # good
    !something
    ```

* No spaces after `(`, `[` or before `]`, `)`.

    ```ruby
    # bad
    some( arg ).other
    [ 1, 2, 3 ].length

    # good
    some(arg).other
    [1, 2, 3].length
    ```

* Omit whitespace when doing
    string interpolation.

    ```ruby
    # bad
    var = "This #{ foobar } is interpolated."

    # good
    var = "This #{foobar} is interpolated."
    ```

* Don't use extra whitespace in range
    literals.

    ```ruby
    # bad
    (0 ... coll).each do |item|

    # good
    (0...coll).each do |item|
    ```

### Newlines

* Add a new line after `if` conditions spanning
    multiple lines to help differentiate between the conditions and the body.

    ```ruby
    if @reservation_alteration.checkin == @reservation.start_date &&
       @reservation_alteration.checkout == (@reservation.start_date + @reservation.nights)

      redirect_to_alteration @reservation_alteration
    end
    ```

* Add a new line after conditionals,
    blocks, case statements, etc.

    ```ruby
    if robot.is_awesome?
      send_robot_present
    end

    robot.add_trait(:human_like_intelligence)
    ```

* Don’t include newlines between areas
    of different indentation (such as around class or module bodies).

    ```ruby
    # bad
    class Foo

      def bar
        # body omitted
      end

    end

    # good
    class Foo
      def bar
        # body omitted
      end
    end
    ```

* Include one, but no more than one, new
    line between methods.

    ```ruby
    def a
    end

    def b
    end
    ```

* Use a single empty line to break between
    statements to break up methods into logical paragraphs internally.

    ```ruby
    def transformorize_car
      car = manufacture(options)
      t = transformer(robot, disguise)

      car.after_market_mod!
      t.transform(car)
      car.assign_cool_name!

      fleet.add(car)
      car
    end
    ```

* End each file with a newline. Don't include
    multiple newlines at the end of a file.

## Line Length

* Keep each line of code to a readable length. Unless
  you have a reason to, keep lines to fewer than 100 characters.
  
## Commenting

> Though a pain to write, comments are absolutely vital to keeping our code
> readable. The following rules describe what you should comment and where. But
> remember: while comments are very important, the best code is
> self-documenting. Giving sensible names to types and variables is much better
> than using obscure names that you must then explain through comments.
>
> When writing your comments, write for your audience: the next contributor who
> will need to understand your code. Be generous — the next one may be you!

&mdash;[Google C++ Style Guide][google-c++]

Portions of this section borrow heavily from the Google
[C++][google-c++-comments] and [Python][google-python-comments] style guides.

### File/class-level comments

Every class definition should have an accompanying comment that describes what
it is for and how it should be used.

A file that contains zero classes or more than one class should have a comment
at the top describing its contents.

```ruby
# Automatic conversion of one locale to another where it is possible, like
# American to British English.
module Translation
  # Class for converting between text between similar locales.
  # Right now only conversion between American English -> British, Canadian,
  # Australian, New Zealand variations is provided.
  class PrimAndProper
    def initialize
      @converters = { :en => { :"en-AU" => AmericanToAustralian.new,
                               :"en-CA" => AmericanToCanadian.new,
                               :"en-GB" => AmericanToBritish.new,
                               :"en-NZ" => AmericanToKiwi.new,
                             } }
    end

  ...

  # Applies transforms to American English that are common to
  # variants of all other English colonies.
  class AmericanToColonial
    ...
  end

  # Converts American to British English.
  # In addition to general Colonial English variations, changes "apartment"
  # to "flat".
  class AmericanToBritish < AmericanToColonial
    ...
  end
```

All files, including data and config files, should have file-level comments.

```ruby
# List of American-to-British spelling variants.
#
# This list is made with
# lib/tasks/list_american_to_british_spelling_variants.rake.
#
# It contains words with general spelling variation patterns:
#   [trave]led/lled, [real]ize/ise, [flav]or/our, [cent]er/re, plus
# and these extras:
#   learned/learnt, practices/practises, airplane/aeroplane, ...

sectarianizes: sectarianises
neutralization: neutralisation
...
```

### Function comments

Every function declaration should have comments immediately preceding it that
describe what the function does and how to use it. These comments should be
descriptive ("Opens the file") rather than imperative ("Open the file"); the
comment describes the function, it does not tell the function what to do. In
general, these comments do not describe how the function performs its task.
Instead, that should be left to comments interspersed in the function's code.

Every function should mention what the inputs and outputs are, unless it meets
all of the following criteria:

* not externally visible
* very short
* obvious

You may use whatever format you wish. In Ruby, two popular function
documentation schemes are [TomDoc](http://tomdoc.org/) and
[YARD](https://rubydoc.info/docs/yard/file/docs/GettingStarted.md). You can also
just write things out concisely:

```ruby
# Returns the fallback locales for the_locale.
# If opts[:exclude_default] is set, the default locale, which is otherwise
# always the last one in the returned list, will be excluded.
#
# For example:
#   fallbacks_for(:"pt-BR")
#     => [:"pt-BR", :pt, :en]
#   fallbacks_for(:"pt-BR", :exclude_default => true)
#     => [:"pt-BR", :pt]
def fallbacks_for(the_locale, opts = {})
  ...
end
```

### Block and inline comments

The final place to have comments is in tricky parts of the code. If you're
going to have to explain it at the next code review, you should comment it now.
Complicated operations get a few lines of comments before the operations
commence. Non-obvious ones get comments at the end of the line.

```ruby
def fallbacks_for(the_locale, opts = {})
  # dup() to produce an array that we can mutate.
  ret = @fallbacks[the_locale].dup

  # We make two assumptions here:
  # 1) There is only one default locale (that is, it has no less-specific
  #    children).
  # 2) The default locale is just a language. (Like :en, and not :"en-US".)
  if opts[:exclude_default] &&
      ret.last == default_locale &&
      ret.last != language_from_locale(the_locale)
    ret.pop
  end

  ret
end
```

On the other hand, never describe the code. Assume the person reading the code
knows the language (though not what you're trying to do) better than you do.

Related: do not use block comments. They cannot
  be preceded by whitespace and are not as easy to spot as regular comments.

  ```ruby
  # bad
  =begin
  comment line
  another comment line
  =end

  # good
  # comment line
  # another comment line
  ```

### Punctuation, spelling and grammar

Pay attention to punctuation, spelling, and grammar; it is easier to read
well-written comments than badly written ones.

Comments should be as readable as narrative text, with proper capitalization
and punctuation. In many cases, complete sentences are more readable than
sentence fragments. Shorter comments, such as comments at the end of a line of
code, can sometimes be less formal, but you should be consistent with your
style.

Although it can be frustrating to have a code reviewer point out that you are
using a comma when you should be using a semicolon, it is very important that
source code maintain a high level of clarity and readability. Proper
punctuation, spelling, and grammar help with that goal.

### TODO comments

Use TODO comments for code that is temporary, a short-term solution, or
good-enough but not perfect.

TODOs should include the string TODO in all caps, followed by the full name
of the person who can best provide context about the problem referenced by the
TODO, in parentheses. A colon is optional. A comment explaining what there is
to do is required. The main purpose is to have a consistent TODO format that
can be searched to find the person who can provide more details upon request.
A TODO is not a commitment that the person referenced will fix the problem.
Thus when you create a TODO, it is almost always your name that is given.

```ruby
  # bad
  # TODO(RS): Use proper namespacing for this constant.

  # bad
  # TODO(drumm3rz4lyfe): Use proper namespacing for this constant.

  # good
  # TODO(Ringo Starr): Use proper namespacing for this constant.
```

### Commented-out code

* Never leave commented-out code in our codebase.

## Methods

### Method definitions

* Use `def` with parentheses when there are
    parameters. Omit the parentheses when the method doesn't accept any
    parameters.

     ```ruby
     def some_method
       # body omitted
     end

     def some_method_with_parameters(arg1, arg2)
       # body omitted
     end
     ```

* Do not use default positional arguments.
    Use keyword arguments (if available - in Ruby 2.0 or later) or an options
    hash instead.

    ```ruby
    # bad
    def obliterate(things, gently = true, except = [], at = Time.now)
      ...
    end

    # good
    def obliterate(things, gently: true, except: [], at: Time.now)
      ...
    end

    # good
    def obliterate(things, options = {})
      options = {
        :gently => true, # obliterate with soft-delete
        :except => [], # skip obliterating these things
        :at => Time.now, # don't obliterate them until later
      }.merge(options)

      ...
    end
    ```

* Avoid single-line methods. Although
    they are somewhat popular in the wild, there are a few peculiarities about
    their definition syntax that make their use undesirable.

    ```ruby
    # bad
    def too_much; something; something_else; end

    # good
    def some_method
      # body
    end
    ```

### Method calls

**Use parentheses** for a method call:

* If the method returns a value.

    ```ruby
    # bad
    @current_user = User.find_by_id 1964192

    # good
    @current_user = User.find_by_id(1964192)
    ```

* If the first argument to the method uses
    parentheses.

    ```ruby
    # bad
    put! (x + y) % len, value

    # good
    put!((x + y) % len, value)
    ```

* Never put a space between a method name and
    the opening parenthesis.

    ```ruby
    # bad
    f (3 + 2) + 1

    # good
    f(3 + 2) + 1
    ```

* **Omit parentheses** for a method call if the
    method accepts no arguments.

    ```ruby
    # bad
    nil?()

    # good
    nil?
    ```

* If the method doesn't return a value (or we
    don't care about the return), parentheses are optional. (Especially if the
    arguments overflow to multiple lines, parentheses may add readability)

    ```ruby
    # okay
    render(:partial => 'foo')

    # okay
    render :partial => 'foo'
    ```

In either case:

* If a method accepts an options hash as the
    last argument, do not use `{` `}` during invocation.

    ```ruby
    # bad
    get '/v1/reservations', { :id => 54875 }

    # good
    get '/v1/reservations', :id => 54875
    ```

## Conditional Expressions

### Conditional keywords

* Never use `then` for multi-line `if/unless`.

    ```ruby
    # bad
    if some_condition then
      ...
    end

    # good
    if some_condition
      ...
    end
    ```

* Never use `do` for multi-line `while` or
    `until`.

    ```ruby
    # bad
    while x > 5 do
      ...
    end

    until x > 5 do
      ...
    end

    # good
    while x > 5
      ...
    end

    until x > 5
      ...
    end
    ```

* The `and`, `or`, and `not` keywords are banned. It's
    just not worth it. Always use `&&`, `||`, and `!` instead.

    ```ruby
    # bad
    if(x and y)
    end

    if(x or y)
    end

    if not(x)
    end

    # good
    if x && y
    end

    if x || y
    end

    if !(x)
    end
    ```

* Modifier `if/unless` usage is okay when
    the body is simple, the condition is simple, and the whole thing fits on
    one line. Otherwise, avoid modifier `if/unless`.

    ```ruby
    # bad - this doesn't fit on one line
    add_trebuchet_experiments_on_page(request_opts[:trebuchet_experiments_on_page]) if request_opts[:trebuchet_experiments_on_page] && !request_opts[:trebuchet_experiments_on_page].empty?

    # okay
    if request_opts[:trebuchet_experiments_on_page] &&
         !request_opts[:trebuchet_experiments_on_page].empty?

      add_trebuchet_experiments_on_page(request_opts[:trebuchet_experiments_on_page])
    end

    # bad - this is complex and deserves multiple lines and a comment
    parts[i] = part.to_i(INTEGER_BASE) if !part.nil? && [0, 2, 3].include?(i)

    # okay
    return if reconciled?
    ```

* Never use `unless` with `else`. Rewrite
    these with the positive case first.

    ```ruby
    # bad
    unless success?
      puts 'failure'
    else
      puts 'success'
    end

    # good
    if success?
      puts 'success'
    else
      puts 'failure'
    end
    ```

* Avoid `unless` with multiple
    conditions.

    ```ruby
      # bad
      unless foo? && bar?
        ...
      end

      # okay
      if !(foo? && bar?)
        ...
      end
    ```

* Avoid `unless` with comparison operators if you can use `if` with an opposing comparison operator.

    ```ruby
      # bad
      unless x == 10
        ...
      end

      # good
      if x != 10
        ...
      end

      # bad
      unless x < 10
        ...
      end

      # good
      if x >= 10
        ...
      end

      # ok
      unless x === 10
        ...
      end
    ```

* Don't use parentheses around the
    condition of an `if/unless/while`.

    ```ruby
    # bad
    if (x > 10)
      ...
    end

    # good
    if x > 10
      ...
    end

    ```

### Ternary operator

* Avoid the ternary operator (`?:`) except
    in cases where all expressions are extremely trivial. However, do use the
    ternary operator(`?:`) over `if/then/else/end` constructs for single line
    conditionals.

    ```ruby
    # bad
    result = if some_condition then something else something_else end

    # good
    result = some_condition ? something : something_else
    ```

* Use one expression per branch in a ternary
    operator. This also means that ternary operators must not be nested. Prefer
    `if/else` constructs in these cases.

    ```ruby
    # bad
    some_condition ? (nested_condition ? nested_something : nested_something_else) : something_else

    # good
    if some_condition
      nested_condition ? nested_something : nested_something_else
    else
      something_else
    end
    ```

* Avoid multiple conditions in ternaries.
    Ternaries are best used with single conditions.

* Avoid multi-line `?:` (the ternary
    operator), use `if/then/else/end` instead.

    ```ruby
    # bad
    some_really_long_condition_that_might_make_you_want_to_split_lines ?
      something : something_else

    # good
    if some_really_long_condition_that_might_make_you_want_to_split_lines
      something
    else
      something_else
    end
    ```

### Nested conditionals

* Avoid the use of nested conditionals for flow of control.
  ([More on this][avoid-else-return-early])

  Prefer a guard clause when you can assert invalid data. A guard clause
  is a conditional statement at the top of a function that returns as soon
  as it can.

  The general principles boil down to:
  * Return immediately once you know your function cannot do anything more.
  * Reduce nesting and indentation in the code by returning early. This makes
  the code easier to read and requires less mental bookkeeping on the part
  of the reader to keep track of `else` branches.
  * The core or most important flows should be the least indented.

  ```ruby
  # bad
  def compute
    server = find_server
    if server
      client = server.client
      if client
        request = client.make_request
        if request
           process_request(request)
        end
      end
    end
  end

  # good
  def compute
    server = find_server
    return unless server
    client = server.client
    return unless client
    request = client.make_request
    return unless request
    process_request(request)
  end
  ```

  Prefer `next` in loops instead of conditional blocks.

  ```ruby
  # bad
  [0, 1, 2, 3].each do |item|
    if item > 1
      puts item
    end
  end

  # good
  [0, 1, 2, 3].each do |item|
    next unless item > 1
    puts item
  end
  ```

  See also the section "Guard Clause", p68-70 in Beck, Kent.
  *Implementation Patterns*. Upper Saddle River: Addison-Wesley, 2008, which
  has inspired some of the content above.

## Syntax

* Never use `for`, unless you know exactly why. Most of the
    time iterators should be used instead. `for` is implemented in terms of
    `each` (so you're adding a level of indirection), but with a twist - `for`
    doesn't introduce a new scope (unlike `each`) and variables defined in its
    block will be visible outside it.

    ```ruby
    arr = [1, 2, 3]

    # bad
    for elem in arr do
      puts elem
    end

    # good
    arr.each { |elem| puts elem }
    ```

* Prefer `{...}` over `do...end` for
    single-line blocks.  Avoid using `{...}` for multi-line blocks (multiline
    chaining is always ugly). Always use `do...end` for "control flow" and
    "method definitions" (e.g. in Rakefiles and certain DSLs).  Avoid `do...end`
    when chaining.

    ```ruby
    names = ["Bozhidar", "Steve", "Sarah"]

    # good
    names.each { |name| puts name }

    # bad
    names.each do |name| puts name end

    # good
    names.each do |name|
      puts name
      puts 'yay!'
    end

    # bad
    names.each { |name|
      puts name
      puts 'yay!'
    }

    # good
    names.select { |name| name.start_with?("S") }.map { |name| name.upcase }

    # bad
    names.select do |name|
      name.start_with?("S")
    end.map { |name| name.upcase }
    ```

    Some will argue that multiline chaining would look okay with the use of
    `{...}`, but they should ask themselves if this code is really readable and
    whether the block's content can be extracted into nifty methods.

* Use shorthand self assignment operators
    whenever applicable.

    ```ruby
    # bad
    x = x + y
    x = x * y
    x = x ** y
    x = x / y
    x = x || y
    x = x && y

    # good
    x += y
    x *= y
    x **= y
    x /= y
    x ||= y
    x &&= y
    ```

* Avoid semicolons except for in single line class
    definitions. When it is appropriate to use a semicolon, it should be
    directly adjacent to the statement it terminates: there should be no
    space before the semicolon.

    ```ruby
    # bad
    puts 'foobar'; # superfluous semicolon
    puts 'foo'; puts 'bar' # two expressions on the same line

    # good
    puts 'foobar'

    puts 'foo'
    puts 'bar'

    puts 'foo', 'bar' # this applies to puts in particular
    ```

* Use :: only to reference constants(this includes
    classes and modules) and constructors (like Array() or Nokogiri::HTML()).
    Do not use :: for regular method invocation.

    ```ruby
    # bad
    SomeClass::some_method
    some_object::some_method

    # good
    SomeClass.some_method
    some_object.some_method
    SomeModule::SomeClass::SOME_CONST
    SomeModule::SomeClass()
    ```

* Avoid `return` where not required.

    ```ruby
    # bad
    def some_method(some_arr)
      return some_arr.size
    end

    # good
    def some_method(some_arr)
      some_arr.size
    end
    ```

* Don't use the return value of `=` in
    conditionals.

    ```ruby
    # bad - shows intended use of assignment
    if (v = array.grep(/foo/))
      ...
    end

    # bad
    if v = array.grep(/foo/)
      ...
    end

    # good
    v = array.grep(/foo/)
    if v
      ...
    end

    ```

* Use `||=` freely to initialize variables.

    ```ruby
    # set name to Bozhidar, only if it's nil or false
    name ||= 'Bozhidar'
    ```

* Don't use `||=` to initialize boolean
    variables. (Consider what would happen if the current value happened to be
    `false`.)

    ```ruby
    # bad - would set enabled to true even if it was false
    enabled ||= true

    # good
    enabled = true if enabled.nil?
    ```

* Use `.call` explicitly when calling lambdas.

    ```ruby
    # bad
    lambda.(x, y)

    # good
    lambda.call(x, y)
    ```

* Avoid using Perl-style special variables (like
    `$0-9`, `$`, etc. ). They are quite cryptic and their use in anything but
    one-liner scripts is discouraged. Prefer long form versions such as
    `$PROGRAM_NAME`.

* When a method block takes only one
    argument, and the body consists solely of reading an attribute or calling
    one method with no arguments, use the `&:` shorthand.

    ```ruby
    # bad
    bluths.map { |bluth| bluth.occupation }
    bluths.select { |bluth| bluth.blue_self? }

    # good
    bluths.map(&:occupation)
    bluths.select(&:blue_self?)
    ```

* Prefer `some_method` over `self.some_method` when
    calling a method on the current instance.

    ```ruby
    # bad
    def end_date
      self.start_date + self.nights
    end

    # good
    def end_date
      start_date + nights
    end
    ```

    In the following three common cases, `self.` is required by the language
    and is good to use:

    1. When defining a class method: `def self.some_method`.
    2. The *left hand side* when calling an assignment method, including assigning
       an attribute when `self` is an ActiveRecord model: `self.guest = user`.
    3. Referencing the current instance's class: `self.class`.

* When defining an object of any mutable
    type meant to be a constant, make sure to call `freeze` on it. Common
    examples are strings, arrays, and hashes.
    ([More on this][ruby-freeze])

    The reason is that Ruby constants are actually mutable. Calling `freeze`
    ensures they are not mutated and are therefore truly constant and
    attempting to modify them will raise an exception. For strings, this allows
    older versions of Ruby below 2.2 to intern them.

    ```ruby
    # bad
    class Color
      RED = 'red'
      BLUE = 'blue'
      GREEN = 'green'

      ALL_COLORS = [
        RED,
        BLUE,
        GREEN,
      ]

      COLOR_TO_RGB = {
        RED => 0xFF0000,
        BLUE => 0x0000FF,
        GREEN => 0x00FF00,
      }
    end

    # good
    class Color
      RED = 'red'.freeze
      BLUE = 'blue'.freeze
      GREEN = 'green'.freeze

      ALL_COLORS = [
        RED,
        BLUE,
        GREEN,
      ].freeze

      COLOR_TO_RGB = {
        RED => 0xFF0000,
        BLUE => 0x0000FF,
        GREEN => 0x00FF00,
      }.freeze
    end
    ```

* Generally avoid using `try`. It conceals the difference between “I have the wrong kind of object”, “I have nil” and “I don’t support to that call”. [Do. Or do not. There is no try](https://karolgalanciak.com/blog/2017/09/24/do-or-do-not-there-is-no-try-object-number-try-considered-harmful/)

```ruby
# bad
account = Account.new(owner: Object.new)
account.try(:owner).try(:address)
# => nil
```

## Time

* All time objects should be zone-aware. See this for why: [It's About Time (Zones)](https://thoughtbot.com/blog/its-about-time-zones)

```ruby
# bad
Time.now
Date.today
Date.today.to_time
Time.parse("2015-07-04 17:05:37") 

# good
Time.current
Time.zone.today
Date.current
Time.zone.parse("2015-07-04 17:05:37") 
```

## Naming

* Use `snake_case` for methods and variables.

* Use `CamelCase` for classes and modules. (Keep
    acronyms like HTTP, RFC, XML uppercase.)

* Use `SCREAMING_SNAKE_CASE` for other
    constants.

* The names of predicate methods (methods
    that return a boolean value) should end in a question mark.
    (i.e. `Array#empty?`)

* The names of potentially "dangerous" methods
    (i.e. methods that modify `self` or the arguments, `exit!`, etc.) should
    end with an exclamation mark. Bang methods should only exist if a non-bang
    method exists. ([More on this][ruby-naming-bang])

* Name throwaway variables `_`.

    ```ruby
    version = '3.2.1'
    major_version, minor_version, _ = version.split('.')
    ```

## Classes

* Avoid the usage of class (`@@`) variables
    due to their "nasty" behavior in inheritance.

    ```ruby
    class Parent
      @@class_var = 'parent'

      def self.print_class_var
        puts @@class_var
      end
    end

    class Child < Parent
      @@class_var = 'child'
    end

    Parent.print_class_var # => will print "child"
    ```

  As you can see all the classes in a class hierarchy actually share one
  class variable. Class instance variables should usually be preferred
  over class variables.

* Use `def self.method` to define singleton
    methods. This makes the methods more resistant to refactoring changes.

    ```ruby
    class TestClass
      # bad
      def TestClass.some_method
        ...
      end

      # good
      def self.some_other_method
        ...
      end
    ```

* Avoid `class << self` except when necessary,
    e.g. single accessors and aliased attributes.

    ```ruby
    class TestClass
      # bad
      class << self
        def first_method
          ...
        end

        def second_method_etc
          ...
        end
      end

      # good
      class << self
        attr_accessor :per_page
        alias_method :nwo, :find_by_name_with_owner
      end

      def self.first_method
        ...
      end

      def self.second_method_etc
        ...
      end
    end
    ```

* Indent the `public`, `protected`, and
    `private` methods as much as the access modifier they apply to. Leave one
    blank line above and below the access modifier keyword.

    ```ruby
    class SomeClass
      def public_method
        # ...
      end

      private

      def private_method
        # ...
      end
    end
    ```

## Exceptions

* Don't use exceptions for flow of control.

    ```ruby
    # bad
    begin
      n / d
    rescue ZeroDivisionError
      puts "Cannot divide by 0!"
    end

    # good
    if d.zero?
      puts "Cannot divide by 0!"
    else
      n / d
    end
    ```

* Avoid rescuing the `Exception` class.

    ```ruby
    # bad
    begin
      # an exception occurs here
    rescue Exception
      # exception handling
    end

    # good
    begin
      # an exception occurs here
    rescue StandardError
      # exception handling
    end

    # acceptable
    begin
      # an exception occurs here
    rescue
      # exception handling
    end
    ```

* Don't specify `RuntimeError` explicitly in
    the two argument version of raise. Prefer error sub-classes for clarity and
    explicit error creation.

    ```ruby
    # bad
    raise RuntimeError, 'message'

    # better - RuntimeError is implicit here
    raise 'message'

    # best
    class MyExplicitError < RuntimeError; end
    raise MyExplicitError
    ```

* Prefer supplying an exception class and a message as two separate arguments
    to `raise`, instead of an exception instance.

    ```Ruby
    # bad
    raise SomeException.new('message')
    # Note that there is no way to do `raise SomeException.new('message'), backtrace`.

    # good
    raise SomeException, 'message'
    # Consistent with `raise SomeException, 'message', backtrace`.
    ```

* Avoid using rescue in its modifier form.

    ```ruby
    # bad
    read_file rescue handle_error($!)

    # good
    begin
      read_file
    rescue Errno:ENOENT => ex
      handle_error(ex)
    end
    ```

## Collections

* Prefer `map` over `collect`.

* Prefer `detect` over `find`. The use of `find`
    is ambiguous with regard to ActiveRecord's `find` method - `detect` makes
    clear that you're working with a Ruby collection, not an AR object.

* Prefer `reduce` over `inject`.

* Prefer `size` over either `length` or `count` for performance reasons.

* Prefer literal array and hash creation
    notation unless you need to pass parameters to their constructors.

    ```ruby
    # bad
    arr = Array.new
    hash = Hash.new

    # good
    arr = []
    hash = {}

    # good because constructor requires parameters
    x = Hash.new { |h, k| h[k] = {} }
    ```

* Favor `Array#join` over `Array#*` for clarity.

    ```ruby
    # bad
    %w(one two three) * ', '
    # => 'one, two, three'

    # good
    %w(one two three).join(', ')
    # => 'one, two, three'
    ```

* Use symbols instead of strings as hash keys.

    ```ruby
    # bad
    hash = { 'one' => 1, 'two' => 2, 'three' => 3 }

    # good
    hash = { :one => 1, :two => 2, :three => 3 }
    ```

* Relatedly, use plain symbols instead of string symbols when possible.

    ```ruby
    # bad
    :"symbol"

    # good
    :symbol
    ```

* Use `Hash#key?` instead of
    `Hash#has_key?` and `Hash#value?` instead of `Hash#has_value?`. According
    to Matz, the longer forms are considered deprecated.

    ```ruby
    # bad
    hash.has_key?(:test)
    hash.has_value?(value)

    # good
    hash.key?(:test)
    hash.value?(value)
    ```

* Use multi-line hashes when it makes the code
    more readable, and use trailing commas to ensure that parameter changes
    don't cause extraneous diff lines when the logic has not otherwise changed.

    ```ruby
    hash = {
      :protocol => 'https',
      :only_path => false,
      :controller => :users,
      :action => :set_password,
      :redirect => @redirect_url,
      :secret => @secret,
    }
    ```

* Use a trailing comma in an `Array` that spans more than 1 line.

    ```ruby
    # good
    array = [1, 2, 3]

    # good
    array = [
      "car",
      "bear",
      "plane",
      "zoo",
    ]
    ```

## Strings

* Prefer string interpolation instead of string concatenation:

    ```ruby
    # bad
    email_with_name = user.name + ' <' + user.email + '>'

    # good
    email_with_name = "#{user.name} <#{user.email}>"
    ```

  Furthermore, keep in mind Ruby 1.9-style interpolation. Let's say you are
  composing cache keys like this:

    ```ruby
    CACHE_KEY = '_store'

    cache.write(@user.id + CACHE_KEY)
    ```

    Prefer string interpolation instead of string concatenation:

    ```ruby
    CACHE_KEY = '%d_store'

    cache.write(CACHE_KEY % @user.id)
    ```

* Avoid using `String#+` when you need to
    construct large data chunks. Instead, use `String#<<`. Concatenation mutates
    the string instance in-place  and is always faster than `String#+`, which
    creates a bunch of new string objects.

    ```ruby
    # good and also fast
    story = ''
    story << 'The Ugly Duckling'

    paragraphs.each do |paragraph|
      story << paragraph
    end
    ```

* Use `\` at the end of the line instead of `+` or `<<` to concatenate multi-line strings.

    ```ruby
    # bad
    "Some string is really long and " +
      "spans multiple lines."

    # bad
    "Some string is really long and " <<
      "spans multiple lines."

    # good
    "Some string is really long and " \
      "spans multiple lines."
    ```

## Regular Expressions

* Avoid using `$1-9` as it can be hard to track
    what they contain. Named groups can be used instead.

    ```ruby
    # bad
    /(regexp)/ =~ string
    ...
    process $1

    # good
    /(?<meaningful_var>regexp)/ =~ string
    ...
    process meaningful_var
    ```

* Be careful with `^` and `$` as they
    match start/end of line, not string endings.  If you want to match the whole
    string use: `\A` and `\z`.

    ```ruby
    string = "some injection\nusername"
    string[/^username$/]   # matches
    string[/\Ausername\z/] # don't match
    ```

* Use `x` modifier for complex regexps. This makes
    them more readable and you can add some useful comments. Just be careful as
    spaces are ignored.

    ```ruby
    regexp = %r{
      start         # some text
      \s            # white space char
      (group)       # first group
      (?:alt1|alt2) # some alternation
      end
    }x
    ```

## Percent Literals

* Prefer parentheses over curly
    braces, brackets, or pipes when using `%`-literal delimiters for
    consistency, and because the behavior of `%`-literals is closer to method
    calls than the alternatives.

    ```ruby
    # bad
    %w[contacts accounts]
    %w{contacts accounts}
    %w|contacts accounts|

    # good
    %w(contacts accounts)
    ```

* Use `%w` freely.

    ```ruby
    STATES = %w(draft open closed)
    ```

* Use `%()` for single-line strings which require
    both interpolation and embedded double-quotes. For multi-line strings,
    prefer heredocs.

    ```ruby
    # bad - no interpolation needed
    %(Welcome, Jane!)
    # should be 'Welcome, Jane!'

    # bad - no double-quotes
    %(This is #{quality} style)
    # should be "This is #{quality} style"

    # bad - multiple lines
    %(Welcome, Jane!\nPlease enjoy your stay at #{location}\nCheers!)
    # should be a heredoc.

    # good - requires interpolation, has quotes, single line
    %(Welcome, #{name}!)
    ```

* Use `%r` only for regular expressions matching *more than* one '/' character.

    ```ruby
    # bad
    %r(\s+)

    # still bad
    %r(^/(.*)$)
    # should be /^\/(.*)$/

    # good
    %r(^/blog/2011/(.*)$)
    ```

* Avoid the use of %x unless you're going to invoke a
    command with backquotes in it (which is rather unlikely).

    ```ruby
    # bad
    date = %x(date)

    # good
    date = `date`
    echo = %x(echo `date`)
    ```

## Rails

* When immediately returning after calling
    `render` or `redirect_to`, put `return` on the next line, not the same line.

    ```ruby
    # bad
    render :text => 'Howdy' and return

    # good
    render :text => 'Howdy'
    return

    # still bad
    render :text => 'Howdy' and return if foo.present?

    # good
    if foo.present?
      render :text => 'Howdy'
      return
    end
    ```

### Scopes

* When defining ActiveRecord model scopes, wrap the
    relation in a `lambda`.  A naked relation forces a database connection to be
    established at class load time (instance startup).

    ```ruby
    # bad
    scope :foo, where(:bar => 1)

    # good
    scope :foo, -> { where(:bar => 1) }
    ```

## Tests

* Tests should be written for all public interfaces. If a bug is fixed, make a new test for that failing case to ensure its resolution.

## Be Consistent

> If you're editing code, take a few minutes to look at the code around you and
> determine its style. If they use spaces around all their arithmetic
> operators, you should too. If their comments have little boxes of hash marks
> around them, make your comments have little boxes of hash marks around them
> too.
>
> The point of having style guidelines is to have a common vocabulary of coding
> so people can concentrate on what you're saying rather than on how you're
> saying it. We present global style rules here so people know the vocabulary,
> but local style is also important. If code you add to a file looks
> drastically different from the existing code around it, it throws readers out
> of their rhythm when they go to read it. Avoid this.

&mdash;[Google C++ Style Guide][google-c++]

[rubocop-guide]: https://github.com/rubocop-hq/ruby-style-guide
[github-ruby]: https://github.com/styleguide/ruby
[google-c++]: https://google.github.io/styleguide/cppguide.html
[google-c++-comments]: https://google.github.io/styleguide/cppguide.html#Comments
[google-python-comments]: https://google.github.io/styleguide/pyguide.html#Comments
[ruby-naming-bang]: http://dablog.rubypal.com/2007/8/15/bang-methods-or-danger-will-rubyist
[ruby-freeze]: https://blog.honeybadger.io/when-to-use-freeze-and-frozen-in-ruby/
[avoid-else-return-early]: http://blog.timoxley.com/post/47041269194/avoid-else-return-early
