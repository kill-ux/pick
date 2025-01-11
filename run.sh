#!/bin/bash

# Check if a commit message was passed
if [ -z "$1" ]; then
  echo "\n                                               \e[31mPlease provide a commit message.\e[0m\n"
  exit 1
fi

# Add all changes
git add .

# Commit with the provided message
git commit -m "$1"

# Push the changes
git push
