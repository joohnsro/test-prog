package models

type User struct {
	ID       uint   `json:"id" gorm:"primaryKey"`
	Name     string `json:"name"`
	Email    string `json:"email" gorm:"unique"`
	Password string `json:"password"`
}

type AuthorizeUser struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

type UserProfile struct {
	ID    uint   `json:"id"`
	Name  string `json:"name"`
	Email string `json:"email"`
}
