using DataAccessLayer.Model;

namespace ApplicationLayer.DTO
{
    public class ActivityDTO
    {
        public string Name { get; set; } = string.Empty;
        public double CalorieBurnPerHour { get; set; }
        public List<string> OtherParameterName { get; set; } = new List<string>();
        public List<double> OtherParameterValue { get; set; } = new List<double>();

        public Activity GetActivity()
        {
            Activity activity = new Activity();
            activity.Name = Name;
            activity.CalorieBurnPerHour = CalorieBurnPerHour;
            activity.Id = 0;
            activity.OtherParameterName = OtherParameterName;
            activity.OtherParameterValue = OtherParameterValue;
            return activity;
        }
    }
}
