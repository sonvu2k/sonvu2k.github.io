-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th1 14, 2022 lúc 03:48 PM
-- Phiên bản máy phục vụ: 10.4.22-MariaDB
-- Phiên bản PHP: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `mgvl`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `congviec_yeuthich`
--

CREATE TABLE `congviec_yeuthich` (
  `Email_UV` varchar(100) NOT NULL,
  `Ma_HS` int(11) NOT NULL,
  `TinhTrang` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `congviec_yeuthich`
--

INSERT INTO `congviec_yeuthich` (`Email_UV`, `Ma_HS`, `TinhTrang`) VALUES
('nguyensonvu1k@gmail.com', 8, '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hv_bc`
--

CREATE TABLE `hv_bc` (
  `Email` varchar(200) NOT NULL,
  `TrinhDo` varchar(100) NOT NULL,
  `Truong` varchar(200) NOT NULL,
  `Khoa` varchar(100) NOT NULL,
  `ChuyenN` varchar(100) NOT NULL,
  `LoaiTN` varchar(100) NOT NULL,
  `TTBS` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `hv_bc`
--

INSERT INTO `hv_bc` (`Email`, `TrinhDo`, `Truong`, `Khoa`, `ChuyenN`, `LoaiTN`, `TTBS`) VALUES
('nguyensonvu1k@gmail.com', '', '', '', '', '', ''),
('nguyensonvu3k@gmail.com', 'Đại học 3', 'Đại học 3', 'Đại học 3', 'Đại học 3', 'Đại học 3', 'Đại học 3'),
('nguyensonvu4k@gmail.com', 'Trình độ 4', 'Trường, cơ sở, trung tâm, đào tạo 4', 'Khoa đào tạo 4', 'Chuyên ngành đào tạo 4', 'Loại tốt nghiệp 4', 'Thông tin bổ sung 4'),
('nguyensonvu5k@gmail.com', 'Đại học 5', 'Đại học 5', 'Đại học 5', 'Đại học 5', 'Đại học 5', 'Đại học 5'),
('nguyensonvu6k@gmail.com', 'Đại học 6', 'Đại học 6', 'Đại học 6', 'Đại học 6', 'Đại học 6', 'Đại học 6'),
('nguyensonvu7k@gmail.com', 'Đại học 7', 'Đại học 7', 'Đại học 7', 'Đại học 7', 'Đại học 7', 'Đại học 7'),
('nguyensonvu8k@gmail.com', 'LDPT', 'LDPT', 'LDPT', 'LDPT', 'LDPT', 'LDPT');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `knlv`
--

CREATE TABLE `knlv` (
  `Email` varchar(200) NOT NULL,
  `KNLV` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `knlv`
--

INSERT INTO `knlv` (`Email`, `KNLV`) VALUES
('nguyensonvu1k@gmail.com', '331'),
('nguyensonvu3k@gmail.com', '3'),
('nguyensonvu4k@gmail.com', '5'),
('nguyensonvu5k@gmail.com', '1'),
('nguyensonvu6k@gmail.com', '0'),
('nguyensonvu7k@gmail.com', '4'),
('nguyensonvu8k@gmail.com', '4');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `lh_ntd`
--

CREATE TABLE `lh_ntd` (
  `Ten_LH` varchar(110) NOT NULL,
  `Email_LH` varchar(110) NOT NULL,
  `SDT_LH` int(11) NOT NULL,
  `DiaChiLH` varchar(200) NOT NULL,
  `HTLH` varchar(50) NOT NULL,
  `Email_Cty` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `lh_ntd`
--

INSERT INTO `lh_ntd` (`Ten_LH`, `Email_LH`, `SDT_LH`, `DiaChiLH`, `HTLH`, `Email_Cty`) VALUES
('', '', 0, 'TP.Hồ Chí Minh', 'Liên hệ qua Email', 'congty1@gmail.com'),
('', '', 0, 'https://www.youtube.com/', 'https://www.youtube.com/', 'congty2@gmail.com'),
('Nguyễn Công Ty 3', 'congty3@gmail.com', 12341233, '', '', 'congty3@gmail.com'),
('', '', 0, 'Tp. Hồ Chí Minh', 'Liên hệ qua Email', 'nguyensonvuk1@gmail.com');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `moiphongvan`
--

CREATE TABLE `moiphongvan` (
  `Email_UV` varchar(100) NOT NULL,
  `Ma_HS` int(11) NOT NULL,
  `TrangThai` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nhatuyendung`
--

CREATE TABLE `nhatuyendung` (
  `Email` varchar(100) NOT NULL,
  `Ten_CT` text NOT NULL,
  `DiaChi` varchar(300) NOT NULL,
  `HinhDD` char(200) NOT NULL,
  `Nganh` varchar(50) NOT NULL,
  `TP` text NOT NULL,
  `MaSoThue` varchar(110) NOT NULL,
  `SDT` int(11) NOT NULL,
  `WebSite` char(50) NOT NULL,
  `GTCT` text NOT NULL,
  `LVHD` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `nhatuyendung`
--

INSERT INTO `nhatuyendung` (`Email`, `Ten_CT`, `DiaChi`, `HinhDD`, `Nganh`, `TP`, `MaSoThue`, `SDT`, `WebSite`, `GTCT`, `LVHD`) VALUES
('congty1@gmail.com', 'Công ty THNN A1', 'TP. Hồ Chí Minh', '', '', 'TP. Hồ Chi Minh', '12341234', 12341234, 'https://www.facebook.com/', 'Sơ lược về công ty', 'Công nghệ'),
('congty2@gmail.com', 'Công ty TNHH 2B', 'TP.Hồ Chí Minh', 'http://res.cloudinary.com/vunguyen/image/upload/v1642157088/bxtedze0l1stitkitkbz.png', '', 'TP. Hồ Chi Minh', '123412341', 12341234, 'https://www.youtube.com/', 'Sơ lược về công ty', ''),
('congty3@gmail.com', 'Công Ty TNHH C3', 'Gia Lai', '', '', 'TP. Hồ Chi Minh', '12341234', 0, '', '', 'Nông nghiệp'),
('nguyensonvuk1@gmail.com', 'Công ty TNHH ABCD', 'Tp. Hồ Chí Minh', 'http://res.cloudinary.com/vunguyen/image/upload/v1642149418/zzb1lqoaz7yowknelv3k.png', '', 'TP. Hồ Chi Minh', 'ABCABCABCD', 123412344, 'https://www.facebook.com/', 'Sơ lược về công ty', '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nn_th`
--

CREATE TABLE `nn_th` (
  `Email` varchar(200) NOT NULL,
  `NN` text NOT NULL,
  `TH` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `nn_th`
--

INSERT INTO `nn_th` (`Email`, `NN`, `TH`) VALUES
('nguyensonvu1k@gmail.com', '', ''),
('nguyensonvu3k@gmail.com', '3', '3'),
('nguyensonvu4k@gmail.com', 'Không', 'Không'),
('nguyensonvu5k@gmail.com', 'Không', 'Không'),
('nguyensonvu6k@gmail.com', 'Không ', 'Không'),
('nguyensonvu7k@gmail.com', 'Toeic 700', 'Không '),
('nguyensonvu8k@gmail.com', 'Không', 'Không');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ntk`
--

CREATE TABLE `ntk` (
  `Ten_ntk` varchar(200) NOT NULL,
  `ChucDanh` varchar(100) NOT NULL,
  `CongTy` varchar(200) NOT NULL,
  `EMAIL_NTK` varchar(200) NOT NULL,
  `SDT_NTK` int(100) NOT NULL,
  `Email` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `ntk`
--

INSERT INTO `ntk` (`Ten_ntk`, `ChucDanh`, `CongTy`, `EMAIL_NTK`, `SDT_NTK`, `Email`) VALUES
('', '', '', '', 0, 'nguyensonvu1k@gmail.com'),
('3', '3', '3', '3', 333333333, 'nguyensonvu3k@gmail.com'),
('Anh 4', 'Anh 4', 'Anh 4', 'Anh 4', 444444444, 'nguyensonvu4k@gmail.com'),
('Anh 6', 'Anh 6', 'Anh 6', 'Anh 6', 123412339, 'nguyensonvu5k@gmail.com'),
('Anh 7', 'Anh 7', 'Anh 7', 'Anh 7', 712341234, 'nguyensonvu6k@gmail.com'),
('Anh 8', 'Anh 8', 'Anh 8', 'Anh 8', 123412340, 'nguyensonvu7k@gmail.com'),
('Anh 9', 'Anh 9', 'Anh 9', 'Anh 9', 912312312, 'nguyensonvu8k@gmail.com');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `phongvan`
--

CREATE TABLE `phongvan` (
  `Ma_PV` int(11) NOT NULL,
  `Loai` text NOT NULL,
  `Email_UV` varchar(100) NOT NULL,
  `Ma_HS` varchar(100) NOT NULL,
  `TinhTrangPhongVan` varchar(100) NOT NULL,
  `Status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `phongvan`
--

INSERT INTO `phongvan` (`Ma_PV`, `Loai`, `Email_UV`, `Ma_HS`, `TinhTrangPhongVan`, `Status`) VALUES
(21, '1', 'nguyensonvu1k@gmail.com', '8', 'Đã duyệt hồ sơ', 1),
(28, '1', 'nguyensonvu1k@gmail.com', '10', 'Đã duyệt hồ sơ', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thongtindangnhap`
--

CREATE TABLE `thongtindangnhap` (
  `Ten` varchar(200) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `SDT` int(11) DEFAULT NULL,
  `LoaiAccount` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `thongtindangnhap`
--

INSERT INTO `thongtindangnhap` (`Ten`, `Password`, `Email`, `SDT`, `LoaiAccount`) VALUES
('Công ty THNN A1', '$2b$10$f.T5c3RiegfmFp1hs.5RZOemb967FjI7EFE2pQUv5geSg6Q3hBBFO', 'congty1@gmail.com', 0, 2),
('Công ty TNHH 2', '$2b$10$7WptcM9ue0adkLOzmdvCveVM9ZQUGAnsrRBcyXI4ihqaFDShqUIeu', 'congty2@gmail.com', 0, 2),
('Công Ty TNHH C3', '$2b$10$XT78JCBLo8AZ15zdWMFPguhDQiOcopMWRHq0IizquLZh286U1PWFq', 'congty3@gmail.com', 0, 2),
('Nguyễn Sơn Vũ', '$2b$10$qNPNyJ/JQpDmCnbBNfZ/b.KDi6pPYll.B4kSSrmjFqn9kl7vfp/Ja', 'nguyensonvu1k@gmail.com', 123412345, 1),
('Nguyễn Sơn Vũ 3', '$2b$10$95/ofv9xGcANx/rwxotsFu0EyfwoQKnhtWe3Et4N8EdcgPmap7HWe', 'nguyensonvu3k@gmail.com', 123412341, 1),
('Nguyễn Sơn Vũ 4', '$2b$10$2mCSjMGmtdCInrlnR/ubo.5NAN4GrfYDRyTAsHaEU0ggfsBSUOHWi', 'nguyensonvu4k@gmail.com', 123412341, 1),
('Nguyễn Sơn Vũ 5 ', '$2b$10$QB0ceWbAOPeLyLaooWbHheQbqmtUpgHVYa1r85W2joFBspROOQ.ge', 'nguyensonvu5k@gmail.com', 123412341, 1),
('Nguyễn Sơn Vũ 6', '$2b$10$GvBiWGxYiVIJzD1RvLs72eH3q59vozT3m/HvCz1HZbRz8kJTJOjS6', 'nguyensonvu6k@gmail.com', 12341234, 1),
('Nguyễn Sơn Vũ 7', '$2b$10$mbrRuaivFJX1zY.W/.QEcu41o8HSpIhsyAj84zkOzkU5I/Tk2ISo.', 'nguyensonvu7k@gmail.com', 123412341, 1),
('Nguyễn Sơn Vũ 8', '$2b$10$g6dVMkmXZuAwj7qfRUyAXuNaA7NY380feecenn6vdDeaUXPt6h.Yq', 'nguyensonvu8k@gmail.com', 123123123, 1),
('Công ty TNHH ABC', '$2b$10$oN7FBfvXp/G.Fl2.6SVlbeBA8iMIggulrLgHrlU/.o5W9awZluQHG', 'nguyensonvuk1@gmail.com', 0, 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thong_tin_ca_nhan`
--

CREATE TABLE `thong_tin_ca_nhan` (
  `Email` varchar(200) NOT NULL,
  `NgaySinh` char(20) NOT NULL,
  `HinhDD` char(200) NOT NULL,
  `DiaChi` varchar(200) NOT NULL,
  `GT` varchar(30) NOT NULL,
  `TTHN` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `thong_tin_ca_nhan`
--

INSERT INTO `thong_tin_ca_nhan` (`Email`, `NgaySinh`, `HinhDD`, `DiaChi`, `GT`, `TTHN`) VALUES
('nguyensonvu1k@gmail.com', '14/1/2000', 'http://res.cloudinary.com/vunguyen/image/upload/v1642146073/jadv3qqgrxm5x1alexia.jpg', 'TP.Hồ Chí Minh', 'Nam', 'Độc thân'),
('nguyensonvu3k@gmail.com', '14/1/2000', 'http://res.cloudinary.com/vunguyen/image/upload/v1642153367/tvfgy55izcp470y2m2td.jpg', 'TP.Hồ Chí Minh', 'Nam', 'Độc thân'),
('nguyensonvu4k@gmail.com', '14/1/2022', 'http://res.cloudinary.com/vunguyen/image/upload/v1642153719/xdckkbw9x5rbpm7hlwlc.jpg', 'TP.Hồ Chí Minh', 'Nam', 'Đã lập gia đình'),
('nguyensonvu5k@gmail.com', '14/1/1990', 'http://res.cloudinary.com/vunguyen/image/upload/v1642153780/rkrnzttcklm6ep4td26z.jpg', 'TP.Hồ Chí Minh', 'Nam', 'Độc thân'),
('nguyensonvu6k@gmail.com', '14/1/2001', 'http://res.cloudinary.com/vunguyen/image/upload/v1642154020/swdjaukzidppmecbepoy.jpg', 'TP.Hồ Chí Minh', 'Nam', 'Độc thân'),
('nguyensonvu7k@gmail.com', '14/1/1970', 'http://res.cloudinary.com/vunguyen/image/upload/v1642154566/knc0fwsr05fvn7iod4eg.jpg', 'TP.Hồ Chí Minh', 'Nam', 'Độc thân'),
('nguyensonvu8k@gmail.com', '14/1/2000', 'http://res.cloudinary.com/vunguyen/image/upload/v1642154884/zkiuctajxzlh5yvintbj.jpg', 'TP.Hồ Chí Minh', 'Nam', 'Độc thân');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thong_tin_ho_so`
--

CREATE TABLE `thong_tin_ho_so` (
  `Ma_HS` int(100) NOT NULL,
  `LoaiHS` varchar(200) NOT NULL,
  `NgayTao` text NOT NULL,
  `Ngay` date DEFAULT NULL,
  `TinhTrang` varchar(30) NOT NULL,
  `LuotXem` int(100) NOT NULL,
  `Email` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `thong_tin_ho_so`
--

INSERT INTO `thong_tin_ho_so` (`Ma_HS`, `LoaiHS`, `NgayTao`, `Ngay`, `TinhTrang`, `LuotXem`, `Email`) VALUES
(0, 'Hồ sơ đính kèm', '14/1/2022', '2022-01-14', 'Đã duyệt', 0, 'nguyensonvu1k@gmail.com'),
(4, 'Hồ sơ đính kèm', '14/1/2022', '2022-01-14', 'Đã duyệt', 0, 'nguyensonvu3k@gmail.com'),
(5, 'Hồ sơ đính kèm', '14/1/2022', '2022-01-14', 'Đã duyệt', 0, 'nguyensonvu4k@gmail.com'),
(6, 'Hồ sơ đính kèm', '14/1/2022', '2022-01-14', 'Đã duyệt', 0, 'nguyensonvu5k@gmail.com'),
(7, 'Hồ sơ đính kèm', '14/1/2022', '2022-01-14', 'Đã duyệt', 0, 'nguyensonvu6k@gmail.com'),
(8, 'Hồ sơ đính kèm', '14/1/2022', '2022-01-14', 'Đã duyệt', 0, 'nguyensonvu7k@gmail.com'),
(9, 'Hồ sơ đính kèm', '14/1/2022', '2022-01-14', 'Đang duyệt', 0, 'nguyensonvu8k@gmail.com');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thong_tin_tong_quan`
--

CREATE TABLE `thong_tin_tong_quan` (
  `Email` varchar(200) NOT NULL,
  `Vitri` varchar(200) NOT NULL,
  `TDHV` varchar(100) NOT NULL,
  `KN` int(11) NOT NULL,
  `CapBac` varchar(50) NOT NULL,
  `NNMM` varchar(70) NOT NULL,
  `ML` int(11) NOT NULL,
  `NLVMM` varchar(100) NOT NULL,
  `HTLM` varchar(50) NOT NULL,
  `MTNN` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `thong_tin_tong_quan`
--

INSERT INTO `thong_tin_tong_quan` (`Email`, `Vitri`, `TDHV`, `KN`, `CapBac`, `NNMM`, `ML`, `NLVMM`, `HTLM`, `MTNN`) VALUES
('nguyensonvu1k@gmail.com', 'Vị trí/ việc làm cần ứng tuyển ', 'Tiến sĩ', 331, 'Nhân viên', 'Kỹ thuật Y sinh', 12312312, 'Tỉnh Bà Rịa-Vũng Tàu', 'Toàn thời gian', '123123'),
('nguyensonvu3k@gmail.com', 'Trưởng phòng IT', 'Thạc sĩ', 3, 'Trưởng phòng', 'Máy tính/IT', 50000000, 'TP. Hồ Chi Minh', 'Toàn thời gian', 'Mục tiêu nghề nghiệp'),
('nguyensonvu4k@gmail.com', 'Bảo vệ', 'Tiến sĩ', 5, 'Nhân viên', 'Đông phương học', 5000000, 'TP. Hồ Chi Minh', 'Toàn thời gian', 'Mục tiêu nghề nghiệp 4'),
('nguyensonvu5k@gmail.com', 'Kế toán', 'Cữ nhân', 1, 'Nhân viên', 'Kế toán/Tài chính', 10000000, 'TP. Hồ Chi Minh', 'Toàn thời gian', 'Mục tiêu nghề nghiệp 5'),
('nguyensonvu6k@gmail.com', 'Thực tập sinh IT', 'Cữ nhân', 0, 'Mới tốt nghiệp / Thực tập sinh', 'Máy tính/IT', 3000000, 'TP. Hồ Chi Minh', 'Bán thời gian', 'Mục tiêu nghề nghiệp 6'),
('nguyensonvu7k@gmail.com', 'Giám đốc sáng tạo', 'Tiến sĩ', 4, 'Giám đốc', 'Kinh doanh/Tiếp thị/Marketing', 100000000, 'TP. Hồ Chi Minh', 'Toàn thời gian', ' Mục tiêu nghề nghiệ 7'),
('nguyensonvu8k@gmail.com', 'Nhân viên vệ sinh', 'Lao động phổ thông', 4, 'Nhân viên', 'Dịch vụ', 5000000, 'TP. Hồ Chi Minh', 'Toàn thời gian', 'Mục tiêu nghề nghiệp 8');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tintuyendung`
--

CREATE TABLE `tintuyendung` (
  `Ma_HS` int(11) NOT NULL,
  `Email` char(100) NOT NULL,
  `ChucDanh` varchar(100) NOT NULL,
  `TinhTrang` varchar(50) NOT NULL,
  `LuotXem` int(11) NOT NULL,
  `SLCanTuyen` int(11) NOT NULL,
  `Capbac` varchar(50) NOT NULL,
  `LoaiHinh` varchar(50) NOT NULL,
  `MucLuong` int(11) NOT NULL,
  `DiaDiemLamViec` varchar(100) NOT NULL,
  `Nganh` varchar(100) NOT NULL,
  `MoTaCongViec` text NOT NULL,
  `QuyenLoi` text NOT NULL,
  `KinhNghiem` int(11) NOT NULL,
  `BangCap` varchar(30) NOT NULL,
  `GioiTinh` varchar(30) NOT NULL,
  `HanNopHoSo` char(30) NOT NULL,
  `NgonNguHoSo` varchar(30) NOT NULL,
  `YeuCauCongViec` text NOT NULL,
  `YeuCauHoSo` text NOT NULL,
  `Soluongungtuyen` int(11) NOT NULL,
  `PhongVanTai` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `tintuyendung`
--

INSERT INTO `tintuyendung` (`Ma_HS`, `Email`, `ChucDanh`, `TinhTrang`, `LuotXem`, `SLCanTuyen`, `Capbac`, `LoaiHinh`, `MucLuong`, `DiaDiemLamViec`, `Nganh`, `MoTaCongViec`, `QuyenLoi`, `KinhNghiem`, `BangCap`, `GioiTinh`, `HanNopHoSo`, `NgonNguHoSo`, `YeuCauCongViec`, `YeuCauHoSo`, `Soluongungtuyen`, `PhongVanTai`) VALUES
(8, 'nguyensonvuk1@gmail.com', 'Giám đốc Maketing', 'Đã duyệt', 0, 1, 'Giám đốc', 'Toàn thời gian', 30000000, 'TP. Hồ Chi Minh', 'Kinh doanh/Tiếp thị/Marketing', 'Mô tả công việc', 'Quyền lợi ', 4, 'Thạc sĩ', 'Nam', '19/1/2022', 'Tiếng Việt', 'Yêu cầu công việc', 'Yêu cầu hồ sơ', 1, 'Chúng tôi sẽ liên lạc qua Email của bạn'),
(9, 'congty1@gmail.com', 'Giám đốc Maketing', 'Đã duyệt', 0, 1, 'Giám đốc', 'Toàn thời gian', 30000000, 'TP. Hồ Chi Minh', 'Kinh doanh/Tiếp thị/Marketing', 'Mô tả công việc 1', 'Quyền lợi 1', 5, 'Thạc sĩ', 'Nam', '19/1/2022', 'Tiếng Việt', '1', 'Yêu cầu hồ sơ 1', 0, 'Chúng tôi sẽ liên hệ qua Email'),
(10, 'congty1@gmail.com', 'Nhân viên vệ sinh', 'Đã duyệt', 0, 2, 'Nhân viên', 'Toàn thời gian', 10000000, 'TP. Hồ Chi Minh', 'Thời vụ', 'Mô tả công việc *', 'yền lợ1', 2, 'Lao động phổ thông', 'Nữ', '18/1/2022', 'Tiếng Việt', 'Không', 'Không', 1, 'Chúng tôi sẽ liên lạc qua số điện thoại'),
(11, 'congty1@gmail.com', 'Thực tập sinh', 'Đã duyệt', 0, 2, 'Mới tốt nghiệp / Thực tập sinh', 'Toàn thời gian', 5000000, 'TP. Hồ Chi Minh', 'Hành chính/Nhân sự', '  Mô tả công việc *', 'Quyền lợi', 0, 'Cữ nhân', 'Nam', '26/12/2021', 'Tiếng Việt', 'êu cầu công việc ', 'Không', 0, 'Chúng tôi sẽ liên hệ qua Email'),
(12, 'congty2@gmail.com', 'Nhân viên Bất động sản', 'Đã duyệt', 0, 2, 'Nhân viên', 'Toàn thời gian', 30000000, 'TP. Hồ Chi Minh', 'Kinh doanh/Tiếp thị/Marketing', 'Mô tả công việc *', 'Quyền lợi', 3, 'Cữ nhân', 'Nam', '17/1/2022', 'Tiếng Anh', '123', 'ádasdasdasda', 0, 'Chúng tôi sẽ gọi cho bạn'),
(13, 'congty2@gmail.com', 'Nhân viên bán hàng', 'Đã duyệt', 0, 4, 'Nhân viên', 'Toàn thời gian', 10000000, 'TP. Hồ Chi Minh', 'Dịch vụ', 'Mô tả công việc ', 'Quyền lợi *', 2, 'Kỹ sư', 'Nữ', '22/2/2022', 'Tiếng Việt', 'Bán hàng', 'Bán hàng', 0, 'Bán hàng'),
(14, 'congty2@gmail.com', 'Giám đốc Maketing', 'Đã duyệt', 0, 1, 'Giám đốc', 'Toàn thời gian', 30000000, 'Tỉnh Kiên Giang', 'Đông phương học', 'Mô tả công việc *', 'Quyền lợi *\nGiám đốc Maketing\n1\nGiám đốc\n\nToàn thời gian\n\n30000000\nTỉnh Kiên Giang\n\nĐông phương học\n\nMô tả công việc *\n', 3, 'Tiến sĩ', 'Nữ', '17/1/2022', 'Tiếng Anh', 'êu cầu công việc *         .      Yêu cầu hồ sơ *\n3\nTiến sĩ\n\nNữ\n\n17/01/2022\nTiếng Anh\n', 'êu cầu công việc *         .      Yêu cầu hồ sơ *\n3\nTiến sĩ\n\nNữ\n\n17/01/2022\nTiếng Anh\n', 0, 'Liên lạc qua Mail'),
(15, 'congty3@gmail.com', 'Giám đốc Maketing', 'Đã duyệt', 0, 12, 'Giám đốc', 'Toàn thời gian', 30000000, 'Tỉnh Đồng Nai', 'Đạo diễn điện ảnh - Truyền hình', '123123', '123das', 11, 'Kỹ sư', 'Nữ', '18/1/2022', 'Tiếng Việt', '123', '123123', 0, '12dasdas'),
(16, 'congty3@gmail.com', 'TTS IT', 'Đã duyệt', 0, 12312, 'Trưởng phòng', 'Thực tập', 30000000, 'Tỉnh Đồng Nai', 'Máy tính/IT', ' Mô tả công việc ', 'Quyền lợi', 1, 'Cữ nhân', 'Nam', '18/1/2022', '', '', '', 0, ''),
(17, 'congty3@gmail.com', 'Giám đốc sáng tạo', 'Đã duyệt', 0, 21, 'Nhân viên', 'Toàn thời gian', 30000000, 'Tỉnh Kiên Giang', 'Đạo diễn điện ảnh - Truyền hình', '123', 'đấ12', 12, 'Kỹ sư', 'Nữ', '16/1/2022', 'Tiếng Việt', '', '', 0, ''),
(18, 'congty3@gmail.com', 'Nhân viên dọn vệ sinh', 'Đã duyệt', 0, 5, 'Nhân viên', 'Toàn thời gian', 30000000, 'Thành phố Hà Nội', 'Thời vụ', 'sdasdas', 'đấ', 1, '', '', '24/1/2022', '', '', '', 0, ''),
(19, 'congty3@gmail.com', 'Phó giám đốc ', 'Đang duyệt', 0, 1, 'Giám đốc', 'Toàn thời gian', 30000000, 'Tỉnh An Giang', 'Tất cả các lĩnh vực (tổng hợp)', '12312', ' Quyền lợi ', 2, 'Tiến sĩ', 'Nam', '24/1/2022', '', '', '', 0, ''),
(20, 'congty3@gmail.com', 'Nhân viên sữa chữa', 'Đã duyệt', 0, 4, 'Nhân viên', 'Toàn thời gian', 30000000, 'Tỉnh An Giang', 'Tất cả các lĩnh vực (tổng hợp)', '  Mô tả công việc *', '\n      Quyền lợi *', 3, 'Tiến sĩ', 'Nữ', '16/1/2022', 'Tiếng Pháp', 'Yêu cầu công việc *', 'Yêu cầu công việc *', 0, 'Gửi tin nhắn cho người được mời phỏng vấn ( bắt buộc)');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `hv_bc`
--
ALTER TABLE `hv_bc`
  ADD PRIMARY KEY (`Email`);

--
-- Chỉ mục cho bảng `knlv`
--
ALTER TABLE `knlv`
  ADD PRIMARY KEY (`Email`);

--
-- Chỉ mục cho bảng `lh_ntd`
--
ALTER TABLE `lh_ntd`
  ADD PRIMARY KEY (`Email_Cty`);

--
-- Chỉ mục cho bảng `nhatuyendung`
--
ALTER TABLE `nhatuyendung`
  ADD PRIMARY KEY (`Email`);

--
-- Chỉ mục cho bảng `nn_th`
--
ALTER TABLE `nn_th`
  ADD PRIMARY KEY (`Email`);

--
-- Chỉ mục cho bảng `ntk`
--
ALTER TABLE `ntk`
  ADD PRIMARY KEY (`Email`);

--
-- Chỉ mục cho bảng `phongvan`
--
ALTER TABLE `phongvan`
  ADD PRIMARY KEY (`Ma_PV`);

--
-- Chỉ mục cho bảng `thongtindangnhap`
--
ALTER TABLE `thongtindangnhap`
  ADD PRIMARY KEY (`Email`);

--
-- Chỉ mục cho bảng `thong_tin_ca_nhan`
--
ALTER TABLE `thong_tin_ca_nhan`
  ADD PRIMARY KEY (`Email`);

--
-- Chỉ mục cho bảng `thong_tin_ho_so`
--
ALTER TABLE `thong_tin_ho_so`
  ADD PRIMARY KEY (`Ma_HS`);

--
-- Chỉ mục cho bảng `thong_tin_tong_quan`
--
ALTER TABLE `thong_tin_tong_quan`
  ADD PRIMARY KEY (`Email`);

--
-- Chỉ mục cho bảng `tintuyendung`
--
ALTER TABLE `tintuyendung`
  ADD PRIMARY KEY (`Ma_HS`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `phongvan`
--
ALTER TABLE `phongvan`
  MODIFY `Ma_PV` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT cho bảng `thong_tin_ho_so`
--
ALTER TABLE `thong_tin_ho_so`
  MODIFY `Ma_HS` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `tintuyendung`
--
ALTER TABLE `tintuyendung`
  MODIFY `Ma_HS` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `nn_th`
--
ALTER TABLE `nn_th`
  ADD CONSTRAINT `nn_th_ibfk_1` FOREIGN KEY (`Email`) REFERENCES `thongtindangnhap` (`Email`);

--
-- Các ràng buộc cho bảng `thong_tin_ca_nhan`
--
ALTER TABLE `thong_tin_ca_nhan`
  ADD CONSTRAINT `thong_tin_ca_nhan_ibfk_1` FOREIGN KEY (`Email`) REFERENCES `thongtindangnhap` (`Email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
