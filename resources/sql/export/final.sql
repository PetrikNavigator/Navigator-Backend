-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Gép: localhost:3305
-- Létrehozás ideje: 2026. Jún 17. 13:32
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

--
-- A tábla adatainak kiíratása `buildings`
--

INSERT INTO `buildings` (`id`, `name`, `description`, `x`, `y`) VALUES
(1, 'A épület', 'Informatikusok épülete', -180, -1),
(2, 'B épület', 'Vegyészek és környezetvédők épülete', 30, -12);

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
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `building_id` bigint UNSIGNED NOT NULL,
  `type_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `classrooms`
--

INSERT INTO `classrooms` (`id`, `name`, `capacity`, `storey`, `x`, `y`, `rotation`, `size_x`, `size_y`, `size_z`, `description`, `building_id`, `type_id`) VALUES
(1, 'A05', 1, -1, 5, -85, 0, 5, 9, 5, 'szerintem ez zarva van', 1, 12),
(2, 'A07', 1, -1, 16, -78, 90, 23, 15, 5, 'ping pong gyula', 1, 1),
(3, 'A08', 1, -1, 16, -61, 90, 9, 15, 5, 'dok', 1, 1),
(4, 'A10', 1, -1, 16, -32, 90, 19, 15, 5, 'kazanhaz', 1, 34),
(5, 'A09', 1, -1, 16, -49, 90, 13, 15, 5, 'tere m', 1, 1),
(6, 'A22', 1, -1, -2, -17, 270, 6, 11, 5, 'meg egy wc itt lent is', 1, 15),
(7, 'A23', 1, -1, -2, -10, 270, 6, 11, 5, 'wc a noknek', 1, 14),
(8, 'A24', 1, -1, 8, -1, 180, 6, 11, 5, 'wc a tanar okn ak', 1, 19),
(9, 'A28', 1, -1, 25, 7, 90, 26, 15, 5, 'kistesi (nagyon budos van)', 1, 35),
(10, 'A32', 1, -1, 25, 33, 90, 6, 15, 5, 'noi oltozo', 1, 17),
(11, 'A005', 1, 0, 5, -85, 0, 5, 9, 6, '9-bol 2 ha mukodik', 1, 12),
(12, 'A007', 15, 0, 16, -78, 90, 17, 15, 6, 'Kotyvasztó labor 2', 1, 3),
(13, 'A008', 1, 0, 16, -66, 90, 5, 15, 6, 'elo fognak kesziteni', 1, 6),
(14, 'A009', 15, 0, 16, -52, 90, 21, 15, 6, 'Kotyvasztó labor', 1, 3),
(15, 'A010', 32, 0, 16, -33, 90, 15, 15, 6, 'Kiséretségi', 1, 1),
(16, 'A014', 1, 0, 21, 4, 90, 20, 15, 6, 'Homokminta elemző labor', 1, 3),
(17, 'A015', 1, 0, 21, 25, 90, 20, 15, 6, 'Gőgh Zsolt', 1, 3),
(18, 'A016', 1, 0, 11, 48, 180, 6, 15, 6, 'Király Zanza', 1, 5),
(19, 'A017', 1, 0, 18, 48, 180, 6, 15, 6, 'Ősfasz', 1, 13),
(20, 'A018', 1, 0, 33, 48, 180, 22, 15, 6, 'Kecskepornó', 1, 4),
(21, 'A023', 1, 0, 55, 39, 90, 18, 20, 6, 'ezaz ezaz hu de jo', 1, 4),
(22, 'A024', 1, 0, 3, 15, 270, 10, 11, 6, 'női wc', 1, 14),
(23, 'A026', 1, 0, 3, 6, 270, 6, 11, 6, 'event', 1, 15),
(24, 'A027', 4, 0, 3, -2, 270, 8, 11, 6, 'A épület porta', 1, 16),
(25, 'A034', 1, 0, 43, -1, 180, 10, 11, 6, 'fiú öltöző', 1, 17),
(26, 'A032', 1, 0, 43, -21, 0, 10, 11, 6, 'Tot Bela', 1, 17),
(27, 'A037', 1, 0, 59, -11, 90, 31, 21, 10, 'Tesiterem', 1, 18),
(28, 'A103', 1, 1, 5, -85, 0, 5, 9, 6, 'kanapekkal otthonos', 1, 12),
(29, 'A105', 1, 1, 16, -79, 90, 19, 15, 6, 'hu de jo', 1, 3),
(30, 'A106', 1, 1, 16, -62, 90, 13, 15, 6, 'Laboránsok laborja', 1, 3),
(31, 'A108', 1, 1, 16, -48, 90, 13, 15, 6, 'terem', 1, 3),
(32, 'A109', 1, 1, 16, -36, 90, 9, 15, 6, 'Tóth Éva', 1, 7),
(33, 'A110', 1, 1, 16, -27, 90, 7, 15, 6, 'Tanári', 1, 5),
(34, 'A114', 1, 1, -1, -15, 270, 5, 9, 6, 'itt lehet dohanyozni', 1, 20),
(35, 'A115', 1, 1, -1, -21, 270, 5, 9, 6, 'Toth Eva tanari', 1, 5),
(36, 'A116', 1, 1, 21, -4, 90, 10, 15, 6, 'itt büdös van!', 1, 5),
(37, 'A117', 1, 1, 21, 10, 90, 16, 15, 6, 'borzalom', 1, 4),
(38, 'A118', 1, 1, 21, 27, 90, 16, 15, 6, 'masik borzalom', 1, 4),
(39, 'A119', 1, 1, 10, 48, 180, 14, 15, 6, 'potyi', 1, 1),
(40, 'A120', 1, 1, 25, 48, 180, 14, 15, 6, 'iszonyatos halozat terem 1', 1, 4),
(41, 'A121', 1, 1, 39, 48, 180, 12, 15, 6, 'iszonyatos halozat 2', 1, 4),
(42, 'A123', 1, 1, 54, 38, 90, 12, 17, 6, 'E', 1, 1),
(43, 'A122', 1, 1, 54, 50, 90, 10, 17, 6, 'iszonyatos halozat 3', 1, 4),
(44, 'A126', 1, 1, 4, 7, 270, 10, 8, 6, 'lány wc', 1, 14),
(45, 'A127', 1, 1, 4, -1, 270, 4, 8, 6, 'big j wc', 1, 19),
(46, 'A128', 1, 1, 4, -6, 270, 4, 8, 6, 'event hely', 1, 15),
(47, 'A203', 1, 2, 5, -85, 0, 5, 9, 6, 'veszelyes feliratok', 1, 12),
(48, 'A205', 1, 2, 16, -79, 90, 15, 15, 6, 'kiralyok terme', 1, 1),
(49, 'A206', 1, 2, 16, -63, 90, 15, 15, 6, 'valami terem', 1, 1),
(50, 'A207', 1, 2, 16, -53, 90, 3, 15, 6, 'labor ize', 1, 6),
(51, 'A208', 1, 2, 16, -45, 90, 11, 15, 6, 'fizika ezaz hu de jo', 1, 2),
(52, 'A209', 1, 2, 16, -37, 90, 3, 15, 6, 'fizika cucc ez is gondolom', 1, 5),
(53, 'A210', 1, 2, 16, -30, 90, 9, 15, 6, 'TV', 1, 1),
(54, 'A213', 1, 2, 0, -20, 270, 5, 8, 6, 'tanarok szobaja', 1, 5),
(55, 'A215', 1, 2, 21, 3, 90, 21, 15, 6, 'ez is valami terem', 1, 1),
(56, 'A216', 1, 2, 21, 25, 90, 21, 15, 6, 'osszetolt asztalok hu de jo', 1, 1),
(57, 'A217', 1, 2, 12, 48, 180, 18, 15, 6, 'terem', 1, 1),
(58, 'A218', 1, 2, 29, 48, 180, 14, 15, 6, 'matek', 1, 1),
(59, 'A219', 1, 2, 40, 48, 180, 6, 15, 6, 'szabi', 1, 5),
(60, 'A220', 1, 2, 58, 53, 90, 15, 19, 6, 'csutak terem', 1, 1),
(61, 'A222', 1, 2, 58, 39, 90, 11, 19, 6, 'projekt munka', 1, 4),
(62, 'A224', 1, 2, 4, 7, 270, 10, 8, 6, 'vecelini', 1, 14),
(63, 'A225', 1, 2, 4, -1, 270, 4, 8, 6, 'vecelini 2', 1, 19),
(64, 'A226', 1, 2, 4, -6, 270, 4, 8, 6, 'event', 1, 15),
(65, 'B003', 1, 0, 0, 0, 180, 10, 15, 6, 'az kapu zarva van', 2, 16),
(66, 'B005', 1, 0, -12, 0, 180, 11, 15, 6, 'vegyel itt valamit', 2, 21),
(67, 'B006', 1, 0, -26, 0, 180, 14, 15, 6, 'dok centrum, kedvesek', 2, 22),
(68, 'B007', 1, 0, -37, 0, 180, 5, 15, 6, 'Penksza', 2, 13),
(69, 'B008', 1, 0, -44, 0, 180, 6, 15, 6, 'neha ide is jonni kell', 2, 23),
(70, 'B013', 1, 0, -1, -52, 0, 33, 17, 8, 'oriasi labor', 2, 3),
(71, 'B014', 1, 0, -28, -49, 0, 19, 23, 6, 'meg egy labor', 2, 3),
(72, 'B017', 1, 0, -47, -37, 270, 21, 16, 6, 'ujabb labor ize', 2, 3),
(73, 'B029', 1, 0, -9, -37, 0, 7, 8, 6, 'jobb mint az A epuletben', 2, 12),
(74, 'B032', 1, 0, -9, -29, 0, 7, 6, 6, 'vece', 2, 14),
(75, 'B033', 1, 0, -1, -33, 0, 7, 14, 6, 'event', 2, 15),
(76, 'B035', 1, 0, 7, -33, 0, 7, 14, 6, 'sose lattam', 2, 24),
(77, 'B041', 1, 0, 22, 0, 180, 17, 15, 6, 'terem', 2, 5),
(78, 'B043', 1, 0, 28, -58, 0, 7, 14, 6, 'ilyen is van ezek szerint', 2, 8),
(79, 'B044/A', 1, 0, 37, -54, 0, 9, 6, 6, 'konyvtaros terem', 2, 25),
(80, 'B044/B', 1, 0, 20, -58, 0, 7, 14, 6, 'dok', 2, 26),
(81, 'B045', 1, 0, 29, -33, 0, 25, 12, 6, 'lehet kolcsonozni', 2, 11),
(82, 'B048', 1, 0, 29, -43, 180, 5, 7, 6, 'valahol oltozni is kell', 2, 9),
(83, 'B051', 1, 0, 37, -61, 0, 9, 7, 6, 'itt talalhato a pszicholohus', 2, 27),
(84, 'B103', 1, 1, -52, 0, 180, 17, 15, 6, 'ez valamilyen terem', 2, 10),
(85, 'B105', 1, 1, -28, 0, 180, 8, 15, 6, 'itt titkarok vannak', 2, 29),
(86, 'B106', 1, 1, -15, 0, 180, 16, 15, 6, 'innen igazgatjak az iskolat', 2, 30),
(87, 'B107', 1, 1, -1, 0, 180, 10, 15, 6, 'gazdalkodj okosan', 2, 31),
(88, 'B110', 1, 1, 9, 0, 180, 8, 15, 6, 'hat akkor ilyen is van', 2, 32),
(89, 'B111', 1, 1, 18, 0, 180, 8, 15, 6, 'helyettesiti az igazgatot', 2, 13),
(90, 'B112', 1, 1, 32, 0, 180, 18, 15, 6, 'eretsegi terem', 2, 33),
(91, 'B116', 1, 1, 27, -44, 0, 25, 34, 10, 'Petrik Előadó', 2, 28),
(92, 'B118', 1, 1, 6, -53, 0, 15, 15, 6, 'nem jartam itt soha', 2, 3),
(93, 'B119', 1, 1, -10, -53, 0, 15, 15, 6, 'itt se jartam soha', 2, 3),
(94, 'B120', 1, 1, -26, -53, 0, 15, 15, 6, 'harmadik ugyanolyan terem', 2, 3),
(95, 'B121', 1, 1, -41, -51, 0, 11, 19, 6, 'hu de jo keszuljetek ezaz', 2, 6),
(96, 'B137', 1, 1, -27, -33, 0, 8, 13, 6, 'itt van egyedul wc papir ', 2, 12),
(97, 'B138', 1, 1, -17, -33, 0, 8, 13, 6, 'ez egynoi wc', 2, 14),
(98, 'B140', 1, 1, -7, -33, 0, 8, 13, 6, 'event', 2, 15),
(99, 'B203', 1, 2, -52, 0, 180, 23, 15, 6, 'ez valamilyen terem', 2, 1),
(100, 'B204', 1, 2, -32, 0, 180, 15, 15, 6, 'itt vannak tanarok', 2, 1),
(101, 'B205', 1, 2, -16, 0, 180, 15, 15, 6, 'juj de jo', 2, 1),
(102, 'B206', 1, 2, 3, 0, 180, 21, 15, 6, 'meg egy tanterem', 2, 1),
(103, 'B207', 1, 2, 25, 0, 180, 21, 15, 6, 'gazdalkodj okosan', 2, 1),
(104, 'B208', 1, 2, 35, -31, 0, 6, 8, 6, 'bent az eloadoban igen', 2, 5),
(105, 'B210', 1, 2, 23, -44, 0, 16, 34, 10, 'masik eloado', 2, 28),
(107, 'B213', 1, 2, 6, -53, 0, 15, 15, 6, 'labor1', 2, 3),
(108, 'B214', 1, 2, -10, -53, 0, 15, 15, 6, 'labor2', 2, 3),
(109, 'B215', 1, 2, -26, -53, 0, 15, 15, 6, 'labor3', 2, 3),
(110, 'B216', 1, 2, -42, -53, 0, 15, 15, 6, 'labor4', 2, 3),
(111, 'B223', 1, 2, -44, -41, 270, 7, 11, 6, 'remelem ez tenyleg itt van', 2, 3),
(112, 'B230', 1, 2, -44, -33, 270, 7, 11, 6, 'ezt is csak remelni tudom hogy jo helyre ment e', 2, 3),
(113, 'B231', 1, 2, -27, -33, 0, 8, 13, 6, 'ez egynoi wc', 2, 12),
(114, 'B234', 1, 2, -17, -33, 0, 8, 13, 6, 'event', 2, 14),
(115, 'B235', 1, 2, -7, -33, 0, 8, 13, 6, 'wc', 2, 15),
(116, 'B238', 1, 2, 3, -33, 0, 8, 13, 6, 'wc', 2, 19),
(117, 'B141', 1, 1, 3, -33, 0, 8, 14, 6, 'tanari wc', 2, 19),
(118, 'B303', 1, 3, -52, 0, 180, 23, 15, 6, 'ez valamilyen terem', 2, 1),
(119, 'B304', 1, 3, -32, 0, 180, 15, 15, 6, 'terem', 2, 1),
(120, 'B305', 1, 3, -16, 0, 180, 15, 15, 6, 'juj de jo', 2, 1),
(121, 'B306', 1, 3, 3, 0, 180, 21, 15, 6, 'meg egy tanterem', 2, 1),
(122, 'B307', 1, 3, 25, 0, 180, 21, 15, 6, 'terem 1', 2, 1),
(123, 'B309', 1, 3, 36, -31, 0, 7, 10, 6, 'bent az eloadoban igen', 2, 5),
(124, 'B311', 1, 3, 23, -43, 0, 16, 34, 10, 'harmadik eloado', 2, 28),
(125, 'B315', 1, 3, -4, -53, 0, 35, 15, 6, 'labor2', 2, 3),
(126, 'B316', 1, 3, -37, -53, 0, 27, 15, 6, 'labor3', 2, 3),
(127, 'B332', 1, 3, -27, -33, 0, 8, 13, 6, 'ez egynoi wc', 2, 12),
(128, 'B335', 1, 3, -17, -33, 0, 8, 13, 6, 'event', 2, 14),
(129, 'B336', 1, 3, -7, -33, 0, 8, 13, 6, 'wc', 2, 15),
(130, 'B323', 1, 3, -44, -35, 270, 15, 11, 6, 'la bor', 2, 3),
(131, 'A022', 1, 0, 55, 52, 180, 20, 7, 5, 'tan ari', 1, 1),
(132, 'A131', 1, 1, 48, -2, 180, 9, 14, 5, 'english bloody hell', 1, 5),
(133, 'A133', 1, 1, 57, -12, 90, 13, 7, 5, 'a²+b²=c²', 1, 19),
(134, 'A132', 1, 1, 48, -19, 0, 9, 7, 5, 'helyettesites', 1, 13);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `classroom_types`
--

CREATE TABLE `classroom_types` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `colorhex` varchar(9) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `classroom_types`
--

INSERT INTO `classroom_types` (`id`, `name`, `colorhex`) VALUES
(1, 'tanterem', '#00C853FF'),
(2, 'fizika előadó', '#00E5FFFF'),
(3, 'laboratórium', '#651FFFFF'),
(4, 'informatika terem', '#2979FFFF'),
(5, 'tanári szoba', '#FF9100FF'),
(6, 'előkészítő', '#C6FF00FF'),
(7, 'csoport szoba', '#76FF03FF'),
(8, 'iroda', '#607D8BFF'),
(9, 'öltöző', '#E040FBFF'),
(10, 'tanári', '#FF6D00FF'),
(11, 'könyvtár', '#AA00FFFF'),
(12, 'férfi wc', '#FF0000FF'),
(13, 'igazgató helyettes', '#D500F9FF'),
(14, 'női wc', '#00B8D4FF'),
(15, 'akadálymentes wc', '#64DD17FF'),
(16, 'porta', '#8D1B1BFF'),
(17, 'tornatermi öltöző', '#A1887FFF'),
(18, 'tornaterem', '#C2185BFF'),
(19, 'tanári wc', '#B71C1CFF'),
(20, 'dohányzó', '#424242FF'),
(21, 'büfé', '#FF6F00FF'),
(22, 'diákközpont', '#00E676FF'),
(23, 'orvosi szoba', '#FF5252FF'),
(24, 'személyzeti wc', '#ECECECFF'),
(25, 'könyvtáros', '#BF8F00FF'),
(26, 'diákönkormányzat', '#FF4081FF'),
(27, 'pszichológus', '#00E5CFFF'),
(28, 'előadó terem', '#7B1FA2FF'),
(29, 'titkárság', '#009688FF'),
(30, 'igazgató', '#D50000FF'),
(31, 'gazdasági vezető', '#2E7D32FF'),
(32, 'gazdasági iroda', '#AEEA00FF'),
(33, 'tárgyaló', '#9C27B0FF'),
(34, 'kazánház', '#4E342EFF'),
(35, 'tornaterem II.', '#512DA8FF');

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

--
-- A tábla adatainak kiíratása `corridors`
--

INSERT INTO `corridors` (`id`, `name`, `storey`, `x1`, `y1`, `x2`, `y2`, `width`, `barrier_free`, `is_outdoor`, `building_id`) VALUES
(1, 'ping pong felé', -1, 6, -80, 6, -12, 5, 1, 0, 1),
(2, 'lépcső után', -1, 7, -11, 28, -11, 9.8, 1, 0, 1),
(3, 'lány öltöző felé', -1, 15, -6, 15, 41, 5, 0, 0, 1),
(4, 'Bejárati folyosó', 0, -5, 6, -5, -10, 4.8, 1, 0, 1),
(5, 'Földszinti Aula', 0, -7, -16, 24, -16, 19, 1, 0, 1),
(6, 'Folyosó a Tesi tanári fele', 0, 11, -7, 11, 38, 5, 1, 0, 1),
(7, 'Folyosó A023 fele', 0, 11, 38, 45, 38, 5, 1, 0, 1),
(8, 'Folyosó a férfi WC felé', 0, 6, -25, 6, -81, 5, 1, 0, 1),
(9, 'Lépcső fele', 0, 29, -11, 24, -11, 9, 0, 0, 1),
(10, 'Folyosó tesiterem felé', 0, 48, -11, 29, -11, 9, 1, 0, 1),
(11, 'Udvar A tesi', 0, 33, -7, 33, 15, 8, 1, 1, 1),
(12, 'Udvar B fele', 0, 33, 15, 257, 15, 15, 1, 1, 1),
(13, 'ezaz', 1, 4, -16, 24, -16, 18, 1, 0, 1),
(14, 'hudejo', 1, 11, -7, 11, 38, 5, 1, 0, 1),
(15, 'igen', 1, 11, 38, 46, 38, 5, 1, 0, 1),
(16, 'na vegre', 1, 6, -25, 6, -81, 5, 1, 0, 1),
(17, 'ezaz2', 2, 4, -16, 24, -16, 18, 1, 0, 1),
(18, 'hudejo2', 2, 11, -7, 11, 38, 5, 1, 0, 1),
(19, 'igen2', 2, 11, 38, 46, 38, 5, 1, 0, 1),
(20, 'navegre2', 2, 6, -25, 6, -80, 5, 1, 0, 1),
(21, 'Folyosó a tanári mellett', 2, 46, 53, 46, 38, 5, 1, 0, 1),
(22, 'B-be be', 0, 9, -8, 9, 18, 8, 1, 1, 2),
(23, 'B aula', 0, -61, -17, 43, -17, 19, 1, 0, 2),
(24, 'Folyosó az óriáslabor fele', 0, 13, -26, 13, -43, 5, 1, 0, 2),
(25, 'Másik folyosó az óriáslabor fele', 0, -15, -43, -15, -26, 5, 1, 0, 2),
(26, 'Sok itt a folyosó', 0, -36, -26, -36, -37, 5, 1, 0, 2),
(27, 'Öltöző folyosó', 0, 42, -49, 20, -49, 3.9, 1, 0, 2),
(28, 'folyosó könyvárból ki', 0, 29, -27, 34, -39, 3, 1, 0, 2),
(29, 'Könyvár mögötti folyosó', 0, 34, -39, 34, -47, 3.8, 1, 0, 2),
(30, 'B első emelet folyosó', 1, -61, -17, 43, -17, 19, 1, 0, 2),
(31, 'Folyosó az óriáslabor fele1', 1, 11, -26, 11, -43, 5, 1, 0, 2),
(32, 'Másik folyosó az óriáslabor fele1', 1, -34, -43, -34, -26, 5, 1, 0, 2),
(33, 'folyosó hátul', 1, -34, -43, 11, -43, 5, 1, 0, 2),
(34, 'Belső folyosó', 2, -34, -43, 11, -43, 5, 1, 0, 2),
(35, 'B első emelet folyosó2', 2, -61, -17, 43, -17, 19, 1, 0, 2),
(36, 'Folyosó az óriáslabor fele2', 2, 11, -26, 11, -43, 5, 1, 0, 2),
(37, 'Másik folyosó az óriáslabor fele2', 2, -34, -43, -34, -26, 5, 1, 0, 2),
(38, 'B első emelet folyosó3', 3, -61, -17, 43, -17, 19, 1, 0, 2),
(39, 'Folyosó az óriáslabor fele3', 3, 11, -26, 11, -43, 5, 1, 0, 2),
(40, 'Másik folyosó az óriáslabor fele3', 3, -36, -43, -36, -26, 5, 1, 0, 2),
(41, 'belső folyosó B3', 3, -36, -43, 11, -43, 5, 1, 0, 2),
(42, 'folyosó angolosok fele', 1, 24, -12, 53, -12, 5, 0, 0, 1);

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

--
-- A tábla adatainak kiíratása `lifts`
--

INSERT INTO `lifts` (`id`, `name`, `x`, `y`, `min_storey`, `max_storey`, `building_id`) VALUES
(1, 'LiftA', 3, -27, -1, 2, 1),
(2, 'LiftB', 38, -17, 0, 3, 2);

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

--
-- A tábla adatainak kiíratása `stairs`
--

INSERT INTO `stairs` (`id`, `name`, `x`, `y`, `min_storey`, `max_storey`, `rotation`, `building_id`) VALUES
(1, 'Lépcső a mínusz egyre', 28, -11, -1, 0, 0, 1),
(2, 'A épület tűzlépcső', 0, -32, -1, 2, 270, 1),
(3, 'Lépcső az elsőre', 24, -20, 0, 1, 0, 1),
(4, 'Lépcső a másodikra', 24, -12, 1, 2, 0, 1),
(5, 'FőlépcsőB', -61, -17, 0, 3, 180, 2);

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
-- A tábla adatainak kiíratása `users`
--

INSERT INTO `users` (`id`, `email`, `password_hash`) VALUES
(1, 'petrik@petrik.petrik', '$2b$10$U8CTJYfN8Cgsai97TI2gteI5J94kR7Wd0brfF3vaRfamzmgVycIhG'),
(2, 'dami@dami.dami', '$2b$10$U8CTJYfN8Cgsai97TI2gteI5J94kR7Wd0brfF3vaRfamzmgVycIhG'),
(3, 'admin@admin.admin', '$2b$10$U8CTJYfN8Cgsai97TI2gteI5J94kR7Wd0brfF3vaRfamzmgVycIhG'),
(4, 'student@student.student', '$2b$10$U8CTJYfN8Cgsai97TI2gteI5J94kR7Wd0brfF3vaRfamzmgVycIhG');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('f00ff91b-c093-49db-ae8f-2edff99cc5ea', 'b146027e6a508d05b936f3ab6d685bc34e63234e54accf198e9dc9c448c050aa', '2026-06-17 12:56:47.391', '00000000000000_init', NULL, NULL, '2026-06-17 12:56:43.888', 1);

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
-- A tábla indexei `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `buildings`
--
ALTER TABLE `buildings`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT a táblához `classrooms`
--
ALTER TABLE `classrooms`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=135;

--
-- AUTO_INCREMENT a táblához `classroom_types`
--
ALTER TABLE `classroom_types`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT a táblához `corridors`
--
ALTER TABLE `corridors`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT a táblához `lifts`
--
ALTER TABLE `lifts`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
