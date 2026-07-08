package main

import "fmt"

func main() {
	// int
	// var number int = 10
	// var number = 10

	// string
	// var name string = "Abhishek"

	// var isLearning bool = true

	// Declaring now and assigning later
	// var num int
	// num = 20

	// Short-hand syntax
	// name := "golang"

	// var price float32 = 40.2
	// var price = 40.2 // here type will be inferred
	// price := 40.2 // short-hand syntax

	// Multiple variable declaration
	// var x, y, z = 1, "hello golang", 20.5
	// fmt.Println(x, y, z)

	// Multiple variable declaration with short-hand syntax
	// a, b, c := "Hello world", true, 20.2
	// fmt.Println(a, b, c)

	// grouping variable declaration (cleaner way for multiple variables)
	var (
		name             string  = "Abhishek"
		age              int     = 26
		isLearningGolang bool    = true
		price            float32 = 40.2
	)
	fmt.Println(name, age, isLearningGolang, price)
}
