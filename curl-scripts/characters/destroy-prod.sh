#!/bin/bash

curl "https://floating-gorge-61213.herokuapp.com/characters/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}" \

echo
