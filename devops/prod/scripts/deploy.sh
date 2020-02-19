# install dependencies
sudo apt-get update
sudo apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common \
    mysql-client-core-5.7
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
sudo apt-get install -y docker-ce docker-ce-cli containerd.io
sudo apt-get install -y docker-compose

# start docker
sudo docker-compose -f ./docker-compose.api.yml down --rmi all
sudo docker system prune -f -a
sudo docker-compose -f ./docker-compose.api.yml up -d

# clean directory
rm ./docker-compose.api.yml
rm ./.env
rm ./dump.sql