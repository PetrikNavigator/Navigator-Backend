-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Gép: localhost:3305
-- Létrehozás ideje: 2026. Jún 05. 08:17
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
-- Tábla szerkezet ehhez a táblához `buildings`
--

CREATE TABLE `buildings` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `x` smallint NOT NULL,
  `y` smallint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `buildings`
--

INSERT INTO `buildings` (`id`, `name`, `description`, `x`, `y`) VALUES
(1, 'A épület', 'Informatikusok épülete', -180, -1),
(2, 'B épület', 'Vegyészek és környezetvédők épülete', -39, -4);

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

INSERT INTO `classrooms` (`id`, `name`, `capacity`, `storey`, `x`, `y`, `rotation`, `size_x`, `size_y`, `size_z`, `description`, `building_id`, `type_id`) VALUES
(1, 'A porta', 4, 0, 3, -2, 270, 8, 11, 6, 'A épület porta', 1, 30),
(2, 'A014', 1, 0, 21, 4, 90, 20, 15, 6, 'Homokminta elemző labor', 1, 3),
(3, 'A015', 1, 0, 21, 25, 90, 20, 15, 6, 'Gőgh Zsolt', 1, 3),
(4, 'A016', 1, 0, 11, 48, 180, 6, 15, 6, 'Király Zanza', 1, 5),
(5, 'A017', 1, 0, 18, 48, 180, 6, 15, 6, 'Ősfasz', 1, 27),
(6, 'A018', 1, 0, 33, 48, 180, 22, 15, 6, 'Kecskepornó', 1, 4),
(7, 'A023', 1, 0, 55, 39, 90, 18, 20, 6, 'ezaz ezaz hu de jo', 1, 4),
(8, 'A010', 32, 0, 16, -33, 90, 15, 15, 6, 'Kiséretségi', 1, 1),
(9, 'A009', 15, 0, 16, -52, 90, 21, 15, 6, 'Kotyvasztó labor', 1, 3),
(10, 'A007', 15, 0, 16, -78, 90, 17, 15, 6, 'Kotyvasztó labor 2', 1, 3),
(11, 'A037', 1, 0, 59, -11, 90, 31, 21, 10, 'Tesiterem', 1, 32),
(12, 'A034', 1, 0, 43, -1, 180, 10, 11, 6, 'fiú öltöző', 1, 31),
(13, 'A032', 1, 0, 43, -21, 0, 10, 11, 6, 'Tot Bela', 1, 31),
(14, 'A108', 1, 1, 16, -48, 90, 13, 15, 6, 'terem', 1, 3),
(15, 'A109', 1, 1, 16, -36, 90, 9, 15, 6, 'Tóth Éva', 1, 7),
(16, 'A110', 1, 1, 16, -27, 90, 7, 15, 6, 'Tanári', 1, 5),
(17, 'A106', 1, 1, 16, -62, 90, 13, 15, 6, 'Laboránsok laborja', 1, 3),
(18, 'A105', 1, 1, 16, -79, 90, 19, 15, 6, 'hu de jo', 1, 3),
(19, 'A116', 1, 1, 21, -4, 90, 10, 15, 6, 'itt büdös van!', 1, 5),
(20, 'A117', 1, 1, 21, 10, 90, 16, 15, 6, 'borzalom', 1, 4),
(21, 'A118', 1, 1, 21, 27, 90, 16, 15, 6, 'masik borzalom', 1, 4),
(22, 'A119', 1, 1, 10, 48, 180, 14, 15, 6, 'potyi', 1, 1),
(23, 'A120', 1, 1, 25, 48, 180, 14, 15, 6, 'iszonyatos halozat terem 1', 1, 4),
(24, 'A121', 1, 1, 39, 48, 180, 12, 15, 6, 'iszonyatos halozat 2', 1, 4),
(25, 'A123', 1, 1, 54, 38, 90, 12, 17, 6, 'E', 1, 1),
(26, 'A122', 1, 1, 54, 50, 90, 10, 17, 6, 'iszonyatos halozat 3', 1, 4),
(27, 'A126', 1, 1, 4, 7, 270, 10, 8, 6, 'lány wc', 1, 28),
(28, 'A127', 1, 1, 4, -1, 270, 4, 8, 6, 'big j wc', 1, 33),
(29, 'A128', 1, 1, 4, -6, 270, 4, 8, 6, 'event hely', 1, 29),
(30, 'A205', 1, 2, 16, -79, 90, 15, 15, 6, 'kiralyok terme', 1, 1),
(31, 'A203', 1, 2, 5, -85, 0, 5, 9, 6, 'veszelyes feliratok', 1, 26),
(32, 'A206', 1, 2, 16, -63, 90, 15, 15, 6, 'valami terem', 1, 1),
(33, 'A207', 1, 2, 16, -53, 90, 3, 15, 6, 'labor ize', 1, 6),
(34, 'A208', 1, 2, 16, -45, 90, 11, 15, 6, 'fizika ezaz hu de jo', 1, 1),
(35, 'A209', 1, 2, 16, -37, 90, 3, 15, 6, 'fizika cucc ez is gondolom', 1, 5),
(36, 'A210', 1, 2, 16, -30, 90, 9, 15, 6, 'TV', 1, 1),
(37, 'A005', 1, 0, 5, -85, 0, 5, 9, 6, '9-bol 2 ha mukodik', 1, 26),
(38, 'A103', 1, 1, 5, -85, 0, 5, 9, 6, 'kanapekkal otthonos', 1, 26),
(39, 'A026', 1, 0, 3, 6, 270, 6, 11, 6, 'event', 1, 29),
(40, 'A024', 1, 0, 3, 15, 270, 10, 11, 6, 'női wc', 1, 28),
(41, 'A215', 1, 2, 21, 3, 90, 21, 15, 6, 'ez is valami terem', 1, 1),
(42, 'A216', 1, 2, 21, 25, 90, 21, 15, 6, 'osszetolt asztalok hu de jo', 1, 1),
(43, 'A217', 1, 2, 12, 48, 180, 18, 15, 6, 'terem', 1, 1),
(44, 'A218', 1, 2, 29, 48, 180, 14, 15, 6, 'matek', 1, 1),
(45, 'A219', 1, 2, 40, 48, 180, 6, 15, 6, 'szabi', 1, 5),
(46, 'A220', 1, 2, 58, 53, 90, 15, 19, 6, 'csutak terem', 1, 1),
(47, 'A222', 1, 2, 58, 39, 90, 11, 19, 6, 'projekt munka', 1, 4),
(48, 'A008', 1, 0, 16, -66, 90, 5, 15, 6, 'elo fognak kesziteni', 1, 6),
(49, 'A114', 1, 1, -1, -15, 270, 5, 9, 6, 'itt lehet dohanyozni', 1, 34),
(51, 'A213', 1, 2, 0, -20, 270, 5, 8, 6, 'tanarok szobaja', 1, 5),
(52, 'A115', 1, 1, -1, -21, 270, 5, 9, 6, 'Toth Eva tanari', 1, 5),
(53, 'A224', 1, 2, 4, 7, 270, 10, 8, 6, 'vecelini', 1, 28),
(54, 'A225', 1, 2, 4, -1, 270, 4, 8, 6, 'vecelini 2', 1, 33),
(55, 'A226', 1, 2, 4, -6, 270, 4, 8, 6, 'event', 1, 29);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `classroom_types`
--

