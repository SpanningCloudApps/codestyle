# Preparing Github Actions

This is Kaseya's Ruby library manager. The deploy-ruby.yml runs Rubocop against the Ruby codebase and outputs the results in the Actions log.

## Deploy Ruby Codestyles

* Install the `kaseya_ruby_codestyles` gem to get local access to all our public codestyles and files. Look to https://rubygems.org/gems/Kaseya_Ruby_Codestyles for information about dependencies and commands to install.

  ```
  gem 'Kaseya_Ruby_Codestyles', '~> 1.1.1'
  gem install kaseya_ruby_codestyles
  ```

* Any dependency errors you run into such as parallel and activesupport version incompatibilities, install the suggested gem version displayed in the prompt message and attempt the install again

  * If you run into the following error during `rubocop-thread_safety` parsing:
    ```
    RDoc::Parser::Ruby failure around line 125 of
    lib/rubocop/cop/thread_safety/instance_variable_in_class_method.rb
    ```
    Run these 2 commands and attempt install again

    ```
    gem install stringio -v 0.0.2
    gem install rdoc
    ```

## Contributions

*  Ruby files added should go in the `ruby/ci/kaseya_ruby_codestyles` directory to best be tracked and checked by existed workflows

* Preparing your own github action to push within deploy-ruby.yml can be done 1 of 2 ways: 

  * Contribute towards the Rakefile that will run under the `Run Tests` step of deploy-ruby.yml.

  * Name a unique step, make sure to specify the working directory as `${{ github.workspace }}/ruby` as is defined for the other steps and contribute the terminal commands to be run from there.

  * Add comments where necessary to ensure the purpose and goal of the actions are clear.
