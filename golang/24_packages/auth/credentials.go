package auth

import "fmt"

// if we need to use this function outside the package we need to make it public by making the first letter capital
func LoginWithCredentials(username string, password string) {
	fmt.Println("Login user using", username, password)
}
