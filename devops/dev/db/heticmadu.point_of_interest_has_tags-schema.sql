/*!40101 SET NAMES binary*/;
/*!40014 SET FOREIGN_KEY_CHECKS=0*/;

CREATE TABLE `point_of_interest_has_tags` (
  `tagId` int(11) DEFAULT NULL,
  `poiId` int(11) DEFAULT NULL,
  KEY `tagId` (`tagId`),
  KEY `poiId` (`poiId`),
  CONSTRAINT `point_of_interest_has_tags_ibfk_1` FOREIGN KEY (`tagId`) REFERENCES `tag` (`id`),
  CONSTRAINT `point_of_interest_has_tags_ibfk_2` FOREIGN KEY (`poiId`) REFERENCES `point_of_interest` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
