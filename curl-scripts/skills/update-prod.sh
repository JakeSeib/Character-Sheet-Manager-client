#!/bin/bash

curl "https://floating-gorge-61213.herokuapp.com/skills/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "skill": {
      "name": "'"${NAME}"'"
    }
  }'

  echo
