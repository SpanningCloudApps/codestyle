# PHP code style validation

## Rules
For PHP code style we are recommending to follow rules from open public standard [PSR-12: Extended Coding Style - PHP-FIG](https://www.php-fig.org/psr/psr-12/). This public standard created and maintained with input of authors of most popular PHP frameworks and libraries and has quite big popularity inside community of developers.

# Validator
For the validation of the code style rules we are recommending next open source tool [GitHub - squizlabs/PHP_CodeSniffer: PHP_CodeSniffer tokenizes PHP files and detects violations of a defined set of coding standards](https://github.com/squizlabs/PHP_CodeSniffer). This tool quite popular in the community and has reach list of contributors. Also this tool has build in rules for PSR-12 standard with good enough support from the community side: [PHP_CodeSniffer/src/Standards/PSR12 at master · squizlabs/PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer/tree/master/src/Standards/PSR12).

# Quick start:
For installing code sniffer as dev dependency to your project you can use next command from the root directory of your project:

`composer require "squizlabs/php_codesniffer=*" --dev`

For running validation for whole project  you can run next command from the root directory of your project:

`./vendor/bin/phpcs --standard=PSR12`

For more details you can read the official documentation:
[GitHub - squizlabs/PHP_CodeSniffer: PHP_CodeSniffer tokenizes PHP files and detects violations of a defined set of coding standards](https://github.com/squizlabs/PHP_CodeSniffer). 
