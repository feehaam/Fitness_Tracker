using DataAccessLayer.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.IRepository
{
    public interface IRepoAll
    {
        // Create
        bool CreateFood(Food food, string adminKey);
        bool CreateActivity (Activity activity, string adminKey);
        bool CreateUser(User user);
        bool AddDay(int userId, Day day);
        // READ
        List<Food> GetAllFoods();
        List<Activity> GetAllActivities();
        List<User> GetAllUsers();
        int GetUserId(string identity);
        User GetUser(int userId);
        Day GetDay(int userId);
        // Update
        bool UpdateDay(int id, Day day);
        // Other
        bool Save();
    }
}
