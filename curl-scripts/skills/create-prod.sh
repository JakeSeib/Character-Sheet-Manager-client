#!/bin/bash

curl "https://floating-gorge-61213.herokuapp.com/skills" \
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
