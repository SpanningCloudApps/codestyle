package main

import (
	"io"
	"os/exec"
	"testing"
)

func Test_main(t *testing.T) {
	cmd := exec.Command("go", "run", "main.go")
	expectStdOut := "Hello World!"
	expectStdErr := ""

	stdout, err := cmd.StdoutPipe()
	if err != nil {
		t.Fatal(err)
	}

	stderr, err := cmd.StderrPipe()
	if err != nil {
		t.Fatal(err)
	}

	if err := cmd.Start(); err != nil {
		t.Fatal(err)
	}

	gotStdOut, err := io.ReadAll(stdout)
	if err != nil {
		t.Fatal(err)
	}

	if string(gotStdOut) != expectStdOut {
		t.Fatalf("Expected %s but got '%s'", expectStdOut, gotStdOut)
	}

	gotStdErr, err := io.ReadAll(stderr)
	if err != nil {
		t.Fatal(err)
	}

	if string(gotStdErr) != expectStdErr {
		t.Fatalf("Expected %s but got '%s'", expectStdErr, gotStdErr)
	}

	if err := cmd.Wait(); err != nil {
		t.Fatal(err)
	}
}

func Test_main_1(t *testing.T) {
	main()
}
