package main

import "fmt"

// enumerated types

// Int Based
type OrderStatus int

const (
	Received OrderStatus = iota
	Confirmed
	Prepared
	Delivered
)

func changeOrderStatus(status OrderStatus) {
	fmt.Println("changing order status to", status)
}

// string based

type Roles string

const (
	Admin Roles = "admin"
	User  Roles = "user"
	Guest Roles = "guest"
)

func changeUserRole(role Roles) {
	fmt.Println("changing user role to", role)
}

func main() {
	// changeOrderStatus(Received)
	changeUserRole(Admin)
}
