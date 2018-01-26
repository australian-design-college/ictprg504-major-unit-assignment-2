CREATE TABLE `sweets` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `sweets` WRITE;

INSERT INTO `sweets` (`id`, `name`)
VALUES
	(1,'Everlasting Gobstoppers'),
	(2,'Whipple-scrumptious Fudgemallow Delight'),
	(3,'Stickjaw for Talkative Parents'),
	(4,'Sugar-coated Pencils for Sucking');

UNLOCK TABLES;
