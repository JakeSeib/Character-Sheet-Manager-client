#!/bin/bash

curl "https://floating-gorge-61213.herokuapp.com/character_skills" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "character_skill": {
      "level": "'"${LVL}"'",
      "character_id": "'"${CID}"'",
      "skill_id": "'"${SID}"'"
    }
  }'

echo
