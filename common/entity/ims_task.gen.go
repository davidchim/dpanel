// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package entity

const TableNameTask = "ims_task"

// Task mapped from table <ims_task>
type Task struct {
	ID      int32  `gorm:"column:id;type:INTEGER" json:"id"`
	SiteID  int32  `gorm:"column:site_id;type:integer" json:"siteId"`
	Status  int32  `gorm:"column:status;type:integer" json:"status"`
	Message string `gorm:"column:message;type:text" json:"message"`
	Step    string `gorm:"column:step;type:text" json:"step"`
}

// TableName Task's table name
func (*Task) TableName() string {
	return TableNameTask
}
