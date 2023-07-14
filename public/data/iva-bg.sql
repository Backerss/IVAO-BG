-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 14, 2023 at 02:11 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `iva-bg`
--

-- --------------------------------------------------------

--
-- Table structure for table `bg_account`
--

CREATE TABLE `bg_account` (
  `bg_id` int(11) NOT NULL,
  `bg_vid` varchar(10) NOT NULL,
  `bg_ivaoid` varchar(10) NOT NULL,
  `bg_atc_rating` int(11) NOT NULL DEFAULT 1,
  `bg_pilot_rating` int(11) NOT NULL DEFAULT 1,
  `bg_fristname` varchar(60) NOT NULL,
  `bg_lastname` varchar(60) NOT NULL,
  `bg_email` varchar(60) NOT NULL,
  `bg_register_date` varchar(30) NOT NULL,
  `bg_password` varchar(120) NOT NULL,
  `bg_status` varchar(30) NOT NULL,
  `bg_lastlogin` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bg_account`
--

INSERT INTO `bg_account` (`bg_id`, `bg_vid`, `bg_ivaoid`, `bg_atc_rating`, `bg_pilot_rating`, `bg_fristname`, `bg_lastname`, `bg_email`, `bg_register_date`, `bg_password`, `bg_status`, `bg_lastlogin`) VALUES
(1, '111901', '600767', 9, 1, 'Teerapat', 'Dechnambuncharchai', 'bg-adir@ivao.aero', '26/6/23', '$2b$10$.2UYUS3.6Rp4zdSKr5Lmje78ECGJzAla1.tCERiy1kxM1ax9tWjFW', 'Active User', '-'),
(2, '111902', '686392', 9, 1, 'Thanayot', 'Kamme', 'bg-dir@ivao.aero', '26/6/23', '$2b$10$iqa2cZwF6LJA0taac0t/DufwnzCdu/PxcpP95ubKlnne4btFOALma', 'Active User', '-');

-- --------------------------------------------------------

--
-- Table structure for table `bg_atcrating`
--

CREATE TABLE `bg_atcrating` (
  `bg_id` int(11) NOT NULL,
  `bg_rating_name` varchar(30) NOT NULL,
  `bg_level` int(11) NOT NULL,
  `bg_img` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bg_atcrating`
--

INSERT INTO `bg_atcrating` (`bg_id`, `bg_rating_name`, `bg_level`, `bg_img`) VALUES
(1, 'ATC Applicant', 1, 'https://ivao.aero/data/images/ratings/atc/2.gif'),
(2, 'ATC Trainee', 2, 'https://ivao.aero/data/images/ratings/atc/3.gif'),
(3, 'Advanced ATC Trainee', 3, 'https://ivao.aero/data/images/ratings/atc/4.gif'),
(4, 'Aerodrome Controller', 4, 'https://ivao.aero/data/images/ratings/atc/5.gif'),
(5, 'Approach Controller', 5, 'https://ivao.aero/data/images/ratings/atc/6.gif'),
(6, 'Centre Controller', 6, 'https://ivao.aero/data/images/ratings/atc/7.gif'),
(7, 'Senior Controller', 7, 'https://ivao.aero/data/images/ratings/atc/8.gif'),
(8, 'Senior ATC Instructor', 8, 'https://ivao.aero/data/images/ratings/atc/9.gif'),
(9, 'Chief ATC Instructor', 9, 'https://ivao.aero/data/images/ratings/atc/10.gif');

-- --------------------------------------------------------

--
-- Table structure for table `bg_pilotrating`
--

CREATE TABLE `bg_pilotrating` (
  `bg_id` int(11) NOT NULL,
  `bg_rating_name` varchar(30) NOT NULL,
  `bg_level` int(11) NOT NULL,
  `bg_img` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bg_account`
--
ALTER TABLE `bg_account`
  ADD PRIMARY KEY (`bg_id`);

--
-- Indexes for table `bg_atcrating`
--
ALTER TABLE `bg_atcrating`
  ADD PRIMARY KEY (`bg_id`);

--
-- Indexes for table `bg_pilotrating`
--
ALTER TABLE `bg_pilotrating`
  ADD PRIMARY KEY (`bg_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bg_account`
--
ALTER TABLE `bg_account`
  MODIFY `bg_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `bg_atcrating`
--
ALTER TABLE `bg_atcrating`
  MODIFY `bg_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `bg_pilotrating`
--
ALTER TABLE `bg_pilotrating`
  MODIFY `bg_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
