using Microsoft.EntityFrameworkCore;

namespace DataAccessLayer.Model
{
    [Index(nameof(Name), IsUnique = true)]
    public class Activity
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public double CalorieBurnPerHour { get; set; }
    }
}
