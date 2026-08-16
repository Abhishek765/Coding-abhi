package main

import (
	"fmt"
	"os"
)

func main() {
	// f, err := os.Open("example.txt")
	// if err != nil {
	// 	// log the error
	// 	panic(err)
	// }

	// fileInfo, err := f.Stat()
	// if err != nil {
	// 	// log the error
	// 	panic(err)
	// }

	// fmt.Println("FileName: ", fileInfo.Name())
	// fmt.Println("Is Directory: ", fileInfo.IsDir())
	// fmt.Println("Size: ", fileInfo.Size())
	// fmt.Println("File Permission: ", fileInfo.Mode())
	// fmt.Println("File modified at: ", fileInfo.ModTime())

	//1. Read file
	f, err := os.Open("example.txt")
	if err != nil {
		panic(err)
	}

	defer f.Close() // important after opening is done for this file we can immediately close it so that os is not busy

	buf := make([]byte, 12)

	l, err := f.Read(buf)
	if err != nil {
		panic(err)
	}

	for i := 0; i < len(buf); i++ {
		fmt.Println("data", l, string(buf[i]))
	}

}
