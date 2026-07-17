package main

import "fmt"

// sum acts like variadic funciton
func sum(nums ...int) int {

	total := 0

	for _, num := range nums {
		total = total + num
	}
	return total
}

func main() {
	// result := sum(1, 2, 4, 5)
	nums := []int{3, 4, 5, 6}
	result := sum(nums...)
	fmt.Println(result)
}
