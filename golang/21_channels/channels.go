package main

import (
	"fmt"
	"time"
)

// Receive case where we're receiving the data from channel inside a goroutine
// func processNum(numChan chan int, wg *sync.WaitGroup) {
// 	num := <-numChan
// 	fmt.Println("Received number:", num)
// 	wg.Done()
// }

// // sending to a channel in an infinite loop and receiving from it in another goroutine
// func processInfiniteNums(numChan chan int) {
// 	for num := range numChan {
// 		fmt.Println("Received Number", num)
// 		time.Sleep(time.Second)
// 	}
// }

// Sending case where we're sending the data from this goroutine to main via channel
// func sum(result chan int, a int, b int) {
// 	total := a + b
// 	result <- total
// }

// goroutine synchronization using channels (without wait group)
func task(done chan bool) {

	// this will run when the the task is done or the func exit
	defer func() { done <- true }()

	fmt.Println("processing task...")
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
	// result := make(chan int)
	// go sum(result, 3, 4)
	// total := <-result
	// fmt.Println(total)

	// implementing a wait group to wait for a task processing using channels (without wg)
	// done := make(chan bool)
	// go task(done)
	// <-done // blocking the main function until the task is done and the channel receives a value

	// making buffered channel - async way
	emailChan := make(chan string, 2) // non-blocking only till the size if exhausted in a transfer

	// let's test it
	emailChan <- "test"
	emailChan <- "test2"
	fmt.Println("Email 1: ", <-emailChan)
	fmt.Println("Email 2: ", <-emailChan)
	emailChan <- "test3" // this will not block the main function as the channel is buffered and has a size of 2 because the channel state is [] -> empty
	// now let's receive the data from the channel in a goroutine
	go func() {
		fmt.Println("Receiving one value...")
		fmt.Println(<-emailChan)
	}()

	// now let's send the data to the channel in a goroutine
	go func() {
		fmt.Println("Sending one value...")
		emailChan <- "test4"
	}()

	fmt.Println("Email 4: ", <-emailChan)
	time.Sleep(time.Second)

}
