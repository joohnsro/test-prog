package main

import (
	"backend/controllers"
	"backend/database"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	database.Connect()

	r.POST("/user", controllers.AuthorizeUser)
	r.GET("/users", controllers.GetUsers)
	r.POST("/users", controllers.CreateUser)

	r.Run()
}
