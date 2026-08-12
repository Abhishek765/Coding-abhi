package main

import (
	"fmt"
	"sync"
)

func processNum(numChan chan int, wg *sync.WaitGroup) {
	num := <-numChan
	fmt.Println("Received number:", num)
	wg.Done()
}

// // sending to a channel in an infinite loop and receiving from it in another goroutine
// func processInfiniteNums(numChan chan int) {
// 	for num := range numChan {
// 		fmt.Println("Received Number", num)
// 		time.Sleep(time.Second)
// 	}
// }

func sum(result chan int, a int, b int) {
	total := a + b
	result <- total
}

func main() {
	// numChan := make(chan int)
	// var wg sync.WaitGroup
	// wg.Add(1)
	// go processNum(numChan, &wg)
	// numChan <- 5 // Send a number to the channel

	// -------------------

	// Infinite loop to send random numbers to the channel -> like a queue
	// go processInfiniteNums(numChan)
	// for {
	// 	numChan <- rand.IntN(100) // Send a random number to the channel
	// }

	// -------------------

	// case to get a number from the channel from a goroutine and print it in the main function
	result := make(chan int)
	go sum(result, 3, 4)
	total := <-result
	fmt.Println(total)
}
