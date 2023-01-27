using asingment.Model;
using DataAccessLayer.IRepository;
using DataAccessLayer.Model;
using Microsoft.EntityFrameworkCore;

namespace DataAccessLayer.Repository
{
    public class AllRepo : IRepoAll
    {
        private readonly DataContext context;
        public AllRepo(DataContext context)
        {
            this.context = context;
        }
        // Create
        public bool CreateFood(Food food, string adminKey)
        {
            try
            {
                context.Foods.Add(food);
                context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                ex.ToString();
                return false;
            }
        }
        public bool CreateActivity(Activity activity, string adminKey)
        {
            context.Activities.Add(activity);
            return Save();
        }
        public bool CreateUser (User user)
        {
            try
            {
                context.Users.Add(user);
                return Save();
            }
            catch(Exception ex)
            {
                ex.ToString(); 
                return false;
            }
        }
        public bool AddDay(int userId, Day day)
        {
            User user = GetUser(userId);
            if (user == null)
            {
                return false;
            }
            if (user.Days == null)
            {
                user.Days = new List<Day>();
            }
            foreach (Day D in user.Days)
            {
                if(D.Date.Equals(day.Date))
                {
                    day.Id = D.Id;
                    return UpdateDay(userId, day);
                }
            }
            user.Days.Add(day);
            context.SaveChanges();
            return true;
        }

        // Read
        public List<Food> GetAllFoods()
        {
            return context.Foods.ToList();
        }
        public Food GetFood(int id)
        {
            Food food = context.Foods.Where(i => i.Id == id).FirstOrDefault();
            return food;
        }
        public List<Activity> GetAllActivities()
        {
            return context.Activities.ToList();
        }
        public Activity GetActivity(int id)
        {
            Activity activity = context.Activities.Where(i => i.Id == id).FirstOrDefault();
            return activity;
        }
        public List<User> GetAllUsers()
        {
            List<User> res = new List<User>();
            List<User> users = context.Users.Include(i => i.Days).ToList();
            foreach (User user in users)
            {
                if (user != null)
                {
                    List<Day> days = new List<Day>();
                    foreach (Day D in user.Days)
                    {
                        days.Add(GetDay(D.Id));
                    }
                    user.Days = days;
                }
                res.Add(user);
            }

            return res;
        }
        public int GetUserId(string identity)
        {
            List<User> users = GetAllUsers();
            foreach(User U in users)
            {
                if(U.Email.Equals(identity) || U.Name.Equals(identity)) 
                    return U.Id;
            }
            return -1;
        }
        public User GetUser(int userId)
        {
            User user = context.Users.Where(i => i.Id == userId).Include(i => i.Days).FirstOrDefault();
            if(user != null)
            {
                List<Day> days = new List<Day>();
                foreach (Day D in user.Days)
                {
                    days.Add(GetDay(D.Id));
                }
                user.Days = days;
            }
            return user;
        }
        public Day GetDay(int dayId)
        {
            try
            {
                return context.Days.Where(i => i.Id == dayId).Include(i => i.Meals).Include(i => i.Exercises).Include(i => i.Water).First();
            }
            catch(Exception ex)
            {
                return null;
            }
        }

        // Update
        public bool UpdateDay(int userId, Day day)
        {
            User user = GetUser(userId);
            if (user == null)
            {
                return false;
            }
            if (user.Days == null)
            {
                return false;
            }
            foreach (Day D in user.Days)
            {
                if (D.Date.Equals(day.Date))
                {
                    if(day.Water == null || day.Water == null || day.Water.Amount == 0)
                    {
                        day.Water.Id = D.Water.Id;
                        day.Water.Amount = D.Water.Amount;
                    }
                    context.Days.Remove(D);
                    user.Days.Add(day);
                    return Save();
                }
            }
            return false;
        }

        // Others
        public bool Save()
        {
            var saved = context.SaveChanges();
            return saved > 0 ? true : false;
        }
    }
}
