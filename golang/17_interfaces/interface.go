package main

import "fmt"

type paymenter interface {
	pay(amount float32)
	refund(amount float32, account string)
}

type payment struct {
	gateway paymenter
}

func createNewPayment(gateway paymenter) *payment {
	newPayment := payment{
		gateway: gateway,
	}

	return &newPayment
}

func (p payment) makePayment(amount float32) {
	// calling the payment gateway
	// razorpayGateWay := razorpay{}
	// razorpayGateWay.pay(amount)
	// scenario: if new requirement comes to change the payment gateway
	// stripePaymentGateway := stripe{} // This works but it violates the SOLID principle Open close principle
	// stripePaymentGateway.pay(amount)

	// Solution to respect the Open close principle
	p.gateway.pay(amount)
}

func (p payment) refundPayment(amount float32, account string) {
	p.gateway.refund(amount, account)
}

// payment gateways
type razorpay struct{}

func (r razorpay) pay(amount float32) {
	// logic to make the payment
	fmt.Println("Making payment using razorpay of amount:", amount)
}

type stripe struct{}

func (s stripe) pay(amount float32) {
	// logic to make the payment
	fmt.Println("Making payment using stripe of amount:", amount)
}

type paypal struct{}

func (p paypal) pay(amount float32) {
	// logic to make the payment
	fmt.Println("Making payment using paypal of amount:", amount)
}

func (p paypal) refund(amount float32, account string) {
	// logic for refund
	fmt.Println("Refunding amount:", amount, "to account:", account)
}

// fake payment gateway for testing purpose
type fakePaymentGateway struct{}

func (f fakePaymentGateway) pay(amount float32) {
	// logic to make the payment
	fmt.Println("Making payment using fake payment gateway of amount:", amount)
}

func main() {
	newPayment := createNewPayment(paypal{})
	newPayment.makePayment(100.00)
	newPayment.refundPayment(100.00, "user123")
}
