/*!40101 SET NAMES binary*/;
/*!40014 SET FOREIGN_KEY_CHECKS=0*/;

CREATE TABLE `client_position` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `perimeter` int(11) NOT NULL,
  `clientId` int(11) NOT NULL,
  `longitude` varchar(255) NOT NULL,
  `latitude` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_0dc1d558b53ca2163b628ff2537` (`clientId`),
  CONSTRAINT `FK_0dc1d558b53ca2163b628ff2537` FOREIGN KEY (`clientId`) REFERENCES `client` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
