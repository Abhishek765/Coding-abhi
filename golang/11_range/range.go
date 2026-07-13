package main

import "fmt"

// iterating over data structures
func main() {

	// nums := []int{6, 7, 8}

	// sum := 0

	// for index, num := range nums {
	// 	fmt.Println(index, num)
	// 	sum += num
	// }
	// fmt.Println("sum:", sum)

	m := map[string]string{"fname": "john", "lname": "doe"}

	// printing key-value
	for k, v := range m {
		fmt.Println(k, v)
	}

	// only key
	for k := range m {
		fmt.Println(k)
	}

	// string case ->
	// i - starting byte of rune
	// c -> unicode  code point rune
	for i, c := range "golang" {
		fmt.Println(i, c, string(c))
	}
}
