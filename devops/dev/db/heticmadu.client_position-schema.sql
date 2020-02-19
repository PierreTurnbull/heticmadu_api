/*!40101 SET NAMES binary*/;
/*!40014 SET FOREIGN_KEY_CHECKS=0*/;

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
