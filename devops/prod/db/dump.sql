
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `heticmadu` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `heticmadu`;
DROP TABLE IF EXISTS `client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `client` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) DEFAULT NULL,
  `address` varchar(128) DEFAULT NULL,
  `rse` varchar(128) DEFAULT NULL,
  `numberOfEmployees` int(11) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `perimeter` int(11) DEFAULT NULL,
  `status` varchar(32) DEFAULT NULL,
  `type` varchar(32) DEFAULT NULL,
  `creationDate` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `client_position`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `client_position` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `longitude` varchar(128) DEFAULT NULL,
  `latitude` varchar(128) DEFAULT NULL,
  `perimeter` int(11) DEFAULT NULL,
  `clientId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `clientId` (`clientId`),
  CONSTRAINT `client_position_ibfk_1` FOREIGN KEY (`clientId`) REFERENCES `client` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `point_of_interest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `point_of_interest` (
  `name` varchar(255) NOT NULL,
  `longitude` int(11) NOT NULL,
  `latitude` int(11) NOT NULL,
  `address` varchar(255) NOT NULL,
  `postalCode` int(11) NOT NULL,
  `monday` varchar(255) NOT NULL,
  `tuesday` varchar(255) NOT NULL,
  `wednesday` varchar(255) NOT NULL,
  `thursday` varchar(255) NOT NULL,
  `friday` varchar(255) NOT NULL,
  `saturday` varchar(255) NOT NULL,
  `sunday` varchar(255) NOT NULL,
  `schedule` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `averagePrice` varchar(255) NOT NULL,
  `glutenFree` tinyint(4) NOT NULL,
  `bio` varchar(255) NOT NULL,
  `disabledAccess` tinyint(4) NOT NULL,
  `greenScore` int(11) NOT NULL,
  `phoneNumber` varchar(255) NOT NULL,
  `logo` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `point_of_interest_has_tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `point_of_interest_has_tags` (
  `poiId` int(11) NOT NULL,
  `tagId` int(11) NOT NULL,
  PRIMARY KEY (`poiId`,`tagId`),
  KEY `IDX_982f67d6ea7c79925635d949f3` (`poiId`),
  KEY `IDX_93e1ffd994f5e25bee417b8636` (`tagId`),
  CONSTRAINT `FK_93e1ffd994f5e25bee417b86360` FOREIGN KEY (`tagId`) REFERENCES `point_of_interest` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_982f67d6ea7c79925635d949f32` FOREIGN KEY (`poiId`) REFERENCES `point_of_interest` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tag` (
  `tag` varchar(255) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(128) DEFAULT NULL,
  `lastName` varchar(128) DEFAULT NULL,
  `email` varchar(128) DEFAULT NULL,
  `password` varchar(128) DEFAULT NULL,
  `lastConnection` varchar(32) DEFAULT NULL,
  `pot` int(11) DEFAULT NULL,
  `status` varchar(32) DEFAULT NULL,
  `clientId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `clientId` (`clientId`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`clientId`) REFERENCES `client` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

