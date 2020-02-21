#!bin/bash
# VARIABLE=VALUE sh curl-scripts/auth/sign-up-prod.sh

# don't use a password you use for any real websites!
curl "https://floating-gorge-61213.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "name": "testname",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo
