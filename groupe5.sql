-- MySQL dump 10.13  Distrib 8.0.18, for macos10.14 (x86_64)
--
-- Host: localhost    Database: groupe5
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
/*!40000 ALTER TABLE `client` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client_position`
--

DROP TABLE IF EXISTS `client_position`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client_position` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `longitude` varchar(128) DEFAULT NULL,
  `latitude` varchar(128) DEFAULT NULL,
  `perimeter` int(11) DEFAULT NULL,
  `clientId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `clientId` (`clientId`),
  CONSTRAINT `client_position_ibfk_1` FOREIGN KEY (`clientId`) REFERENCES `client` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client_position`
--

LOCK TABLES `client_position` WRITE;
/*!40000 ALTER TABLE `client_position` DISABLE KEYS */;
/*!40000 ALTER TABLE `client_position` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `point_of_interest`
--

DROP TABLE IF EXISTS `point_of_interest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `point_of_interest` (
  `name` varchar(255) NOT NULL,
  `longitude` int(11) NOT NULL,
  `latitude` int(11) NOT NULL,
  `adress` varchar(255) NOT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `point_of_interest`
--

LOCK TABLES `point_of_interest` WRITE;
/*!40000 ALTER TABLE `point_of_interest` DISABLE KEYS */;
INSERT INTO `point_of_interest` VALUES ('',0,0,'',0,'','','','','','','','','','','',0,'',0,0,'','','','',1),('',0,0,'',0,'','','','','','','','','','','',0,'',0,0,'','','','',2),('',0,0,'',0,'','','','','','','','','','','',0,'',0,0,'','','','',3),('',0,0,'',0,'','','','','','','','','','','',0,'',0,0,'','','','',4),('',0,0,'',0,'','','','','','','','','','','',0,'',0,0,'','','','',5),('',0,0,'',0,'','','','','','','','','','','',0,'',0,0,'','','','',6),('',0,0,'',0,'','','','','','','','','','','',0,'',0,0,'','','','',7),('',0,0,'',0,'','','','','','','','','','','',0,'',0,0,'','','','',8),('',0,0,'',0,'','','','','','','','','','','',0,'',0,0,'','','','',9),('',0,0,'',0,'','','','','','','','','','','',0,'',0,0,'','','','',10),('',0,0,'',0,'','','','','','','','','','','',0,'',0,0,'','','','',11),('',0,0,'',0,'','','','','','','','','','','',0,'',0,0,'','','','',12),('',0,0,'',0,'','','','','','','','','','','',0,'',0,0,'','','','',13),('bjr pierrot gg',1,2,'momo',91100,'RE','RE','RE','RE','RE','RE','RE','3','4','3 rue des FOUS','300',1,'OE',1,3,'06676767','gigastring','ya pas de desc','OE',14),('bjr sdq gg',1,2,'momo',91100,'RE','RE','RE','RE','RE','RE','RE','3','4','3 rue des FOUS','300',1,'OE',1,3,'06676767','gigastring','ya pas de desc','OE',15),('bjr sdq gg',1,2,'momo',91100,'RE','RE','RE','RE','RE','RE','RE','3','4','3 rue des FOUS','300',1,'OE',1,3,'06676767','gigastring','ya pas de desc','OE',16),('bjr sdq gg',1,2,'momo',91100,'RE','RE','RE','RE','RE','RE','RE','3','4','3 rue des FOUS','300',1,'OE',1,3,'06676767','gigastring','ya pas de desc','OE',17),('test vico',1,2,'momo',91100,'RE','RE','RE','RE','RE','RE','RE','3','4','3 rue des FOUS','300',1,'OE',1,3,'06676767','gigastring','ya pas de desc','OE',18),('hello',1,2,'momo',91100,'RE','RE','RE','RE','RE','RE','RE','3','4','3 rue des FOUS','300',1,'OE',1,3,'06676767','gigastring','ya pas de desc','OE',19),('hellooooo',1,2,'momo',91100,'RE','RE','RE','RE','RE','RE','RE','3','4','3 rue des FOUS','300',1,'OE',1,3,'06676767','gigastring','ya pas de desc','OE',20),('hellooooo',1,2,'momo',91100,'RE','RE','RE','RE','RE','RE','RE','3','4','3 rue des FOUS','300',1,'OE',1,3,'06676767','gigastring','ya pas de desc','OE',21),('bjr pierrot gg',1,2,'momo',91100,'RE','RE','RE','RE','RE','RE','RE','3','4','3 rue des FOUS','300',1,'OE',1,3,'06676767','gigastring','ya pas de desc','OE',22),('bjr pierrot gg',1,2,'momo',91100,'RE','RE','RE','RE','RE','RE','RE','3','4','3 rue des FOUS','300',1,'OE',1,3,'06676767','gigastring','ya pas de desc','OE',23),('bjr pierrot gg',1,2,'momo',91100,'RE','RE','RE','RE','RE','RE','RE','3','4','3 rue des FOUS','300',1,'OE',1,3,'06676767','gigastring','ya pas de desc','OE',24),('bjr pierrot gg',1,2,'momo',91100,'RE','RE','RE','RE','RE','RE','RE','3','4','3 rue des FOUS','300',1,'OE',1,3,'06676767','gigastring','ya pas de desc','OE',25),('bjr pierrot gg',1,2,'momo',91100,'RE','RE','RE','RE','RE','RE','RE','3','4','3 rue des FOUS','300',1,'OE',1,3,'06676767','gigastring','ya pas de desc','OE',26),('bjr pierrot gg',1,2,'momo',91100,'RE','RE','RE','RE','RE','RE','RE','3','4','3 rue des FOUS','300',1,'OE',1,3,'06676767','gigastring','ya pas de desc','OE',27),('bjr pierrot gg',1,2,'momo',91100,'RE','RE','RE','RE','RE','RE','RE','3','4','3 rue des FOUS','300',1,'OE',1,3,'06676767','gigastring','ya pas de desc','OE',28);
/*!40000 ALTER TABLE `point_of_interest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `point_of_interest_has_tags`
--

DROP TABLE IF EXISTS `point_of_interest_has_tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `point_of_interest_has_tags` (
  `poiId` int(11) NOT NULL,
  `tagId` int(11) NOT NULL,
  PRIMARY KEY (`poiId`,`tagId`),
  KEY `IDX_982f67d6ea7c79925635d949f3` (`poiId`),
  KEY `IDX_93e1ffd994f5e25bee417b8636` (`tagId`),
  CONSTRAINT `FK_93e1ffd994f5e25bee417b86360` FOREIGN KEY (`tagId`) REFERENCES `point_of_interest` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_982f67d6ea7c79925635d949f32` FOREIGN KEY (`poiId`) REFERENCES `point_of_interest` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `point_of_interest_has_tags`
--

LOCK TABLES `point_of_interest_has_tags` WRITE;
/*!40000 ALTER TABLE `point_of_interest_has_tags` DISABLE KEYS */;
INSERT INTO `point_of_interest_has_tags` VALUES (27,1),(28,1),(28,2);
/*!40000 ALTER TABLE `point_of_interest_has_tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tag`
--

DROP TABLE IF EXISTS `tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tag` (
  `tag` varchar(255) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag`
--

LOCK TABLES `tag` WRITE;
/*!40000 ALTER TABLE `tag` DISABLE KEYS */;
INSERT INTO `tag` VALUES ('Un tag incroyable',1),('Un tag vraiment fou',2),('un tag',3);
/*!40000 ALTER TABLE `tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-02-19 13:42:09
