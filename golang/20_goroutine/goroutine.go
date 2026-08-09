package main

import (
	"fmt"
	"sync"
)

func task(i int, wg *sync.WaitGroup) {
	defer wg.Done()
	fmt.Println("task: ", i)
}

func main() {

	var wg sync.WaitGroup

	for i := 0; i < 10; i++ {
		wg.Add(1)
		go task(i, &wg)

	}
	wg.Wait()
}