CREATE TABLE `classroom_types` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `colorhex` varchar(9) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `classroom_types`
--

INSERT INTO `classroom_types` (`id`, `name`, `colorhex`) VALUES
(1, 'tanterem', '#447e64ff'),
(2, 'előadó', '#52f2ffff'),
(3, 'laboratórium', '#554c94ff'),
(4, 'informatika terem', '#73a6ffff'),
(5, 'tanári szoba', '#ffb34dff'),
(6, 'előkészítő', '#d9ff4dff'),
(7, 'csoport szoba', '#b3ff73ff'),
(8, 'iroda', '#a6bfd9ff'),
(9, 'testnevelés terem', '#ff734dff'),
(10, 'öltöző', '#d98cffff'),
(11, 'wc', '#a6bfd9ff'),
(12, 'egyéb', '#99b3ccff'),
(15, 'kémia labor', '#8cff66ff'),
(16, 'fizika labor', '#b3ff73ff'),
(18, 'nyelvi labor', '#d9ff4dff'),
(19, 'tanári', '#ffb34dff'),
(23, 'étkező', '#ff73a6ff'),
(25, 'könyvtár', '#d98cffff'),
(26, 'férfi wc', '#ff0000ff'),
(27, 'igazgató helyettes', '#d400ffff'),
(28, 'női wc', '#00e1ffff'),
(29, 'akadálymentes wc', '#66ff00ff'),
(30, 'porta', '#8f3838ff'),
(31, 'tornatermi öltöző', '#b69a9aff'),
(32, 'tornaterem', '#a16886ff'),
(33, 'tanári wc', '#590303ff'),
(34, 'dohányzó', '#4f4f4fff');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `corridors`
--

