package main

import (
	"fmt"
	"os"
)

func main() {
	f, err := os.Open("example.txt")
	if err != nil {
		// log the error
		panic(err)
	}

	fileInfo, err := f.Stat()
	if err != nil {
		// log the error
		panic(err)
	}

	fmt.Println("FileName: ", fileInfo.Name())
	fmt.Println("Is Directory: ", fileInfo.IsDir())
	fmt.Println("Size: ", fileInfo.Size())
	fmt.Println("File Permission: ", fileInfo.Mode())
	fmt.Println("File modified at: ", fileInfo.ModTime())
}
