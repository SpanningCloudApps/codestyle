# PHP code style validation

## Rules
For PHP code style we are recommending to follow rules from open public standard [PSR-12: Extended Coding Style - PHP-FIG](https://www.php-fig.org/psr/psr-12/). This public standard created and maintained with input of authors of most popular PHP frameworks and libraries and has quite big popularity inside community of developers.

## Validation tools
For the validation of the code style rules we are recommending next open source tool [GitHub - squizlabs/PHP_CodeSniffer: PHP_CodeSniffer tokenizes PHP files and detects violations of a defined set of coding standards](https://github.com/squizlabs/PHP_CodeSniffer). This tool quite popular in the community and has reach list of contributors. Also this tool has build in rules for PSR-12 standard with good enough support from the community side: [PHP_CodeSniffer/src/Standards/PSR12 at master · squizlabs/PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer/tree/master/src/Standards/PSR12).

# Integration to the pipeline:

## Preparation
The best way to keep under control code style validation tool and version of standard will be adding them to the composer dependency manager as dev dependency. It will give the ability for developers to update version of those instruments as soon as it will be nessecary for each project. 
For installing code sniffer as dev dependency to your project you can use next command from the root directory of your project:

`composer require "squizlabs/php_codesniffer=*" --dev`

After that you could commit your changes to the project repository and start adding CI step for verification of code style.

## Gitlab CI configuration for validating PHP code style

In this repository you could find job and example of gitlab workflow for configuring stage in your pipeline for validating code style in PHP based project.

The file `./jobs/phpcs.yml` contains hidden job for checking PHP code style in the repository with installed `phpcs` as dev dependency. You could include this job to your project using function of gitlab for including external configurations. See [official documentation](https://docs.gitlab.com/ee/ci/yaml/includes.html) In the `./.gitlab-ci.yml` file you can see example of including dependency from the local repository:

```yml
include: '/jobs/phpcs.yml'
```

After that you could declare stage in pipeline for validating code style:

```yml
stages:
  - "Code style validation"
```

See examples in `./.gitlab-ci.yml`.

And after that you could extend hiddent job and assign it to the appropriate stage:


```yml
"phpcs":
  stage: "Code style validation"
  extends: "./phpcs"
  variables:
    PHPCS_BIN: ./vendor/bin/phpcs
```

Also it is possible to overwrite path to the bin file for running phpcs if you have alternative structure of repository.
See example of workflow in the `./.gitlab-ci.yml` file.
You can use flexebility of gitlab ci configurations for over wrinig other parameters if you want.

# How to check code stile on the local environment 

For running validation for whole project  you can run next command from the root directory of your project:

`./vendor/bin/phpcs --standard=PSR12`

For more details you can read the official documentation:
[GitHub - squizlabs/PHP_CodeSniffer: PHP_CodeSniffer tokenizes PHP files and detects violations of a defined set of coding standards](https://github.com/squizlabs/PHP_CodeSniffer). 