CREATE TABLE `corridors` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `storey` smallint NOT NULL,
  `x1` smallint NOT NULL,
  `y1` smallint NOT NULL,
  `x2` smallint NOT NULL,
  `y2` smallint NOT NULL,
  `width` float NOT NULL,
  `barrier_free` tinyint(1) NOT NULL DEFAULT '0',
  `is_outdoor` tinyint(1) NOT NULL DEFAULT '0',
  `building_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `corridors`
--

INSERT INTO `corridors` (`id`, `name`, `storey`, `x1`, `y1`, `x2`, `y2`, `width`, `barrier_free`, `is_outdoor`, `building_id`) VALUES
(1, 'Bejárati folyosó', 0, -5, 6, -5, -10, 4.8, 1, 0, 1),
(2, 'Földszinti Aula', 0, -7, -16, 24, -16, 19, 1, 0, 1),
(3, 'Folyosó a Tesi tanári fele', 0, 11, -7, 11, 38, 5, 1, 0, 1),
(4, 'Folyosó A023 fele', 0, 11, 38, 45, 38, 5, 1, 0, 1),
(5, 'Folyosó a férfi WC felé', 0, 6, -25, 6, -81, 5, 1, 0, 1),
(7, 'Lépcső fele', 0, 29, -11, 24, -11, 9, 0, 0, 1),
(8, 'Folyosó tesiterem felé', 0, 48, -11, 29, -11, 9, 1, 0, 1),
(9, 'Udvar A tesi', 0, 33, -7, 33, 15, 8, 1, 1, 1),
(10, 'Udvar B fele', 0, 33, 15, 137, 15, 16, 1, 1, 1),
(11, 'ezaz', 1, 4, -16, 24, -16, 18, 1, 0, 1),
(12, 'hudejo', 1, 11, -7, 11, 38, 5, 1, 0, 1),
(13, 'igen', 1, 11, 38, 46, 38, 5, 1, 0, 1),
(14, 'na vegre', 1, 6, -25, 6, -81, 5, 1, 0, 1),
(15, 'ezaz2', 2, 4, -16, 24, -16, 18, 1, 0, 1),
(16, 'hudejo2', 2, 11, -7, 11, 38, 5, 1, 0, 1),
(17, 'igen2', 2, 11, 38, 46, 38, 5, 1, 0, 1),
(18, 'navegre2', 2, 6, -25, 6, -80, 5, 1, 0, 1),
(19, 'Folyosó a tanári mellett', 2, 46, 53, 46, 38, 5, 1, 0, 1);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `lifts`
--

CREATE TABLE `lifts` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `x` smallint NOT NULL,
  `y` smallint NOT NULL,
  `min_storey` smallint NOT NULL,
  `max_storey` smallint NOT NULL,
  `building_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `lifts`
--

INSERT INTO `lifts` (`id`, `name`, `x`, `y`, `min_storey`, `max_storey`, `building_id`) VALUES
(1, 'A épület lift', 3, -27, -1, 2, 1);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `stairs`
--

