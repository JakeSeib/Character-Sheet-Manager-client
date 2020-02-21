#!/bin/bash

curl "https://floating-gorge-61213.herokuapp.com/characters" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "character": {
      "name": "'"${NAME}"'"
    }
  }'

echo
