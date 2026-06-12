-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Gép: localhost:3305
-- Létrehozás ideje: 2026. Jún 12. 16:37
-- Kiszolgáló verziója: 8.4.3
-- PHP verzió: 8.3.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `navigator`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `classrooms`
--

CREATE TABLE `classrooms` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `capacity` int UNSIGNED NOT NULL,
  `storey` tinyint NOT NULL,
  `x` smallint NOT NULL,
  `y` smallint NOT NULL,
  `rotation` smallint UNSIGNED NOT NULL,
  `size_x` int UNSIGNED NOT NULL,
  `size_y` int UNSIGNED NOT NULL,
  `size_z` int UNSIGNED NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `building_id` bigint UNSIGNED NOT NULL,
  `type_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `classrooms`
--

INSERT INTO `classrooms` (`classroom_object`) VALUES
('{ name: \"B303\", capacity: 1, storey: 3, x: -52, y: 0, rotation: 180, size_x: 23, size_y: 15, size_z: 6, description: \"ez valamilyen terem\", building_id: 2, type_id: 1 },'),
('{ name: \"B304\", capacity: 1, storey: 3, x: -32, y: 0, rotation: 180, size_x: 15, size_y: 15, size_z: 6, description: \"terem\", building_id: 2, type_id: 1 },'),
('{ name: \"B305\", capacity: 1, storey: 3, x: -16, y: 0, rotation: 180, size_x: 15, size_y: 15, size_z: 6, description: \"juj de jo\", building_id: 2, type_id: 1 },'),
('{ name: \"B306\", capacity: 1, storey: 3, x: 3, y: 0, rotation: 180, size_x: 21, size_y: 15, size_z: 6, description: \"meg egy tanterem\", building_id: 2, type_id: 1 },'),
('{ name: \"B307\", capacity: 1, storey: 3, x: 25, y: 0, rotation: 180, size_x: 21, size_y: 15, size_z: 6, description: \"terem 1\", building_id: 2, type_id: 1 },'),
('{ name: \"B309\", capacity: 1, storey: 3, x: 35, y: -31, rotation: 0, size_x: 9, size_y: 8, size_z: 6, description: \"bent az eloadoban igen\", building_id: 2, type_id: 5 },'),
('{ name: \"B311\", capacity: 1, storey: 3, x: 27, y: -44, rotation: 0, size_x: 25, size_y: 34, size_z: 10, description: \"harmadik eloado\", building_id: 2, type_id: 28 },'),
('{ name: \"B315\", capacity: 1, storey: 3, x: -4, y: -53, rotation: 0, size_x: 35, size_y: 15, size_z: 6, description: \"labor2\", building_id: 2, type_id: 3 },'),
('{ name: \"B316\", capacity: 1, storey: 3, x: -37, y: -53, rotation: 0, size_x: 27, size_y: 15, size_z: 6, description: \"labor3\", building_id: 2, type_id: 3 },'),
('{ name: \"B332\", capacity: 1, storey: 3, x: -27, y: -33, rotation: 0, size_x: 8, size_y: 13, size_z: 6, description: \"ez egynoi wc\", building_id: 2, type_id: 12 },'),
('{ name: \"B335\", capacity: 1, storey: 3, x: -17, y: -33, rotation: 0, size_x: 8, size_y: 13, size_z: 6, description: \"event\", building_id: 2, type_id: 14 },'),
('{ name: \"B336\", capacity: 1, storey: 3, x: -7, y: -33, rotation: 0, size_x: 8, size_y: 13, size_z: 6, description: \"wc\", building_id: 2, type_id: 15 },'),
('{ name: \"B323\", capacity: 1, storey: 3, x: -44, y: -35, rotation: 270, size_x: 15, size_y: 11, size_z: 6, description: \"la bor\", building_id: 2, type_id: 3 },');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `classrooms`
--
ALTER TABLE `classrooms`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `classrooms_name_building_id_key` (`name`,`building_id`),
  ADD KEY `classrooms_building_id_fkey` (`building_id`),
  ADD KEY `classrooms_type_id_fkey` (`type_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `classrooms`
--
ALTER TABLE `classrooms`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=126;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `classrooms`
--
ALTER TABLE `classrooms`
  ADD CONSTRAINT `classrooms_building_id_fkey` FOREIGN KEY (`building_id`) REFERENCES `buildings` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `classrooms_type_id_fkey` FOREIGN KEY (`type_id`) REFERENCES `classroom_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
