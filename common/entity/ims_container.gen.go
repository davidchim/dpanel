// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package entity

const TableNameContainer = "ims_container"

// Container mapped from table <ims_container>
type Container struct {
	ID         int32  `gorm:"column:id;type:INTEGER" json:"id"`
	Image      string `gorm:"column:image;type:text" json:"image"`
	Dockerfile string `gorm:"column:dockerfile;type:text" json:"dockerfile"`
	Status     int32  `gorm:"column:status;type:integer" json:"status"`
	Version    string `gorm:"column:version;type:text" json:"version"`
}

// TableName Container's table name
func (*Container) TableName() string {
	return TableNameContainer
}
