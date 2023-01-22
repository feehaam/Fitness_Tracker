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
        public IActionResult get_user(int userId)
        {
            try
            {
                User response = dal.GetUser(userId);
                if (response != null)
                {
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
    }
}
