cp ~/.ssh/heticmadu ./devops/secrets/private_key
tar cvf secrets.tar ./devops/secrets/private_key ./devops/secrets/.env
travis encrypt-file secrets.tar ./devops/secrets/secrets.tar.enc --com
rm ./secrets.tar