package main

import "fmt"

// slice -> dynamic
// most used construct in go
// useful methods
func main() {

	// declaring a slice -> uninitialized slice is nil
	// var nums []int
	// fmt.Println(nums == nil)
	// fmt.Println(len(nums))

	// var nums = make([]int, 0)
	// capacity -> maximum numbers of elements can fit
	// fmt.Println(cap(nums))
	// fmt.Println(nums)
	// fmt.Println(nums)

	// nums = append(nums, 1)
	// nums[0] = 5 // to override
	// nums = append(nums, 2)
	// nums = append(nums, 3)
	// nums = append(nums, 4)
	// fmt.Println(nums)
	// fmt.Println(cap(nums)) // capacity automatically increases

	// short hand syntax
	// nums := []int{}
	// nums = append(nums, 1)
	// nums = append(nums, 2)
	// fmt.Println(nums)
	// fmt.Println(cap(nums))
	// fmt.Println(len(nums))

	// var nums = make([]int, 0, 5)
	// nums = append(nums, 2)
	// var nums2 = make([]int, len(nums))
	// // copy function
	// copy(nums2, nums)
	// fmt.Println(nums, nums2)

	// slice operator
	// var nums = []int{1, 2, 3}
	// var slicedNums = nums[0:2]
	// fmt.Println(slicedNums)
	// fmt.Println(nums[:1]) // starts from 0 index
	// fmt.Println(nums[1:]) // goes till last index (included)

	// slices package
	// var nums1 = []int{1, 2, 3}
	// var nums2 = []int{1, 2, 4}
	// fmt.Println(slices.Equal(nums1, nums2))

	// 2d slice/array
	// var nums = [][]int{
	// 	{1, 2, 3},
	// 	{4, 5, 6},
	// }

	// fmt.Println(nums)

	// Appending two slices
	var prime []int
	prime = append(prime, 2, 3) // Appending individual values
 
	morePrimes := []int{5, 7}
	prime = append(prime, morePrimes...) // Appending another slice using the '...' unpack operator

	fmt.Println(prime)

}
