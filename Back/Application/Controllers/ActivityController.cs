using ApplicationLayer.DTO;
using DataAccessLayer.IRepository;
using DataAccessLayer.Model;
using Microsoft.AspNetCore.Mvc;

namespace ApplicationLayer.Controllers
{
    [Route("/api/[controller]")]
    [ApiController]
    public class ActivityController : Controller
    {
        private readonly IRepoAll dal;
        public ActivityController(IRepoAll dal)
        {
            this.dal = dal;
        }

        [HttpPost("/create_activity/")]
        public IActionResult create_activity(ActivityDTO activityDTO)
        {
            try
            {
                bool response = dal.CreateActivity(activityDTO.GetActivity(), "fee98");
                if (response)
                {
                    return Ok("Added");
                }
                else throw new Exception();
            }
            catch (Exception e)
            {
                e.ToString();
                return BadRequest("Could not add activity");
            }
        }
        [HttpGet("/get_all_activities/")]
        public IActionResult get_all_activity()
        {
            try
            {
                return Ok(dal.GetAllActivities());
            }
            catch (Exception e)
            {
                e.ToString();
                return BadRequest("Could not read activities.");
            }
        }
    }
}
