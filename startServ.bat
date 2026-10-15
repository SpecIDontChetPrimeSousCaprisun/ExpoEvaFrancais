#!/bin/bash

go run main.go & cloudflared tunnel --url https://localhost:8080
