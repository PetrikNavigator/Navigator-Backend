-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Gép: localhost:3305
-- Létrehozás ideje: 2026. Jún 17. 12:55
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
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `x` smallint NOT NULL,
  `y` smallint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `classrooms`
--

CREATE TABLE `classrooms` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `capacity` int UNSIGNED NOT NULL,
  `storey` tinyint NOT NULL,
  `x` smallint NOT NULL,
  `y` smallint NOT NULL,
  `rotation` smallint UNSIGNED NOT NULL,
  `size_x` int UNSIGNED NOT NULL,
  `size_y` int UNSIGNED NOT NULL,
  `size_z` int UNSIGNED NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `building_id` bigint UNSIGNED NOT NULL,
  `type_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `classroom_types`
--

CREATE TABLE `classroom_types` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `colorhex` varchar(9) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `corridors`
--

CREATE TABLE `corridors` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
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

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `lifts`
--

CREATE TABLE `lifts` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `x` smallint NOT NULL,
  `y` smallint NOT NULL,
  `min_storey` smallint NOT NULL,
  `max_storey` smallint NOT NULL,
  `building_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `stairs`
--

CREATE TABLE `stairs` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `x` smallint NOT NULL,
  `y` smallint NOT NULL,
  `min_storey` smallint NOT NULL,
  `max_storey` smallint NOT NULL,
  `rotation` smallint UNSIGNED NOT NULL,
  `building_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `email` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password_hash` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `classrooms`
--
ALTER TABLE `classrooms`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `classroom_types`
--
ALTER TABLE `classroom_types`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `corridors`
--
ALTER TABLE `corridors`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `lifts`
--
ALTER TABLE `lifts`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `stairs`
--
ALTER TABLE `stairs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

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
