using DataAccessLayer.IRepository;
using DataAccessLayer.Model;
using Microsoft.AspNetCore.Mvc;

namespace ApplicationLayer.Controllers
{
    [Route("/api/[controller]")]
    [ApiController]
    public class DayController : Controller
    {
        private readonly IRepoAll dal;
        public DayController(IRepoAll dal)
        {
            this.dal = dal;
        }

        [HttpPost("/add_day/")]
        public IActionResult add_day(int userId, string userName, string password, Day day)
        { 
            try
            {
                User user = dal.GetUser(userId);
                if (user.Name.Equals(userName) && user.Password.Equals(password))
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
                bool response = dal.AddDay(userId, day);
                if (response)
                {
                    return Ok("Added");
                }
                else throw new Exception();
            }
            catch (Exception e)
            {
                e.ToString();
                return BadRequest("Could not add new day.");
            }
        }

        [HttpGet("/get_day/{dayId}/")]
        public IActionResult get_day(int dayId)
        {
            Day day = dal.GetDay(dayId);
            return Ok(day);
        }


        [HttpPost("/update_day/")]
        public IActionResult update_day(int userId, string userName, string password, Day day)
        {
            try
            {
                User user = dal.GetUser(userId);
                if (user.Name.Equals(userName) && user.Password.Equals(password))
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
                bool response = dal.UpdateDay(userId, day);
                if (response)
                {
                    return Ok("Updated.");
                }
                else throw new Exception();
            }
            catch (Exception e)
            {
                e.ToString();
                return BadRequest("Failed to update the day.");
            }
        }
    }
}
