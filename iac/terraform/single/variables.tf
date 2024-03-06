
variable "machine_image" {
  type = string
  description = "The instance type to use for the machine image. Deployed by terraform"
}


variable "machine_name" {
  type = string
  description = "The name of the machine image. Deployed by terraform"
}

variable "machine_tags" {
  type = object({
    environment = string
    application = string
})
  description = "These are tags"
}

variable "ssh_user" {
  type = string
  description = "SSH user to add to authorized_keys"
}