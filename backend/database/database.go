package database

import (
	"fmt"
	"log"
	"os"

	"backend/models"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	dsn := fmt.Sprintf(
		"host=%s user=%s password=%s dbname=%s port=%s sslmode=disable",
		getEnv("DB_HOST", "localhost"),
		getEnv("DB_USER", "root"),
		getEnv("DB_PASSWORD", "root"),
		getEnv("DB_NAME", "recrutament_e_selecao"),
		getEnv("DB_PORT", "5432"),
	)

	database, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Erro ao conectar com o banco:", err)
	}

	database.AutoMigrate(&models.User{})

	DB = database
}

func getEnv(key, fallback string) string {
	if value := os.Getenv(key); value != "" {
		return value
	}
	return fallback
}
