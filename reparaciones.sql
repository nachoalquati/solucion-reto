-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-02-2023 a las 00:29:54
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `reparaciones`
--
CREATE DATABASE IF NOT EXISTS `reparaciones` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `reparaciones`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clients`
--

CREATE TABLE `clients` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `phone` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clients`
--

INSERT INTO `clients` (`id`, `email`, `name`, `phone`) VALUES
(1, 'test@test', 'Test Test', '11111111'),
(2, 'cliente1@example.com', 'Juan Pérez', '1234567890'),
(3, 'cliente2@example.com', 'Ana Gómez', '2345678901'),
(4, 'cliente3@example.com', 'Pedro Torres', '3456789012'),
(5, 'cliente4@example.com', 'María López', '4567890123'),
(6, 'cliente5@example.com', 'Carlos Ruiz', '5678901234'),
(7, 'cliente6@example.com', 'Laura Castro', '6789012345'),
(8, 'cliente7@example.com', 'Antonio García', '7890123456'),
(9, 'cliente8@example.com', 'Isabel Martínez', '8901234567'),
(10, 'cliente9@example.com', 'Javier Sánchez', '9012345678'),
(11, 'cliente10@example.com', 'Lucía Fernández', '0123456789'),
(12, 'cliente11@example.com', 'Federico Díaz', '1234509876'),
(13, 'cliente12@example.com', 'Carmen Ramírez', '2345610987'),
(14, 'cliente13@example.com', 'Roberto González', '3456721098'),
(15, 'cliente14@example.com', 'Marta Vázquez', '4567832109'),
(16, 'cliente15@example.com', 'Diego Alonso', '5678943210'),
(17, 'cliente16@example.com', 'Elena Núñez', '6789054321'),
(18, 'cliente17@example.com', 'Juanjo Romero', '7890165432'),
(19, 'cliente18@example.com', 'Sara Pérez', '8901276543'),
(20, 'cliente19@example.com', 'Manuel Rodríguez', '9012387654'),
(21, 'cliente20@example.com', 'Raquel García', '0123498765'),
(22, 'cliente21@example.com', 'Pablo Martín', '1234609877'),
(23, 'cliente22@example.com', 'Lucas Gutiérrez', '2345710988'),
(24, 'cliente23@example.com', 'Esther Díaz', '3456821099'),
(25, 'cliente24@example.com', 'Alejandro Castro', '4567932210'),
(26, 'cliente25@example.com', 'Cristina García', '5679043321'),
(27, 'cliente26@example.com', 'David García', '6780154442'),
(28, 'cliente27@example.com', 'Nuria Fernández', '7891265553'),
(29, 'cliente28@example.com', 'Miguel Ángel Sánchez', '8902376664'),
(30, 'cliente29@example.com', 'Irene Martínez', '9013487775'),
(31, 'cliente30@example.com', 'José Manuel Pérez', '0124598886'),
(32, 'cliente31@example.com', 'Mónica González', '1235709997'),
(33, 'cliente32@example.com', 'Rubén Rodríguez', '2346821108'),
(34, 'cliente33@example.com', 'Sofía Martín', '3457932219'),
(35, 'cliente34@example.com', 'Víctor Ruiz', '4569043330'),
(36, 'cliente35@example.com', 'Patricia Jiménez', '5670154441'),
(37, 'cliente36@example.com', 'Jorge Alonso', '6781265552'),
(38, 'cliente37@example.com', 'Leticia Núñez', '7892376663'),
(39, 'cliente38@example.com', 'Javier García', '8903487774'),
(40, 'cliente39@example.com', 'Natalia Martínez', '9014598885'),
(41, 'cliente40@example.com', 'Lionel Messi', '02236852173'),
(52, 'ignacioalquati@gmail.com', 'Ignacio Alquati', '5492236852173');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `phones`
--

