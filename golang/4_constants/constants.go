package main

import "fmt"

const age = 30

func main() {

	const language = "golang"
	// cannot reassign
	// language = "javascript"

	const age = 20
	fmt.Println(age)

	// grouping of constants
	const (
		port = 5000
		host = "localhost"
	)

	fmt.Println(port, host)
}
