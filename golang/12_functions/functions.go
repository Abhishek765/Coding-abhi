package main

import "fmt"

//	func add(a int, b int) int {
//		return a + b
//	}
//
// another version a, b are both int
// func add(a, b int) int {
// 	return a + b
// }

// func getLanguages() (string, string, string, bool) {
// 	return "golang", "javascript", "python", true
// }

func processIt(fn func(a int) int) {
	// fmt.Println("result:", fn(1))
	fmt.Println("result:", fn(2))
}

// example where we return a function
func getMultiplier() func(int) int {
	return func(a int) int {
		return a * 2
	}
}

func main() {

	// result := add(3, 4)
	// fmt.Println(result)

	// lang1, lang2, lang3, _ := getLanguages()
	// fmt.Println(lang1, lang2, lang3)

	square := func(a int) int {
		return a * a
	}
	processIt(square)

	multiplier := getMultiplier()
	fmt.Println(multiplier(3))
}
