using DataAccessLayer.Model;

namespace ApplicationLayer.DTO
{
    public class UserDTO
    {
        public string Name { get; set; } = String.Empty;
        public string Email { get; set; } = String.Empty;
        public string Password { get; set; } = String.Empty;
        public double Weight { get; set; }
        public double Height { get; set; }
        public int Age { get; set; }
        public bool Gender { get; set; }


        public User GetUser()
        {
            User user = new User();
            user.Name = Name;
            user.Email = Email;
            user.Password = Password;
            user.Id = 0;
            user.Age = Age;
            user.Weight = Weight;
            user.Height = Height;
            user.Gender = Gender;
            user.Weights = new List<double>();
            user.WeightDates = new List<string>();

            if(Weight > 30 && Weight < 150)
            {
                user.Weights.Add(Weight);
                user.WeightDates.Add(DateTime.Now.ToString("dd-MM-yyyy"));
            }

            return user;
        }
    }
}
