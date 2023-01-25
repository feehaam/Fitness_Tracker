using ApplicationLayer.DTO;
using DataAccessLayer.IRepository;
using DataAccessLayer.Model;
using Microsoft.AspNetCore.Mvc;

namespace ApplicationLayer.Controllers
{
    [Route("/api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly IRepoAll dal;
        public UserController(IRepoAll dal)
        {
            this.dal = dal;
        }

        [HttpPost("/create_user/")]
        public IActionResult create_user(UserDTO userDto)
        {
            try
            {
                User user = userDto.GetUser();
                bool response = dal.CreateUser(user);
                if (response)
                {
                    return Ok("Added");
                }
                else throw new Exception();
            }
            catch (Exception e)
            {
                e.ToString();
                return BadRequest("Could not add new user.");
            }
        }

        [HttpGet("/get_all_users/")]
        public IActionResult get_all_users()
        {
            try
            {
                List<User> response = dal.GetAllUsers();
                if (response != null)
                {
                    foreach(User user in response)
                    {
                        user.Password = "********";
                    }
                    return Ok(response);
                }
                else throw new Exception();
            }
            catch (Exception e)
            {
                e.ToString();
                return BadRequest("Failed to parse user information.");
            }
        }

        [HttpGet("/get_user/{userId}")]
        public IActionResult get_user(int userId, string userName, string password)
        {
            try
            {
                User user = dal.GetUser(userId);
                if (user != null && (user.Name.Equals(userName) || user.Email.Equals(userName)) && user.Password.Equals(password))
                {
                    ;
                }
                else return BadRequest("Login with corrent infromation first!");
            }
            catch (Exception ex)
            {
                return BadRequest("Login with corrent infromation first!");
            }
            try
            {
                User response = dal.GetUser(userId);
                if (response != null)
                {
                    response.Password = "********";
                    return Ok(response);
                }
                else throw new Exception();
            }
            catch (Exception e)
            {
                e.ToString();
                return BadRequest("Failed to parse user.");
            }
        }

        [HttpGet("/get_userid/{identity}")]
        public IActionResult get_userId(string identity)
        {
            try
            {
                int response = dal.GetUserId(identity);
                if (response > 0)
                {
                    return Ok(response);
                }
                else return BadRequest(-1);
            }
            catch (Exception e)
            {
                e.ToString();
                return BadRequest(-1);
            }
        }

        [HttpPost("/add_weight/")]
        public IActionResult add_weight(int userId, string userName, string password, double weight)
        {
            try
            {
                User user = dal.GetUser(userId);
                if (user != null && user.Name.Equals(userName) && user.Password.Equals(password))
                {
                    if (weight < 30 || weight > 150) return BadRequest("Invalid weight");
                    user.Weights.Add(weight);
                    string date = DateTime.Now.ToString("dd-MM-yyyy");
                    user.WeightDates.Add(date);
                    dal.Save();
                    return Ok(date);
                }
                else return BadRequest("Login with corrent infromation first!");
            }
            catch (Exception ex)
            {
                return BadRequest("Failed to add weight.");
            }
        }
    }
}
