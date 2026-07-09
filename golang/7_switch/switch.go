package main

import (
	"fmt"
)

func main() {
	// simple switch
	// i := 5
	// switch i {
	// case 1:
	// 	fmt.Println("One")
	// case 2:
	// 	fmt.Println("Two")
	// case 3:
	// 	fmt.Println("Three")
	// case 4:
	// 	fmt.Println("Four")
	// case 5:
	// 	fmt.Println("Five")
	// default:
	// 	fmt.Println("Unknown number")
	// }

	// multiple condition switch
	// switch time.Now().Weekday() {
	// case time.Saturday, time.Sunday:
	// 	fmt.Println("It's the weekend", "today's day is:", time.Now().Weekday())
	// default:
	// 	fmt.Println("It's a weekday", "today's day is:", time.Now().Weekday())
	// }

	// type switch
	whoAmI := func(i interface{}) {
		switch i.(type) {
		case int:
			fmt.Println("I'm an int")
		case string:
			fmt.Println("I'm a string")
		case bool:
			fmt.Println("I'm a bool")
		default:
			fmt.Println("Unknown type")
		}
	}

	whoAmI(1)
	whoAmI("Hello")
	whoAmI(true)
	whoAmI(1.2)
}
