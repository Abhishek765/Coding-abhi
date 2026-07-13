package main

import (
	"fmt"
	"maps"
)

// maps -> hash, object, dict
func main() {
	//creating map
	m := make(map[string]string)

	// setting an element
	m["name"] = "golang"
	m["area"] = "backend"

	// fmt.Println(m["name"], m["area"])
	// if key is not present then it returns default values for example in case of strings it is empty string

	m1 := make(map[string]int)
	m1["age"] = 26
	m1["price"] = 50
	fmt.Println(m1["phone"]) // key is not present returns 0

	fmt.Println(len(m1))

	// deleting element
	delete(m1, "price")
	// fmt.Println(m1)

	//to clear all
	clear(m1)
	fmt.Println(m1)

	// creating map without make
	m2 := map[string]int{
		"price":  20,
		"phones": 3,
	}
	fmt.Println(m2)

	// checking if key is present
	val, ok := m2["price"]

	if ok {
		fmt.Println("Element is present", val)

	} else {
		fmt.Println("Element is not present")
	}

	m3 := map[string]int{"price": 20, "phones": 3}
	m4 := map[string]int{"price": 20, "phones": 3}

	// comparing maps
	fmt.Println(maps.Equal(m3, m4))
}
