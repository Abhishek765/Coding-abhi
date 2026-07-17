package main

import "fmt"

// works by Value
func changeNum(num int) {
	num = 5
	fmt.Println("In changeNum: ", num)
}

// by reference
func changeNumByRef(num *int) {
	*num = 5
	fmt.Println("In changeNumByRef", *num)
}

func main() {
	num := 1
	// changeNum(num)
	// fmt.Println("After Calling the changeNum in main: ", num)
	changeNumByRef(&num)
	fmt.Println("After Calling the changeNum in main: ", num)
}
