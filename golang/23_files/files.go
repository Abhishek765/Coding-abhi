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
	// f, err := os.Open("example.txt")
	// if err != nil {
	// 	panic(err)
	// }

	// defer f.Close() // important after opening is done for this file we can immediately close it so that os is not busy

	// buf := make([]byte, 12)

	// l, err := f.Read(buf)
	// if err != nil {
	// 	panic(err)
	// }

	// for i := 0; i < len(buf); i++ {
	// 	fmt.Println("data", l, string(buf[i]))
	// }

	// 2nd way reads the content at once
	// data, err := os.ReadFile("example.txt")

	// if err != nil {
	// 	panic(err)
	// }

	// fmt.Println(string(data))

	// Read folders
	// dir, err := os.Open("../")
	// if err != nil {
	// 	panic(err)
	// }

	// defer dir.Close()

	// fileInfo, err := dir.ReadDir(-1)

	// for _, fi := range fileInfo {
	// 	fmt.Println(fi.Name(), fi.IsDir())
	// }

	// create a file
	// f, err := os.Create("example2.txt")

	// if err != nil {
	// 	panic(err)
	// }

	// defer f.Close()

	// data := []byte("Nice Language")
	// f.WriteString("Hello Golang to example 2\n")
	// f.Write(data)

	// read and write to another file (streaming fashion)

	// sourceFile, err := os.Open("example.txt")
	// if err != nil {
	// 	panic(err)
	// }
	// defer sourceFile.Close()

	// destFile, err := os.Create("example2.txt")
	// if err != nil {
	// 	panic(err)
	// }
	// defer destFile.Close()

	// reader := bufio.NewReader(sourceFile)
	// writer := bufio.NewWriter(destFile)

	// for {
	// 	b, err := reader.ReadByte()
	// 	if err != nil {
	// 		if err.Error() != "EOF" {
	// 			panic(err)
	// 		}
	// 		break
	// 	}

	// 	e := writer.WriteByte(b)
	// 	if e != nil {
	// 		panic(e)
	// 	}
	// }

	// writer.Flush()
	// fmt.Println("Written is completed")

	// Delete a file
	err := os.Remove("example2.txt")
	if err != nil {
		panic(err)
	}
	fmt.Println("File Deleted successfully")

}
