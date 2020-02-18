cp ~/.ssh/heticmadu ./private_key
tar cvf secrets.tar private_key .env
travis encrypt-file secrets.tar ./devops/secrets.tar.enc --com
rm ./private_key ./secrets.tar