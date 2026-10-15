package main

import(
	"net/http"
	"fmt"
	"log"
)

func main() {
	fileServer := http.FileServer(http.Dir("./"))
	http.Handle("/", fileServer)
	
	fmt.Printf("Starting serv at port 8080\n")
	
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}
}
