/*!40101 SET NAMES binary*/;
/*!40014 SET FOREIGN_KEY_CHECKS=0*/;

CREATE TABLE `point_of_interest` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) DEFAULT NULL,
  `longitude` varchar(128) DEFAULT NULL,
  `latitude` varchar(128) DEFAULT NULL,
  `address` varchar(128) DEFAULT NULL,
  `postalCode` varchar(10) DEFAULT NULL,
  `monday` varchar(32) DEFAULT NULL,
  `tuesday` varchar(32) DEFAULT NULL,
  `wednesday` varchar(32) DEFAULT NULL,
  `thursday` varchar(32) DEFAULT NULL,
  `friday` varchar(32) DEFAULT NULL,
  `saturday` varchar(32) DEFAULT NULL,
  `sunday` varchar(32) DEFAULT NULL,
  `email` varchar(128) DEFAULT NULL,
  `password` varchar(128) DEFAULT NULL,
  `lastConnection` varchar(32) DEFAULT NULL,
  `pot` int(11) DEFAULT NULL,
  `status` varchar(32) DEFAULT NULL,
  `clientId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `clientId` (`clientId`),
  CONSTRAINT `point_of_interest_ibfk_1` FOREIGN KEY (`clientId`) REFERENCES `client` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
