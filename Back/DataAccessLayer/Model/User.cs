﻿namespace DataAccessLayer.Model
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; } = String.Empty;
        public string Email { get; set; } = String.Empty;
        public string Password { get; set; } = String.Empty;
        public List<Day> Days { get; set; } = new List<Day>();
        public double Weight { get; set; }
        public double Height { get; set; }
        public int Age { get; set; }
    }
}
