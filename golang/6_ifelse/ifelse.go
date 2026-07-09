package main

import "fmt"

func main() {

	// age := 20
	// if age >= 18 {
	// 	fmt.Println("Person is an adult")
	// } else {
	// 	fmt.Println("Person is not an adult")
	// }

	// else if
	// age := 12
	// if age >= 18 {
	// 	fmt.Println("Person is an adult")
	// } else if age >= 13 {
	// 	fmt.Println("Person is a teenager")
	// } else {
	// 	fmt.Println("Person is a child")
	// }

	// declaration and assignment in if statement
	if age := 12; age >= 18 {
		fmt.Println("Person is an adult")
	} else {
		fmt.Println("Person is not an adult")
	}
	// there is no ternary operator in go, we need to use if else statement instead
}
