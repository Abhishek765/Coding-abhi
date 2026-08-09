package main

import (
	"fmt"
	"time"
)

// func task(i int) {
// 	fmt.Println("task: ", i)
// }

func main() {

	for i := 0; i < 10; i++ {
		// go task(i)

		func(i int) {
			go fmt.Println(i)
		}(i)
	}

	time.Sleep(time.Second * 2)
}
