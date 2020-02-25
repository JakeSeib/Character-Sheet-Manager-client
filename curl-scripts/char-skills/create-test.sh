#!/bin/bash

curl "http://localhost:4741/character_skills" \
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
