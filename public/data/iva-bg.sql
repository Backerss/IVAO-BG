-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 25, 2023 at 09:57 PM
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

INSERT INTO `bg_account` (`bg_id`, `bg_vid`, `bg_ivaoid`, `bg_fristname`, `bg_lastname`, `bg_email`, `bg_register_date`, `bg_password`, `bg_status`, `bg_lastlogin`) VALUES
(1, '111901', '600767', 'Teerapat', 'Dechnambuncharchai', 'bg-adir@ivao.aero', '26/6/23', '$2b$10$.2UYUS3.6Rp4zdSKr5Lmje78ECGJzAla1.tCERiy1kxM1ax9tWjFW', 'Active User', '-'),
(2, '111902', '686392', 'Thanayot', 'Kamme', 'bg-dir@ivao.aero', '26/6/23', '$2b$10$iqa2cZwF6LJA0taac0t/DufwnzCdu/PxcpP95ubKlnne4btFOALma', 'Active User', '-');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bg_account`
--
ALTER TABLE `bg_account`
  ADD PRIMARY KEY (`bg_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bg_account`
--
ALTER TABLE `bg_account`
  MODIFY `bg_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
