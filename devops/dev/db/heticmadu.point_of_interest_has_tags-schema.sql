/*!40101 SET NAMES binary*/;
/*!40014 SET FOREIGN_KEY_CHECKS=0*/;

/*!40103 SET TIME_ZONE='+00:00' */;
CREATE TABLE `point_of_interest_has_tags` (
  `poiId` int(11) NOT NULL,
  `tagId` int(11) NOT NULL,
  PRIMARY KEY (`poiId`,`tagId`),
  KEY `IDX_982f67d6ea7c79925635d949f3` (`poiId`),
  KEY `IDX_93e1ffd994f5e25bee417b8636` (`tagId`),
  CONSTRAINT `FK_93e1ffd994f5e25bee417b86360` FOREIGN KEY (`tagId`) REFERENCES `tag` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `FK_982f67d6ea7c79925635d949f32` FOREIGN KEY (`poiId`) REFERENCES `point_of_interest` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
