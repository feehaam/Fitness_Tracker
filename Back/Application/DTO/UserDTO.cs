using DataAccessLayer.Model;

namespace ApplicationLayer.DTO
{
    public class UserDTO
    {
        public string Name { get; set; } = String.Empty;
        public string Email { get; set; } = String.Empty;
        public string Password { get; set; } = String.Empty;

        public User GetUser()
        {
            User user = new User();
            user.Name = Name;
            user.Email = Email;
            user.Password = Password;
            user.Id = 0;

            return user;
        }
    }
}
