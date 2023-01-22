namespace DataAccessLayer.Model
{
    public class Exercise
    {
        public int Id { get; set; }
        public List<int> Activities { get;set; } = new List<int>();
    }
}
