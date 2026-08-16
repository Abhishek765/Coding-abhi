package main

import (
	"fmt"
	"sync"
)

type Post struct {
	views int
	mu    sync.Mutex
}

func (p *Post) inc(wg *sync.WaitGroup) {
	defer func() {
		p.mu.Unlock()
		wg.Done()
	}()
	p.mu.Lock() // we're specifically adding lock to specific place instead of whole function because that will destroy the usage of goroutines
	p.views += 1
}

func main() {
	var wg sync.WaitGroup
	myPost := Post{
		views: 0,
	}

	// still fine as this sync call
	// for i := 0; i < 100; i++ {
	// 	myPost.inc()
	// }

	// case when every increment runs inside a go routine - a separate thread
	// to avoid race condition between go routines we need a lock i.e mutex
	for i := 0; i < 100; i++ {
		wg.Add(1)
		go myPost.inc(&wg)
	}

	wg.Wait()
	fmt.Println(myPost.views)

}
