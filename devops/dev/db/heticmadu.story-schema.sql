/*!40101 SET NAMES binary*/;
/*!40014 SET FOREIGN_KEY_CHECKS=0*/;

CREATE TABLE `story` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `text` varchar(255) NOT NULL,
  `themeId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_a137b691db85ac439f32f198f0a` (`themeId`),
  CONSTRAINT `FK_a137b691db85ac439f32f198f0a` FOREIGN KEY (`themeId`) REFERENCES `theme` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;