CREATE TABLE `phones` (
  `id` int(11) NOT NULL,
  `model` varchar(70) NOT NULL,
  `observation` varchar(50) NOT NULL,
  `clientId` int(11) NOT NULL,
  `admissionDate` datetime NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `phones`
--

INSERT INTO `phones` (`id`, `model`, `observation`, `clientId`, `admissionDate`, `status`) VALUES
(1, 'Samsung Galaxy S21', 'La pantalla está rota', 1, '2023-02-18 12:19:03', 1),
(2, 'iPhone 12 Pro', 'El botón de encendido no funciona', 2, '2023-02-18 12:19:03', 2),
(3, 'Xiaomi Mi 11', 'La batería dura muy poco', 3, '2023-02-18 12:19:03', 1),
(4, 'OnePlus 9', 'La cámara trasera no enfoca bien', 4, '2023-02-18 12:19:03', 3),
(5, 'Google Pixel 5', 'El altavoz suena distorsionado', 5, '2023-02-18 12:19:03', 2),
(6, 'Motorola Moto G Power', 'El micrófono no funciona', 6, '2023-02-18 12:19:03', 1),
(7, 'LG Wing', 'La pantalla táctil no responde correctamente', 7, '2023-02-18 12:19:03', 2),
(8, 'Sony Xperia 5 II', 'El puerto USB-C está dañado', 8, '2023-02-18 12:19:03', 3),
(9, 'Samsung Galaxy Note 20 Ultra', 'El lector de huellas no reconoce mi dedo', 9, '2023-02-18 12:19:03', 1),
(10, 'iPhone SE (2020)', 'El botón de inicio está hundido', 10, '2023-02-18 12:19:03', 2),
(11, 'Xiaomi Poco X3 Pro', 'El WiFi no se conecta', 11, '2023-02-18 12:19:03', 3),
(12, 'OnePlus Nord', 'La cámara frontal no funciona', 12, '2023-02-18 12:19:03', 1),
(13, 'Google Pixel 4a', 'La pantalla tiene un pixel muerto', 13, '2023-02-18 12:19:03', 2),
(14, 'Motorola Moto G Stylus', 'El lápiz no funciona', 14, '2023-02-18 12:19:03', 3),
(15, 'LG Velvet', 'La batería se descarga muy rápido', 15, '2023-02-18 12:19:03', 1),
(16, 'Sony Xperia 1 II', 'El altavoz de llamada no se escucha', 16, '2023-02-18 12:19:03', 2),
(17, 'Samsung Galaxy S20 FE', 'El lector de tarjetas SIM está roto', 17, '2023-02-18 12:19:03', 3),
(18, 'iPhone XR', 'El botón lateral se atasca', 18, '2023-02-18 12:19:03', 1),
(19, 'Xiaomi Redmi Note 10 Pro', 'El GPS no funciona correctamente', 19, '2023-02-18 12:19:03', 2),
(20, 'OnePlus 8T', 'La batería se hincha', 20, '2023-02-18 12:19:03', 3),
(21, 'Google Pixel 4 XL', 'La cámara trasera no enfoca correctamente', 21, '2023-02-18 12:19:03', 1),
(22, 'Motorola Moto G Play', 'El botón de volumen está atascado', 22, '2023-02-18 12:19:03', 2),
(23, 'LG K92 5G', 'El botón de encendido está suelto', 23, '2023-02-18 12:19:03', 3),
(24, 'Sony Xperia 10 II', 'La pantalla tiene manchas negras', 24, '2023-02-18 12:19:03', 1),
(25, 'Samsung Galaxy A71', 'La carga rápida no funciona', 25, '2023-02-18 12:19:03', 2),
(26, 'iPhone 11', 'El altavoz de música no funciona', 26, '2023-02-18 12:19:03', 3),
(27, 'Xiaomi Mi 10T Pro', 'El botón de inicio no responde', 27, '2023-02-18 12:19:03', 1),
(28, 'Motorola Moto G Plus', 'La pantalla no prende.', 41, '2023-02-18 18:16:43', 1),
(34, 'Samsung Galaxy 21', 'No funciona.', 1, '2023-02-19 19:57:30', 1),
(35, 'Samsung Galaxy Lite ', 'La entrada usb falla.', 1, '2023-02-19 19:58:58', 1),
(36, 'I Phone 11', 'Se rompió la cámara frontal.', 52, '2023-02-19 20:44:26', 1),
(37, 'Samsung Galaxy 21', 'No prende la pantalla y el botón de sonido no resp', 52, '2023-02-19 20:48:02', 1),
(38, 'Samsung Galaxy 21', 'Cambio de batería urgente.', 29, '2023-02-19 21:33:45', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `repairs`
--

CREATE TABLE `repairs` (
  `id` int(11) NOT NULL,
  `amount` double DEFAULT NULL,
  `observation` varchar(255) NOT NULL,
  `date` datetime NOT NULL,
  `phoneId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `repairs`
--

INSERT INTO `repairs` (`id`, `amount`, `observation`, `date`, `phoneId`) VALUES
(1024, 489, 'Reparación del celular requiere 8 repuestos y llevará 2 días.', '2023-02-01 12:29:03', 1),
(1025, 218, 'Reparación del celular requiere 9 repuestos y llevará 5 días.', '2023-01-28 12:29:03', 2),
(1026, 879, 'Reparación del celular requiere 8 repuestos y llevará 8 días.', '2023-02-07 12:29:03', 3),
(1027, 875, 'Reparación del celular requiere 6 repuestos y llevará 8 días.', '2023-02-08 12:29:03', 4),
(1028, 402, 'Reparación del celular requiere 6 repuestos y llevará 5 días.', '2023-02-02 12:29:03', 5),
(1029, 167, 'Reparación del celular requiere 2 repuestos y llevará 2 días.', '2023-02-13 12:29:03', 6),
(1030, 88, 'Reparación del celular requiere 3 repuestos y llevará 10 días.', '2023-01-19 12:29:03', 7),
(1031, 725, 'Reparación del celular requiere 11 repuestos y llevará 9 días.', '2023-02-15 12:29:03', 8),
(1032, 745, 'Reparación del celular requiere 3 repuestos y llevará 10 días.', '2023-01-21 12:29:03', 9),
(1033, 929, 'Reparación del celular requiere 5 repuestos y llevará 3 días.', '2023-01-29 12:29:03', 10),
(1034, 955, 'Reparación del celular requiere 4 repuestos y llevará 9 días.', '2023-01-21 12:29:03', 11),
(1035, 111, 'Reparación del celular requiere 6 repuestos y llevará 5 días.', '2023-02-08 12:29:03', 12),
(1036, 885, 'Reparación del celular requiere 5 repuestos y llevará 4 días.', '2023-02-03 12:29:03', 13),
(1037, 407, 'Reparación del celular requiere 8 repuestos y llevará 4 días.', '2023-02-02 12:29:03', 14),
(1038, 933, 'Reparación del celular requiere 4 repuestos y llevará 8 días.', '2023-01-30 12:29:03', 15),
(1039, 311, 'Reparación del celular requiere 8 repuestos y llevará 5 días.', '2023-01-20 12:29:03', 16),
(1040, 696, 'Reparación del celular requiere 3 repuestos y llevará 10 días.', '2023-01-26 12:29:03', 17),
(1041, 701, 'Reparación del celular requiere 9 repuestos y llevará 2 días.', '2023-01-18 12:29:03', 18),
(1042, 928, 'Reparación del celular requiere 1 repuestos y llevará 5 días.', '2023-01-28 12:29:03', 19),
(1043, 865, 'Reparación del celular requiere 4 repuestos y llevará 11 días.', '2023-01-21 12:29:03', 20),
(1044, 599, 'Reparación del celular requiere 7 repuestos y llevará 3 días.', '2023-02-11 12:29:03', 21),
(1045, 82, 'Reparación del celular requiere 5 repuestos y llevará 9 días.', '2023-01-30 12:29:03', 22),
(1046, 861, 'Reparación del celular requiere 7 repuestos y llevará 5 días.', '2023-02-13 12:29:03', 23),
(1047, 614, 'Reparación del celular requiere 6 repuestos y llevará 8 días.', '2023-02-15 12:29:03', 24),
(1048, 423, 'Reparación del celular requiere 11 repuestos y llevará 6 días.', '2023-01-26 12:29:03', 25),
(1049, 422, 'Reparación del celular requiere 6 repuestos y llevará 2 días.', '2023-02-16 12:29:03', 26),
(1050, 841, 'Reparación del celular requiere 4 repuestos y llevará 11 días.', '2023-01-22 12:29:03', 27),
(1055, 863, 'Reparación del celular requiere 5 repuestos y llevará 3 días.', '2023-02-17 12:29:35', 1),
(1056, 877, 'Reparación del celular requiere 8 repuestos y llevará 10 días.', '2023-02-01 12:29:35', 2),
(1057, 561, 'Reparación del celular requiere 11 repuestos y llevará 2 días.', '2023-01-24 12:29:35', 3),
(1058, 308, 'Reparación del celular requiere 3 repuestos y llevará 10 días.', '2023-02-16 12:29:35', 4),
(1059, 273, 'Reparación del celular requiere 5 repuestos y llevará 4 días.', '2023-02-10 12:29:35', 5),
(1060, 988, 'Reparación del celular requiere 2 repuestos y llevará 8 días.', '2023-02-14 12:29:35', 6),
(1061, 94, 'Reparación del celular requiere 11 repuestos y llevará 7 días.', '2023-01-21 12:29:35', 7),
(1062, 856, 'Reparación del celular requiere 4 repuestos y llevará 11 días.', '2023-02-16 12:29:35', 8),
(1063, 282, 'Reparación del celular requiere 3 repuestos y llevará 4 días.', '2023-01-26 12:29:35', 9),
(1064, 799, 'Reparación del celular requiere 4 repuestos y llevará 3 días.', '2023-01-21 12:29:35', 10),
(1065, 810, 'Reparación del celular requiere 6 repuestos y llevará 2 días.', '2023-02-12 12:29:35', 11),
(1066, 999, 'Reparación del celular requiere 8 repuestos y llevará 8 días.', '2023-02-10 12:29:35', 12),
(1067, 196, 'Reparación del celular requiere 1 repuestos y llevará 7 días.', '2023-01-22 12:29:35', 13),
(1068, 653, 'Reparación del celular requiere 4 repuestos y llevará 5 días.', '2023-02-17 12:29:35', 14),
(1069, 599, 'Reparación del celular requiere 5 repuestos y llevará 4 días.', '2023-02-16 12:29:35', 15),
(1070, 50, 'Reparación del celular requiere 2 repuestos y llevará 4 días.', '2023-02-07 12:29:35', 16),
(1071, 980, 'Reparación del celular requiere 8 repuestos y llevará 5 días.', '2023-01-24 12:29:35', 17),
(1072, 297, 'Reparación del celular requiere 8 repuestos y llevará 8 días.', '2023-02-07 12:29:35', 18),
(1073, 632, 'Reparación del celular requiere 11 repuestos y llevará 10 días.', '2023-01-26 12:29:35', 19),
(1074, 81, 'Reparación del celular requiere 8 repuestos y llevará 5 días.', '2023-01-29 12:29:35', 20),
(1075, 133, 'Reparación del celular requiere 8 repuestos y llevará 3 días.', '2023-01-20 12:29:35', 21),
(1076, 431, 'Reparación del celular requiere 5 repuestos y llevará 9 días.', '2023-01-27 12:29:35', 22),
(1077, 882, 'Reparación del celular requiere 8 repuestos y llevará 9 días.', '2023-02-16 12:29:35', 23),
(1078, 771, 'Reparación del celular requiere 2 repuestos y llevará 3 días.', '2023-01-25 12:29:35', 24),
(1079, 263, 'Reparación del celular requiere 7 repuestos y llevará 4 días.', '2023-02-03 12:29:35', 25),
(1080, 379, 'Reparación del celular requiere 2 repuestos y llevará 3 días.', '2023-01-18 12:29:35', 26),
(1081, 296, 'Reparación del celular requiere 8 repuestos y llevará 5 días.', '2023-02-13 12:29:35', 27),
(1086, 482, 'Reparación del celular requiere 8 repuestos y llevará 3 días.', '2023-02-18 18:24:07', 28),
(1087, 482, 'Reparación del celular requiere 8 repuestos y llevará 3 días.', '2023-02-18 18:24:23', 28),
(1088, 15, 'Se necesita 5 días y 3 repuestos.', '2023-02-19 21:39:06', 28),
(1089, 200, 'Se requieren 4 repuestos y 3 días.', '2023-02-19 21:40:59', 36),
(1090, 51, 'Se necesita 1 repuesto y estará listo en 5 días ', '2023-02-19 22:42:33', 37);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `email`, `name`, `password`) VALUES
(1, 'user@user.com', 'Ignacio Alquati', '$2a$10$lTpW33hFAfAIdDbfOgzUPuVwatylzZuJ5oMIlCZiwwjuBGGOAbCxu'),
(3, 'user2@user.com', 'Ignacio Alquati', '$2a$10$9NIC2musLxf4li5fUMpRTOZgipCC2aZmqjqKAsQpzUwtQLq/5WJG2');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indices de la tabla `phones`
--
ALTER TABLE `phones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `repairs`
--
ALTER TABLE `repairs`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT de la tabla `phones`
--
ALTER TABLE `phones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT de la tabla `repairs`
--
ALTER TABLE `repairs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1091;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
