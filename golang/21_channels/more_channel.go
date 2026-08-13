package main

func main() {

	chan1 := make(chan int)
	chan2 := make(chan string)

	go func() {
		chan1 <- 10
	}()

	go func() {
		chan2 <- "Golang"
	}()

	for i := 0; i < 2; i++ {
		select {
		case num := <-chan1:
			println("Received number:", num)
		case str := <-chan2:
			println("Received string:", str)
		}
	}
	
}
