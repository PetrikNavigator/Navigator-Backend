-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Gép: localhost:3305
-- Létrehozás ideje: 2026. Jún 06. 18:55
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
-- Tábla szerkezet ehhez a táblához `classroom_types`
--

CREATE TABLE `classroom_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `colorhex` varchar(9) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `classroom_types`
--

INSERT INTO `classroom_types` (`seeder`) VALUES
('{ name: \'tanterem\', colorhex: \'#447e64ff\' },'),
('{ name: \'előadó\', colorhex: \'#52f2ffff\' },'),
('{ name: \'laboratórium\', colorhex: \'#554c94ff\' },'),
('{ name: \'informatika terem\', colorhex: \'#73a6ffff\' },'),
('{ name: \'tanári szoba\', colorhex: \'#ffb34dff\' },'),
('{ name: \'előkészítő\', colorhex: \'#d9ff4dff\' },'),
('{ name: \'csoport szoba\', colorhex: \'#b3ff73ff\' },'),
('{ name: \'iroda\', colorhex: \'#a6bfd9ff\' },'),
('{ name: \'testnevelés terem\', colorhex: \'#ff734dff\' },'),
('{ name: \'öltöző\', colorhex: \'#d98cffff\' },'),
('{ name: \'tanári\', colorhex: \'#ffb34dff\' },'),
('{ name: \'könyvtár\', colorhex: \'#d98cffff\' },'),
('{ name: \'férfi wc\', colorhex: \'#ff0000ff\' },'),
('{ name: \'igazgató helyettes\', colorhex: \'#d400ffff\' },'),
('{ name: \'női wc\', colorhex: \'#00e1ffff\' },'),
('{ name: \'akadálymentes wc\', colorhex: \'#66ff00ff\' },'),
('{ name: \'porta\', colorhex: \'#8f3838ff\' },'),
('{ name: \'tornatermi öltöző\', colorhex: \'#b69a9aff\' },'),
('{ name: \'tornaterem\', colorhex: \'#a16886ff\' },'),
('{ name: \'tanári wc\', colorhex: \'#590303ff\' },'),
('{ name: \'dohányzó\', colorhex: \'#4f4f4fff\' },'),
('{ name: \'büfé\', colorhex: \'#ff932eff\' },'),
('{ name: \'diákközpont\', colorhex: \'#00ff4cff\' },'),
('{ name: \'orvosi szoba\', colorhex: \'#ea8b8bff\' },'),
('{ name: \'személyzeti wc\', colorhex: \'#ffffffff\' },'),
('{ name: \'könyvtáros\', colorhex: \'#b68949ff\' },'),
('{ name: \'diákönkormányzat\', colorhex: \'#f99effff\' },'),
('{ name: \'pszichológus\', colorhex: \'#39f3deff\' },'),
('{ name: \'előadó terem\', colorhex: \'#792f83ff\' },'),
('{ name: \'titkárság\', colorhex: \'#327167ff\' },'),
('{ name: \'igazgató\', colorhex: \'#fa0000ff\' },'),
('{ name: \'gazdasági vezető\', colorhex: \'#49ab55ff\' },'),
('{ name: \'gazdasági iroda\', colorhex: \'#a9b234ff\' },'),
('{ name: \'tárgyaló\', colorhex: \'#6c007aff\' },');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `classroom_types`
--
ALTER TABLE `classroom_types`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `classroom_types_name_key` (`name`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `classroom_types`
--
ALTER TABLE `classroom_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
