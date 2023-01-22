using DataAccessLayer.Model;

namespace ApplicationLayer.DTO
{
    public class ActivityDTO
    {
        public string Name { get; set; } = string.Empty;
        public double CalorieBurnPerHour { get; set; }

        public Activity GetActivity()
        {
            Activity activity = new Activity();
            activity.Name = Name;
            activity.CalorieBurnPerHour = CalorieBurnPerHour;
            activity.Id = 0;

            return activity;
        }
    }
}
