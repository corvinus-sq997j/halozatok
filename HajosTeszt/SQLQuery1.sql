
GO
/****** Object:  Table [dbo].[diak]    Script Date: 2020. 02. 07. 13:03:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[diak](
	[DiakAz] [int] NOT NULL,
	[Nev] [nvarchar](50) NULL,
	[Szulido] [datetime] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[munka]    Script Date: 2020. 02. 07. 13:03:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[munka](
	[munkaId] [int] NOT NULL,
	[MhelyId] [int] NULL,
	[DiakAz] [int] NULL,
	[allas] [nvarchar](50) NULL,
	[datum] [datetime] NULL,
	[oradij] [int] NULL,
	[oraszam] [int] NULL,
	[kozepiskolas] [bit] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[munkaado]    Script Date: 2020. 02. 07. 13:03:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[munkaado](
	[MHelyID] [int] NOT NULL,
	[Munkaado_nev] [nvarchar](50) NULL,
	[Telepules] [nvarchar](50) NULL
) ON [PRIMARY]
GO
INSERT [dbo].[diak] ([DiakAz], [Nev], [Szulido]) VALUES (1, N'Kos Péter', CAST(N'1987-11-05T00:00:00.000' AS DateTime))
INSERT [dbo].[diak] ([DiakAz], [Nev], [Szulido]) VALUES (2, N'Port Imre', CAST(N'1990-05-05T00:00:00.000' AS DateTime))
INSERT [dbo].[diak] ([DiakAz], [Nev], [Szulido]) VALUES (3, N'Kovács Imre', CAST(N'1984-03-02T00:00:00.000' AS DateTime))
INSERT [dbo].[diak] ([DiakAz], [Nev], [Szulido]) VALUES (4, N'Horváth Emil', CAST(N'1988-05-02T00:00:00.000' AS DateTime))
INSERT [dbo].[diak] ([DiakAz], [Nev], [Szulido]) VALUES (5, N'Kapos Petra', CAST(N'1985-12-23T00:00:00.000' AS DateTime))
INSERT [dbo].[diak] ([DiakAz], [Nev], [Szulido]) VALUES (6, N'Csóka Anna', CAST(N'1981-11-30T00:00:00.000' AS DateTime))
INSERT [dbo].[diak] ([DiakAz], [Nev], [Szulido]) VALUES (7, N'Nyúl Tamás', CAST(N'1988-02-16T00:00:00.000' AS DateTime))
INSERT [dbo].[diak] ([DiakAz], [Nev], [Szulido]) VALUES (8, N'Ordasi Emma', CAST(N'1989-01-03T00:00:00.000' AS DateTime))
INSERT [dbo].[diak] ([DiakAz], [Nev], [Szulido]) VALUES (9, N'Koppány Olga', CAST(N'1984-02-28T00:00:00.000' AS DateTime))
INSERT [dbo].[diak] ([DiakAz], [Nev], [Szulido]) VALUES (10, N'Kozma Patrícia', CAST(N'1983-06-01T00:00:00.000' AS DateTime))
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (1, 1, 1, N'kézbesítő', CAST(N'2003-07-02T00:00:00.000' AS DateTime), 400, 4, 0)
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (2, 1, 2, N'ügyfélszolgálati munkatárs', CAST(N'2003-07-03T00:00:00.000' AS DateTime), 300, 4, 0)
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (3, 2, 1, N'kisegítő', CAST(N'2003-07-01T00:00:00.000' AS DateTime), 500, 4, 1)
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (4, 2, 2, N'eladó', CAST(N'2003-07-01T00:00:00.000' AS DateTime), 350, 4, 0)
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (5, 1, 1, N'kézbesítő', CAST(N'2003-07-03T00:00:00.000' AS DateTime), 450, 6, 0)
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (6, 1, 2, N'futár', CAST(N'2003-07-06T00:00:00.000' AS DateTime), 300, 5, 1)
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (7, 2, NULL, N'eladó', CAST(N'2003-07-07T00:00:00.000' AS DateTime), 400, 6, 0)
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (8, 9, NULL, N'kisegítő', CAST(N'2003-06-19T00:00:00.000' AS DateTime), 300, 4, 0)
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (9, 9, 6, N'takarító', CAST(N'2003-06-19T00:00:00.000' AS DateTime), 400, 4, 0)
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (10, 9, 6, N'takarító', CAST(N'2003-06-20T00:00:00.000' AS DateTime), 400, 4, 0)
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (11, 9, 8, N'kisegítő', CAST(N'2003-06-21T00:00:00.000' AS DateTime), 300, 6, 1)
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (12, 9, 8, N'kisegítő', CAST(N'2003-06-22T00:00:00.000' AS DateTime), 300, 6, 1)
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (13, 9, 6, N'takarító', CAST(N'2003-06-23T00:00:00.000' AS DateTime), 400, 4, 0)
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (14, 6, 4, N'ruhatáros', CAST(N'2003-09-11T00:00:00.000' AS DateTime), 400, 4, 0)
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (15, 6, 7, N'ruhatáros', CAST(N'2003-09-11T00:00:00.000' AS DateTime), 400, 4, 0)
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (16, 6, 5, N'pincér', CAST(N'2003-06-11T00:00:00.000' AS DateTime), 450, 6, 0)
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (17, 6, 5, N'pincér', CAST(N'2003-06-12T00:00:00.000' AS DateTime), 450, 6, 0)
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (18, 8, 9, N'eladó', CAST(N'2003-07-21T00:00:00.000' AS DateTime), 500, 4, 0)
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (19, 8, 9, N'eladó', CAST(N'2003-07-22T00:00:00.000' AS DateTime), 500, 4, 0)
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (20, 8, 10, N'takarító', CAST(N'2003-08-10T00:00:00.000' AS DateTime), 350, 6, 1)
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (21, 8, 10, N'takarító', CAST(N'2003-08-11T00:00:00.000' AS DateTime), 350, 6, 1)
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (22, 11, 5, N'eladó', CAST(N'2003-05-10T00:00:00.000' AS DateTime), 400, 4, 0)
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (23, 11, 6, N'raktáros', CAST(N'2003-05-20T00:00:00.000' AS DateTime), 300, 4, 0)
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (24, 11, 5, N'eladó', CAST(N'2003-06-23T00:00:00.000' AS DateTime), 300, 6, 0)
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (25, 10, NULL, N'takarító', CAST(N'2003-07-29T00:00:00.000' AS DateTime), 250, 4, 1)
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (26, 10, NULL, N'takarító', CAST(N'2003-07-30T00:00:00.000' AS DateTime), 250, 4, 1)
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (27, 10, 3, N'takarító', CAST(N'2003-07-31T00:00:00.000' AS DateTime), 300, 4, 1)
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (28, 10, 3, N'takarító', CAST(N'2003-08-01T00:00:00.000' AS DateTime), 300, 4, 1)
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (29, 10, 8, N'eladó', CAST(N'2003-09-12T00:00:00.000' AS DateTime), 300, 6, 1)
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (30, 10, 8, N'eladó', CAST(N'2003-09-13T00:00:00.000' AS DateTime), 300, 6, 1)
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (31, 7, 8, N'ruhatáros', CAST(N'2003-08-20T00:00:00.000' AS DateTime), 200, 4, 1)
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (32, 7, 8, N'ruhatáros', CAST(N'2003-08-21T00:00:00.000' AS DateTime), 200, 4, 1)
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (33, 7, NULL, N'ruhatáros', CAST(N'2003-08-22T00:00:00.000' AS DateTime), 200, 4, 1)
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (34, 7, NULL, N'ruhatáros', CAST(N'2003-08-23T00:00:00.000' AS DateTime), 200, 4, 1)
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (35, 4, NULL, N'raktáros', CAST(N'2003-10-10T00:00:00.000' AS DateTime), 300, 6, 0)
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (36, 4, NULL, N'raktáros', CAST(N'2003-10-11T00:00:00.000' AS DateTime), 300, 6, 0)
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (37, 4, NULL, N'raktáros', CAST(N'2003-10-12T00:00:00.000' AS DateTime), 300, 6, 0)
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (38, 5, 7, N'eladó', CAST(N'2003-06-05T00:00:00.000' AS DateTime), 400, 4, 0)
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (39, 5, 7, N'eladó', CAST(N'2003-06-06T00:00:00.000' AS DateTime), 400, 4, 0)
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (40, 5, 7, N'eladó', CAST(N'2003-06-07T00:00:00.000' AS DateTime), 400, 4, 0)
INSERT [dbo].[munka] ([munkaId], [MhelyId], [DiakAz], [allas], [datum], [oradij], [oraszam], [kozepiskolas]) VALUES (41, 11, NULL, N'eladó', CAST(N'2003-07-07T00:00:00.000' AS DateTime), 400, 6, 0)
INSERT [dbo].[munkaado] ([MHelyID], [Munkaado_nev], [Telepules]) VALUES (1, N'Bicaj Futárszolgálat', N'Csepűfalva')
INSERT [dbo].[munkaado] ([MHelyID], [Munkaado_nev], [Telepules]) VALUES (2, N'Soós Pékség', N'Szombati')
INSERT [dbo].[munkaado] ([MHelyID], [Munkaado_nev], [Telepules]) VALUES (3, N'Pokol Vagyonvédelem', N'Komád')
INSERT [dbo].[munkaado] ([MHelyID], [Munkaado_nev], [Telepules]) VALUES (4, N'Vass Kereskedés', N'Zombrád')
INSERT [dbo].[munkaado] ([MHelyID], [Munkaado_nev], [Telepules]) VALUES (5, N'Kati Virágbolt', N'Komád')
INSERT [dbo].[munkaado] ([MHelyID], [Munkaado_nev], [Telepules]) VALUES (6, N'Fekete Kávéház', N'Szombati')
INSERT [dbo].[munkaado] ([MHelyID], [Munkaado_nev], [Telepules]) VALUES (7, N'Körúti Kávéház', N'Csepűfalva')
INSERT [dbo].[munkaado] ([MHelyID], [Munkaado_nev], [Telepules]) VALUES (8, N'Királyi Cukrászat', N'Zombrád')
INSERT [dbo].[munkaado] ([MHelyID], [Munkaado_nev], [Telepules]) VALUES (9, N'Konty Fodrászat', N'Szombati')
INSERT [dbo].[munkaado] ([MHelyID], [Munkaado_nev], [Telepules]) VALUES (10, N'Falat Pékség', N'Komád')
INSERT [dbo].[munkaado] ([MHelyID], [Munkaado_nev], [Telepules]) VALUES (11, N'Korr Vaskereskedés', N'Csepűfalva')
