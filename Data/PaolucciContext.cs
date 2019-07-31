using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using MySql.Data.EntityFrameworkCore.Extensions;

namespace paolucci_decorazioni.Data
{
    public class PaolucciContext : DbContext
    {
        public PaolucciContext(DbContextOptions<PaolucciContext> o) : base(o) { }
        
        public virtual DbSet<Contact> Contacts { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder){
            optionsBuilder.ConfigureWarnings(warnings => warnings.Throw(RelationalEventId.QueryClientEvaluationWarning));
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Contact>(entity => 
            {
                entity.HasKey(e => e.id);

                entity.Property(e => e.id).HasColumnType("int").ValueGeneratedOnAdd();
                entity.Property(e => e.Name).HasMaxLength(255).ValueGeneratedNever();
                entity.Property(e => e.LastName).HasMaxLength(255).ValueGeneratedNever();
                entity.Property(e => e.Email).HasMaxLength(255).ValueGeneratedNever();
                entity.Property(e => e.Phone).ValueGeneratedNever().IsRequired(false).HasDefaultValueSql("((null))");
                entity.Property(e => e.Message).HasMaxLength(255).ValueGeneratedNever();
            });
        }
    }
    
}