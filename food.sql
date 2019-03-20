-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 19, 2019 at 04:11 PM
-- Server version: 5.6.26
-- PHP Version: 5.6.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `food`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `email`, `password`) VALUES
(1, 'admin', 'sabbiralrazi@gmail.com', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE IF NOT EXISTS `comment` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `resid` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`id`, `name`, `comment`, `resid`) VALUES
(11, 'Mr manik', 'one of the best burger', 2),
(12, 'chillox banani', 'awesome taste', 1),
(15, 'chillox banani', 'one of the best burger place  in the city', 1),
(16, 'Mr manik', 'taste is good', 2),
(17, 'chillox banani', 'taste is good', 1),
(18, 'chillox banani', 'service is good', 1),
(19, 'chillox banani', 'one of the best burger', 1),
(20, 'BURGEROLOGY', 'good behavior', 3),
(21, 'BURGEROLOGY', 'best place for burger', 3),
(22, 'BURGEROLOGY', 'taste is awesome you have to try their burger', 3),
(23, 'Cafe Entro', 'wrost service', 4),
(24, 'Cafe Entro', 'interior is good and also the food', 4),
(25, 'Man Mo', 'beautiful place for eating', 5),
(26, 'Man Mo', 'food is not so good according their price', 5),
(27, 'Cafe Entro', 'price is reasonable', 4);

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE IF NOT EXISTS `member` (
  `id` int(11) NOT NULL,
  `username` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`id`, `username`, `email`, `password`) VALUES
(1, 'sabbir', 'sabbiralrazi@gmail.com', 'sabbir'),
(4, 'jvy ', 'sabbiralrazi@gmail.com', 'jvy');

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE IF NOT EXISTS `menu` (
  `id` int(11) NOT NULL,
  `item` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `resid` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`id`, `item`, `price`, `resid`) VALUES
(2, 'double decker burger ', '260tk', 1),
(3, 'fresh fry ', '100tk', 1),
(4, 'chickhen burger ', '160tk', 1),
(5, 'Beef Burger', ' 200tk', 1),
(6, 'drinks', ' 30tk', 1),
(7, 'fresh fry ', '100tk', 2),
(8, 'chickhen burger ', '150tk', 2),
(9, 'BBQ Chicken Cheese burger ', '200tk', 2),
(10, 'Beef Burger', '180tk', 2),
(11, 'drinks', '30tk', 2),
(12, 'smooky burger ', '180tk', 3),
(13, 'fresh fry ', '100tk', 3),
(14, 'pleasant beef burger ', '220tk', 3),
(15, 'pleasant chicken burger ', '160tk', 3),
(16, 'drinks', '30tk', 3),
(17, 'fried rice,vegetable,chicken curry ', '220tk', 4),
(18, 'pizza', '1220tk', 4),
(19, 'fried rice,vegetable,chicken curry,beef curry,drinks', '380tk', 4),
(20, 'checf special rice bowl', '400tk', 5),
(21, 'seafood rice bowl', '400tk', 5);

-- --------------------------------------------------------

--
-- Table structure for table `restaurent`
--

CREATE TABLE IF NOT EXISTS `restaurent` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `background` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `restaurent`
--

INSERT INTO `restaurent` (`id`, `name`, `location`, `background`) VALUES
(1, 'chillox banani', 'Banani, Dhaka 1212	', 'This is a burger restaurent and their motto"Burgers || Fries || Shakes 100% halal"'),
(2, 'Mr. Manik Foods', 'House No.4, Sector-7 Rabindra Sarani,Uttara, Dhaka 1230', 'Specially we make Best Burger in Bangladesh and Founding date:13 June 2016'),
(3, 'BURGEROLOGY', ' KA 24/4, Sarkar Market, (1st Floor Beside Genius, 258 Bashundhara Rd, Dhaka 1229', 'We created Burgerology because we know you want, and deserve a high-quality craft burger. We''re not a place that does burgers on the side'),
(4, 'Cafe Entro', 'Bti The Laureate, House 56, Level 4, Block F, Road No. 11, Banani, Dhaka 1212', 'Cafe Entro inaugurated their Banani branch with the promise to serve the best food in town.'),
(5, 'Man Mo', 'House 6/A, Road 113, Top Floor, Gulshan 2, 1212 Dhaka, Bangladesh', 'Healty food, beautiful interior.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `restaurent`
--
ALTER TABLE `restaurent`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=28;
--
-- AUTO_INCREMENT for table `member`
--
ALTER TABLE `member`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=22;
--
-- AUTO_INCREMENT for table `restaurent`
--
ALTER TABLE `restaurent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
