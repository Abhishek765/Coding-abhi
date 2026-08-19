package main

import (
	"fmt"

	"github.com/Abhishek765/golang/auth"
	"github.com/Abhishek765/golang/user"
	"github.com/fatih/color"
)

func main() {

	auth.LoginWithCredentials("abhishek", "1234")
	session := auth.GetSession()
	fmt.Println("session", session)

	user := user.User{
		Id:    1,
		Email: "test@test.com",
		Name:  "Abhishek",
	}

	// fmt.Println(user.Id, user.Email, user.Name)
	color.Red(fmt.Sprint(user.Id))
	color.Yellow(user.Email)
	color.Magenta(user.Name)
}
