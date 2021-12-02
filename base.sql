-- --------------------------------------------------------
-- Hôte:                         127.0.0.1
-- Version du serveur:           5.7.21 - MySQL Community Server (GPL)
-- SE du serveur:                Win64
-- HeidiSQL Version:             11.1.0.6116
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Listage de la structure de la base pour base
CREATE DATABASE IF NOT EXISTS `base` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `base`;

-- Listage de la structure de la table base. eleve
CREATE TABLE IF NOT EXISTS `eleve` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `appelation` varchar(255) NOT NULL,
  `niveau` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- Listage des données de la table base.eleve : 3 rows
/*!40000 ALTER TABLE `eleve` DISABLE KEYS */;
INSERT INTO `eleve` (`id`, `appelation`, `niveau`) VALUES
	(1, 'Romeo', 'T2'),
	(2, 'Solange', 'CE'),
	(3, 'Mikael', '7ème'),
	(4, 'RAKOTO', '8ème'),
	(5, 'RASOA', 'T2'),
	(6, 'RAKELITAFITA', 'T1');
/*!40000 ALTER TABLE `eleve` ENABLE KEYS */;

-- Listage de la structure de la table base. user
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `appelation` varchar(255) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `droit` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Listage des données de la table base.user : 1 rows
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `email`, `appelation`, `nom`, `prenom`, `droit`, `password`) VALUES
	(1, 'ntsoa.s118@gmail.com', 'Ntsoa', 'MM', 'Ntsoa', 'Admin', '$2b$10$mc5ZDmCUy544yQNWxNr2GeN5gFKlmDaO4U6c35q97Spam9pYUz5Oa'),
	(3, 'bema@gmail.com', 'Bemakely', 'RAKOTO', 'Bema', 'Niveau 2', '$2b$10$wsAJgGCgA9np8nKa6E.al.bWwHvXZrH8Rt3mJYVGz4LuM1Q5GogNW');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
