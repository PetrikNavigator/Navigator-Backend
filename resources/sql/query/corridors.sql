-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Gép: localhost:3305
-- Létrehozás ideje: 2026. Jún 06. 18:50
-- Kiszolgáló verziója: 5.7.24
-- PHP verzió: 8.3.1

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
-- Tábla szerkezet ehhez a táblához `corridors`
--

CREATE TABLE `corridors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `storey` smallint(6) NOT NULL,
  `x1` smallint(6) NOT NULL,
  `y1` smallint(6) NOT NULL,
  `x2` smallint(6) NOT NULL,
  `y2` smallint(6) NOT NULL,
  `width` float NOT NULL,
  `barrier_free` tinyint(1) NOT NULL DEFAULT '0',
  `is_outdoor` tinyint(1) NOT NULL DEFAULT '0',
  `building_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `corridors`
--

INSERT INTO `corridors` (`seeder`) VALUES
('{ name: \"Bejárati folyosó\", storey: 0, x1: -5, y1: 6, x2: -5, y2: -10, width: 4.8, barrier_free: true, is_outdoor: false, building_id: 1 },'),
('{ name: \"Földszinti Aula\", storey: 0, x1: -7, y1: -16, x2: 24, y2: -16, width: 19, barrier_free: true, is_outdoor: false, building_id: 1 },'),
('{ name: \"Folyosó a Tesi tanári fele\", storey: 0, x1: 11, y1: -7, x2: 11, y2: 38, width: 5, barrier_free: true, is_outdoor: false, building_id: 1 },'),
('{ name: \"Folyosó A023 fele\", storey: 0, x1: 11, y1: 38, x2: 45, y2: 38, width: 5, barrier_free: true, is_outdoor: false, building_id: 1 },'),
('{ name: \"Folyosó a férfi WC felé\", storey: 0, x1: 6, y1: -25, x2: 6, y2: -81, width: 5, barrier_free: true, is_outdoor: false, building_id: 1 },'),
('{ name: \"Lépcső fele\", storey: 0, x1: 29, y1: -11, x2: 24, y2: -11, width: 9, barrier_free: false, is_outdoor: false, building_id: 1 },'),
('{ name: \"Folyosó tesiterem felé\", storey: 0, x1: 48, y1: -11, x2: 29, y2: -11, width: 9, barrier_free: true, is_outdoor: false, building_id: 1 },'),
('{ name: \"Udvar A tesi\", storey: 0, x1: 33, y1: -7, x2: 33, y2: 15, width: 8, barrier_free: true, is_outdoor: true, building_id: 1 },'),
('{ name: \"Udvar B fele\", storey: 0, x1: 33, y1: 15, x2: 237, y2: 15, width: 16, barrier_free: true, is_outdoor: true, building_id: 1 },'),
('{ name: \"ezaz\", storey: 1, x1: 4, y1: -16, x2: 24, y2: -16, width: 18, barrier_free: true, is_outdoor: false, building_id: 1 },'),
('{ name: \"hudejo\", storey: 1, x1: 11, y1: -7, x2: 11, y2: 38, width: 5, barrier_free: true, is_outdoor: false, building_id: 1 },'),
('{ name: \"igen\", storey: 1, x1: 11, y1: 38, x2: 46, y2: 38, width: 5, barrier_free: true, is_outdoor: false, building_id: 1 },'),
('{ name: \"na vegre\", storey: 1, x1: 6, y1: -25, x2: 6, y2: -81, width: 5, barrier_free: true, is_outdoor: false, building_id: 1 },'),
('{ name: \"ezaz2\", storey: 2, x1: 4, y1: -16, x2: 24, y2: -16, width: 18, barrier_free: true, is_outdoor: false, building_id: 1 },'),
('{ name: \"hudejo2\", storey: 2, x1: 11, y1: -7, x2: 11, y2: 38, width: 5, barrier_free: true, is_outdoor: false, building_id: 1 },'),
('{ name: \"igen2\", storey: 2, x1: 11, y1: 38, x2: 46, y2: 38, width: 5, barrier_free: true, is_outdoor: false, building_id: 1 },'),
('{ name: \"navegre2\", storey: 2, x1: 6, y1: -25, x2: 6, y2: -80, width: 5, barrier_free: true, is_outdoor: false, building_id: 1 },'),
('{ name: \"Folyosó a tanári mellett\", storey: 2, x1: 46, y1: 53, x2: 46, y2: 38, width: 5, barrier_free: true, is_outdoor: false, building_id: 1 },'),
('{ name: \"B-be be\", storey: 0, x1: 9, y1: -8, x2: 9, y2: 10, width: 8, barrier_free: true, is_outdoor: true, building_id: 2 },'),
('{ name: \"B aula\", storey: 0, x1: -61, y1: -17, x2: 43, y2: -17, width: 19, barrier_free: true, is_outdoor: false, building_id: 2 },'),
('{ name: \"Folyosó az óriáslabor fele\", storey: 0, x1: 13, y1: -26, x2: 13, y2: -43, width: 5, barrier_free: true, is_outdoor: false, building_id: 2 },'),
('{ name: \"Másik folyosó az óriáslabor fele\", storey: 0, x1: -15, y1: -43, x2: -15, y2: -26, width: 5, barrier_free: true, is_outdoor: false, building_id: 2 },'),
('{ name: \"Sok itt a folyosó\", storey: 0, x1: -36, y1: -26, x2: -36, y2: -37, width: 5, barrier_free: true, is_outdoor: false, building_id: 2 },'),
('{ name: \"Öltöző folyosó\", storey: 0, x1: 42, y1: -49, x2: 20, y2: -49, width: 3.9, barrier_free: true, is_outdoor: false, building_id: 2 },'),
('{ name: \"Könyvár mögötti folyosó\", storey: 0, x1: 34, y1: -39, x2: 34, y2: -47, width: 3.8, barrier_free: true, is_outdoor: false, building_id: 2 },'),
('{ name: \"B első emelet folyosó\", storey: 1, x1: -61, y1: -17, x2: 43, y2: -17, width: 19, barrier_free: true, is_outdoor: false, building_id: 2 },'),
('{ name: \"Folyosó az óriáslabor fele1\", storey: 1, x1: 11, y1: -26, x2: 11, y2: -43, width: 5, barrier_free: true, is_outdoor: false, building_id: 2 },'),
('{ name: \"Másik folyosó az óriáslabor fele1\", storey: 1, x1: -34, y1: -43, x2: -34, y2: -26, width: 5, barrier_free: true, is_outdoor: false, building_id: 2 },'),
('{ name: \"Belső folyosó\", storey: 2, x1: -34, y1: -43, x2: 11, y2: -43, width: 5, barrier_free: true, is_outdoor: false, building_id: 2 },'),
('{ name: \"B első emelet folyosó2\", storey: 2, x1: -61, y1: -17, x2: 43, y2: -17, width: 19, barrier_free: true, is_outdoor: false, building_id: 2 },'),
('{ name: \"Folyosó az óriáslabor fele2\", storey: 2, x1: 11, y1: -26, x2: 11, y2: -43, width: 5, barrier_free: true, is_outdoor: false, building_id: 2 },'),
('{ name: \"Másik folyosó az óriáslabor fele2\", storey: 2, x1: -34, y1: -43, x2: -34, y2: -26, width: 5, barrier_free: true, is_outdoor: false, building_id: 2 },'),
('{ name: \"folyosó hátul\", storey: 1, x1: -34, y1: -43, x2: 11, y2: -43, width: 5, barrier_free: true, is_outdoor: false, building_id: 2 },');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `corridors`
--
ALTER TABLE `corridors`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `corridors_name_building_id_key` (`name`,`building_id`),
  ADD KEY `corridors_building_id_fkey` (`building_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `corridors`
--
ALTER TABLE `corridors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `corridors`
--
ALTER TABLE `corridors`
  ADD CONSTRAINT `corridors_building_id_fkey` FOREIGN KEY (`building_id`) REFERENCES `buildings` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
