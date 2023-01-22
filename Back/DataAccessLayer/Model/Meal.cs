namespace DataAccessLayer.Model
{
    public class Meal
    {
        public int Id { get; set; }
        public List<int> Foods { get; set; } = new List<int>();
        public List<double> Amount { get; set; } = new List<double>();
    }
}
