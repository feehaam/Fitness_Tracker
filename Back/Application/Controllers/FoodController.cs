using ApplicationLayer.DTO;
using DataAccessLayer.IRepository;
using DataAccessLayer.Model;
using Microsoft.AspNetCore.Mvc;

namespace ApplicationLayer.Controllers
{
    [Route("/api/[controller]")]
    [ApiController]
    public class FoodController : Controller
    {
        private readonly IRepoAll dal;
        public FoodController(IRepoAll dal)
        {
            this.dal = dal;
        }
        [HttpPost("/create_food/")]
        public IActionResult create_food(FoodDTO foodDTO)
        {
            try
            {
                bool response = dal.CreateFood(foodDTO.GetFood(), "fee98");
                if (response)
                {
                    return Ok("Added");
                }
                else throw new Exception();
            }
            catch (Exception e)
            {
                e.ToString();
                return BadRequest("Could not add food");
            }
        }

        [HttpGet("/get_all_foods/")]
        public IActionResult get_all_foods()
        {
            try
            {
                var response = dal.GetAllFoods();
                if (response != null)
                {
                    return Ok(response);
                }
                else throw new Exception();
            }
            catch (Exception e)
            {
                e.ToString();
                return BadRequest("Failed to parse foods");
            }
        }
    }
}
