#!/bin/bash

curl "http://localhost:4741/skills" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "skill": {
      "name": "'"${NAME}"'"
    }
  }'

echo
