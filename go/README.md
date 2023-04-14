# Go

## Introduction to go

- https://go.dev/learn/
- https://go101.org/
- https://github.com/teivah/100-go-mistakes (don't skip this one)

## Code style

- https://go.dev/doc/effective_go <- this
- https://go-proverbs.github.io/

## Project structure

There is no official standard for that in Go.
Use your best judgement, solve your problems and evolve your project structure as you go.

Some arguments here:
- https://github.com/golang-standards/project-layout/issues/117#issue-854742264

## Tools

- `go fmt` - format code
- `go vet` - static analysis
- `go test` - unit tests
- `go build` - build binary
- `go run` - run something (e.g. your code)
- `go mod` - dependency management
- `go install` - install package locally

## Dependency management `go mod`*

https://go.dev/ref/mod

- `go.mod` and `go.sum` are supposed to be committed to the repository.

_*Before reaching for OSS, check the Go standard lib._

## Linters

- `golangci-lint` - linter used in the CI pipeline
- `goimports` - format code and add/remove imports

## Testing

- https://pkg.go.dev/testing

Avoid using `reflect.DeepEqual` for assertions of complex data types, but rather
- `go-cmp` - pick this one (nice and simple)
- `testify` - or this (heavy but powerful)

Prefer table-driven tests.

Use `t.Parallel()` and `-race` flag to test the code against race conditions.

Familiarize yourself with the following concepts:
- https://go.dev/blog/examples
- https://go.dev/doc/tutorial/fuzz
- https://pkg.go.dev/testing#hdr-Benchmarks
- https://go.dev/blog/pprof

## Documenting your code

https://go.dev/blog/godoc
