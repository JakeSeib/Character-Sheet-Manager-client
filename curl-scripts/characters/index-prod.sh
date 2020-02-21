#!/bin/bash

curl "https://floating-gorge-61213.herokuapp.com/characters" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
