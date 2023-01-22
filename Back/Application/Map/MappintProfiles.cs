using ApplicationLayer.DTO;
using AutoMapper;
using DataAccessLayer.Model;

namespace ApplicationLayer.Map
{
    public class MappintProfiles : Profile
    {
        public MappintProfiles()
        {
            CreateMap<UserDTO, User>();
            CreateMap<FoodDTO, Food>();
            CreateMap<ActivityDTO, Activity>();
        }
    }
}
