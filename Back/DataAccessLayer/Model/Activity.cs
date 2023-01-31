using Microsoft.EntityFrameworkCore;

namespace DataAccessLayer.Model
{
    [Index(nameof(Name), IsUnique = true)]
    public class Activity
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public double CalorieBurnPerHour { get; set; }
        public List<string> OtherParameterName { get; set; } = new List<string>();
        public List<double> OtherParameterValue { get; set; } = new List<double>();
    }
}
