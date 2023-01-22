namespace DataAccessLayer.Model
{
    public class Day
    {
        public int Id { get; set; }
        public string Date { get; set; } = String.Empty;
        public List<Meal> Meals { get; set; } = new List<Meal>();
        public Water Water { get; set; } = new Water();
        public List<Exercise> Exercises { get; set; } = new List<Exercise>();
    }
}
