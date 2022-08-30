# Kaseya CodeStyle Guide

This repository provides a set of code styles for several programming languages: [Ruby](https://github.com/SpanningCloudApps/codestyle/blob/main/ruby/), [Java](https://github.com/SpanningCloudApps/codestyle/tree/main/java), [C#](https://github.com/SpanningCloudApps/codestyle/blob/main/csharp/) and [JavaScript](https://github.com/SpanningCloudApps/codestyle/blob/main/js/)

JavaScript code style extends Airbnb's base JS  



## Github actions and Github packages
   We use Github actions to create a projects assembly and publish packages to Github. Files with instructions here:
   [C#](https://github.com/SpanningCloudApps/codestyle/blob/main/.github/workflows/deploy-charp.yml),
   [Java](https://github.com/SpanningCloudApps/codestyle/blob/main/.github/workflows/deploy-java.yml),
   [JavaScript](https://github.com/SpanningCloudApps/codestyle/blob/main/.github/workflows/deploy-js.yml),
   [Ruby](https://github.com/SpanningCloudApps/codestyle/blob/main/.github/workflows/deploy-ruby.yml).

   Ready-made packages [here](https://github.com/orgs/SpanningCloudApps/packages?repo_name=codestyle)


## How to use package in your project

   [eslint-config-base](https://github.com/SpanningCloudApps/codestyle/pkgs/npm/eslint-config-base)  
   [com.kaseya.static-analyzers](https://github.com/SpanningCloudApps/codestyle/tree/main/java/Readme.md)

6. < Update java/.mvn/wrapper > -> < maven local > -> < mvn -N wrapper:wrapper >
### For those who use Maven Wrapper to build a project
