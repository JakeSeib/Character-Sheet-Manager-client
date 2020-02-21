#!/bin/bash

curl "https://floating-gorge-61213.herokuapp.com/characters/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "character": {
      "high_concept": "'"${HC}"'"
    }
  }'

  echo
