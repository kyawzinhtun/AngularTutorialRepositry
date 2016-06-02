/*
SQLyog Ultimate v11.11 (64 bit)
MySQL - 5.5.5-10.1.9-MariaDB : Database - angular_tutorial
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`angular_tutorial` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `angular_tutorial`;

/*Table structure for table `product` */

DROP TABLE IF EXISTS `product`;

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) DEFAULT NULL,
  `product_price` double DEFAULT NULL,
  `product_category` varchar(255) DEFAULT NULL,
  KEY `product_id` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `product` */

insert  into `product`(`product_id`,`product_name`,`product_price`,`product_category`) values (1,'Dell',87888,'aa'),(2,'Asus',69858,'Laptop'),(3,'Cannon',630,'Camera');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
