package controllers

import (
	"backend/database"
	"backend/models"
	"encoding/base64"
	"encoding/json"
	"net/http"

	"github.com/gin-gonic/gin"
)

func AuthorizeUser(c *gin.Context) {
	var input models.AuthorizeUser
	var user models.User

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	result := database.DB.Where("email = ?", input.Email).Where("password = ?", input.Password).First(&user)

	if result.Error != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Usuário ou senha inválidos"})
		return
	}

	var userProfile models.UserProfile
	userProfile = models.UserProfile{
		ID:    user.ID,
		Name:  user.Name,
		Email: user.Email,
	}

	encodedUser, _ := encodeUserToBase64(userProfile)

	c.SetCookie("session_token", encodedUser, 3600, "/", "localhost", false, false)
	c.JSON(http.StatusOK, gin.H{"message": "Autenticado com sucesso"})
}

func GetUsers(c *gin.Context) {
	var users []models.User
	database.DB.Find(&users)
	c.JSON(http.StatusOK, users)
}

func CreateUser(c *gin.Context) {
	var user models.User
	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	database.DB.Create(&user)
	c.JSON(http.StatusOK, user)
}

func encodeUserToBase64(user models.UserProfile) (string, error) {
	jsonBytes, err := json.Marshal(user)
	if err != nil {
		return "", err
	}
	return base64.StdEncoding.EncodeToString(jsonBytes), nil
}
