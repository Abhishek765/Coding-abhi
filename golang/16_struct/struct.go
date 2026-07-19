package main

import (
	"fmt"
	"time"
)

type order struct {
	id        string
	amount    float32
	status    string
	createdAt time.Time // nanosecond precision
}

func createNewOrder(id string, amount float32, status string) *order {

	// initial setup goes here...

	newOrder := order{
		id:        id,
		amount:    amount,
		status:    status,
		createdAt: time.Now(),
	}

	return &newOrder
}

// receiver type
func (o *order) changeStatus(status string) { // for manipulation of struct fields we need to use pointers
	o.status = status
}

func (o order) getAmount() float32 { // pointer is optional in case getting the value from struct
	return o.amount
}

// inheritance in struct via embedding
type person struct {
	name  string
	phone string
}

type employee struct {
	person
	email string
}

func main() {

	// if we don't set any field value then by default it will be assigned as zero values
	// int => 0, float => 0 string => "", bool => false
	// myOrder := order{
	// 	id:     "1",
	// 	amount: 50.00,
	// 	status: "received",
	// }

	// using constructors
	myOrder := createNewOrder("1", 50.00, "received")

	// // setting field later
	// myOrder.createdAt = time.Now()

	// fmt.Println("Order struct ", myOrder)
	// //getting a field
	// fmt.Println(myOrder.status)

	// myOrder2 := order{
	// 	id:        "2",
	// 	amount:    100,
	// 	status:    "delivered",
	// 	createdAt: time.Now(),
	// }

	// myOrder.status = "paid"
	// fmt.Println("Order struct ", myOrder)
	// fmt.Println("Order struct ", myOrder2)

	// attaching behaviors/methods
	myOrder.changeStatus("confirmed")
	fmt.Println(myOrder)
	fmt.Println(myOrder.getAmount())

	// one time struct creation
	language := struct {
		name   string
		isGood bool
	}{
		name:   "golang",
		isGood: true,
	}
	fmt.Println(language)

	// inheritance via embeddings
	newEmployee := employee{
		person: person{
			name:  "Abhishek",
			phone: "1234567890",
		},
		email: "test@test.com",
	}

	fmt.Println(newEmployee)
	newEmployee.person.name = "Robin" // change is ok
	fmt.Println(newEmployee)
}
