terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "4.78.0"
    }
  }
}

locals {
  prefix_name = "terraform-test"
}

provider "google-beta" {
  project = "wezadev"
  region  = "us-central1"
  zone    = "us-central1-c"
}

resource "google_compute_instance_from_machine_image" "machine-1" {
  provider             = google-beta
  name                 = var.machine_name_1
  zone                 = "us-central1-a"
  source_machine_image = var.machine_image
  // Override fields from machine image
  can_ip_forward = false
  labels = var.machine1_tags

  metadata_startup_script = <<-EOF
    #!/bin/bash
    echo "$(cat ~/.ssh/ansible.pub)" >> /home/${var.ssh_user}/.ssh/authorized_keys
    chmod 600 /home/${var.ssh_user}/.ssh/authorized_keys
  EOF
}

resource "google_compute_instance_from_machine_image" "machine-2" {
  provider             = google-beta
  name                 = var.machine_name_2
  zone                 = "us-central1-a"
  source_machine_image = var.machine_image
  // Override fields from machine image
  can_ip_forward       = false
  labels               = var.machine2_tags

  metadata_startup_script = <<-EOF
    #!/bin/bash
    echo "$(cat ~/.ssh/ansible.pub)" >> /home/${var.ssh_user}/.ssh/authorized_keys
    chmod 600 /home/${var.ssh_user}/.ssh/authorized_keys
  EOF
}

output "machine1_data" {
  value = google_compute_instance_from_machine_image.machine-1
  description = "Instance data descrition"
}

output "machine2_data" {
  value = google_compute_instance_from_machine_image.machine-1
  description = "Instance data descrition"
}
