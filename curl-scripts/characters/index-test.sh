#!/bin/bash

curl "http://localhost:4741/characters" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
