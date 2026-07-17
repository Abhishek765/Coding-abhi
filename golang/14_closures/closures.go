package main

import "fmt"

func counter() func() int {

	var count int = 0
	return func() int {
		count += 1
		return count
	}
}

func main() {
	increment := counter()

	fmt.Println(increment())
	fmt.Println(increment()) // value of count if preserve because of closure (outer scoped variable references is present)
}
