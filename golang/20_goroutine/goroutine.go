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

		func() {
			go fmt.Println(i)
		}()
	}

	time.Sleep(time.Second * 2)
}
