package main

import "fmt"

// for -> only construct in go for looping

func main() {

	// while loop
	// i := 1
	// for i <= 3 {
	// 	fmt.Println(i)
	// 	// i++
	// 	i = i + 1
	// }

	// infinite loop
	// for {
	// 	fmt.Println("1")
	// }

	// standard for loop
	// for i := 1; i <= 4; i++ {
	// 	// if i == 2 {
	// 	// 	break
	// 	// }

	// 	if i == 2 {
	// 		continue
	// 	}
	// 	fmt.Println(i)
	// }

	// range based for loop
	for index := range 10 {
		fmt.Println(index)
	}
}