CREATE TABLE `stairs` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `x` smallint NOT NULL,
  `y` smallint NOT NULL,
  `min_storey` smallint NOT NULL,
  `max_storey` smallint NOT NULL,
  `rotation` smallint UNSIGNED NOT NULL,
  `building_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `stairs`
--

INSERT INTO `stairs` (`id`, `name`, `x`, `y`, `min_storey`, `max_storey`, `rotation`, `building_id`) VALUES
(1, 'Lépcső a -1-re', 28, -11, -1, 0, 0, 1),
(2, 'A épület tűzlépcső', 2, -32, 0, 2, 270, 1),
(3, 'Lépcső az elsőre', 24, -20, 0, 1, 0, 1),
(4, 'Lépcső a másodikra', 24, -12, 1, 2, 0, 1);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password_hash` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `users`
--

INSERT INTO `users` (`id`, `email`, `password_hash`) VALUES
(1, 'petrik@petrik.petrik', '$2b$10$glU7V9hggMbEIInb1PwHgeGWEw.vYEjkPGbs9u0FQs8XqKiST1BHy'),
(2, 'dami@dami.dami', '$2b$10$glU7V9hggMbEIInb1PwHgeGWEw.vYEjkPGbs9u0FQs8XqKiST1BHy'),
(3, 'admin@admin.admin', '$2b$10$glU7V9hggMbEIInb1PwHgeGWEw.vYEjkPGbs9u0FQs8XqKiST1BHy'),
(4, 'student@student.student', '$2b$10$glU7V9hggMbEIInb1PwHgeGWEw.vYEjkPGbs9u0FQs8XqKiST1BHy');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `buildings`
--
ALTER TABLE `buildings`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `buildings_name_key` (`name`);

--
-- A tábla indexei `classrooms`
--
ALTER TABLE `classrooms`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `classrooms_name_building_id_key` (`name`,`building_id`),
  ADD KEY `classrooms_building_id_fkey` (`building_id`),
  ADD KEY `classrooms_type_id_fkey` (`type_id`);

--
-- A tábla indexei `classroom_types`
--
ALTER TABLE `classroom_types`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `classroom_types_name_key` (`name`);

--
-- A tábla indexei `corridors`
--
ALTER TABLE `corridors`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `corridors_name_building_id_key` (`name`,`building_id`),
  ADD KEY `corridors_building_id_fkey` (`building_id`);

--
-- A tábla indexei `lifts`
--
ALTER TABLE `lifts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `lifts_name_building_id_key` (`name`,`building_id`),
  ADD KEY `lifts_building_id_fkey` (`building_id`);

--
-- A tábla indexei `stairs`
--
ALTER TABLE `stairs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `stairs_name_building_id_key` (`name`,`building_id`),
  ADD KEY `stairs_building_id_fkey` (`building_id`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_key` (`email`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `buildings`
--
ALTER TABLE `buildings`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT a táblához `classrooms`
--
ALTER TABLE `classrooms`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT a táblához `classroom_types`
--
ALTER TABLE `classroom_types`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT a táblához `corridors`
--
ALTER TABLE `corridors`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT a táblához `lifts`
--
ALTER TABLE `lifts`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT a táblához `stairs`
--
ALTER TABLE `stairs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT a táblához `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `classrooms`
--
ALTER TABLE `classrooms`
  ADD CONSTRAINT `classrooms_building_id_fkey` FOREIGN KEY (`building_id`) REFERENCES `buildings` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `classrooms_type_id_fkey` FOREIGN KEY (`type_id`) REFERENCES `classroom_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `corridors`
--
ALTER TABLE `corridors`
  ADD CONSTRAINT `corridors_building_id_fkey` FOREIGN KEY (`building_id`) REFERENCES `buildings` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `lifts`
--
ALTER TABLE `lifts`
  ADD CONSTRAINT `lifts_building_id_fkey` FOREIGN KEY (`building_id`) REFERENCES `buildings` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `stairs`
--
ALTER TABLE `stairs`
  ADD CONSTRAINT `stairs_building_id_fkey` FOREIGN KEY (`building_id`) REFERENCES `buildings` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
