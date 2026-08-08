package main

import "fmt"

// func printSlice(items []int) {
// 	for _, item := range items {
// 		fmt.Println(item)
// 	}
// }

// func printStringSlice(items []string) {
// 	for _, item := range items {
// 		fmt.Println(item)
// 	}
// }

// in order to support multiple types we can use generics
// func printSlice[T any](items []T) {
// 	for _, item := range items {
// 		fmt.Println(item)
// 	}
// }

// if we want to restrict to certain types
func printSlice[T int | string | bool](items []T) {
	for _, item := range items {
		fmt.Println(item)
	}
}

// Using comparable

func printSliceUsingComparable[T comparable, V string](items []T, name V) {
	for _, item := range items {
		fmt.Println(item, name)
	}
}

// LIFO
// Generics example on structs
type stack[T any] struct {
	elements []T
}

func main() {

	nums := []int{1, 2, 3, 4}

	lang := []string{"golang", "typescript"}
	togglers := []bool{true, false, true}
	// printSlice(nums)
	// printStringSlice(lang)
	printSlice(nums)
	printSlice(lang)
	printSlice(togglers)

	// Stack example
	// stringStack := stack[string]{
	// 	elements: []string{"golang", "typescript"},
	// }
	// intStack := stack[int]{
	// 	elements: []int{1, 2, 3, 4},
	// }

	// fmt.Println(stringStack)
	// fmt.Println(intStack)

	printSliceUsingComparable(nums, "Abhishek")

}
