using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace HajosTeszt.Models
{
    public partial class crudesq997jContext : DbContext
    {
        public crudesq997jContext()
        {
        }

        public crudesq997jContext(DbContextOptions<crudesq997jContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Diak> Diaks { get; set; }
        public virtual DbSet<Munka> Munkas { get; set; }
        public virtual DbSet<Munkaado> Munkaados { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=szghalo.database.windows.net;Initial Catalog=crude-sq997j;User ID=sq997j;Password=Subsequent37;Connect Timeout=30;Encrypt=True;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Diak>(entity =>
            {
                //entity.HasNoKey();
                entity.HasKey(e => e.DiakAz);

                entity.ToTable("diak");

                entity.Property(e => e.Nev).HasMaxLength(50);

                entity.Property(e => e.Szulido).HasColumnType("datetime");
            });

            modelBuilder.Entity<Munka>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("munka");

                entity.Property(e => e.Allas)
                    .HasMaxLength(50)
                    .HasColumnName("allas");

                entity.Property(e => e.Datum)
                    .HasColumnType("datetime")
                    .HasColumnName("datum");

                entity.Property(e => e.Kozepiskolas).HasColumnName("kozepiskolas");

                entity.Property(e => e.MunkaId).HasColumnName("munkaId");

                entity.Property(e => e.Oradij).HasColumnName("oradij");

                entity.Property(e => e.Oraszam).HasColumnName("oraszam");
            });

            modelBuilder.Entity<Munkaado>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("munkaado");

                entity.Property(e => e.MhelyId).HasColumnName("MHelyID");

                entity.Property(e => e.MunkaadoNev)
                    .HasMaxLength(50)
                    .HasColumnName("Munkaado_nev");

                entity.Property(e => e.Telepules).HasMaxLength(50);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
    //public DbSet<Diak> Diak { get; set; }
}
