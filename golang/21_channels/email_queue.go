package main

import "fmt"

func emailProcessor(emailChan <-chan string, done chan<- bool) {

	defer func() { done <- true }()

	// emailChan <- "test1" -> not allowed because emailChan is a receive-only channel
	// <-done -> not allowed because done is a send-only channel
	for email := range emailChan {
		fmt.Println("Processing Email: ", email)
	}
}

func main() {

	// Create a channel to send and receive email messages
	emailChan := make(chan string, 100) // buffered
	done := make(chan bool)             // unbuffered for sync way
	go emailProcessor(emailChan, done)

	for i := 0; i < 100; i++ {
		emailChan <- fmt.Sprintf("%d@gmail.com", i)
	}

	fmt.Println("Done Sending into email queue")
	close(emailChan) // Tell processor: no more emails
	<-done           // Wait for processor to finish
	fmt.Println("Done processing")

}
