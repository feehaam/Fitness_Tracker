using DataAccessLayer.Model;
using Microsoft.EntityFrameworkCore;

namespace asingment.Model
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        public DbSet<User> Users { get; set; }
        public DbSet<Food> Foods { get; set; }
        public DbSet<Activity> Activities { get; set; }
        public DbSet<Day> Days { get; set; }
    }
}