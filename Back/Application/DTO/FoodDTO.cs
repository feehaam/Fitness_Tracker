using DataAccessLayer.Model;

namespace ApplicationLayer.DTO
{
    public class FoodDTO
    {
        public string Name { get; set; } = string.Empty;
        public double Calories { get; set; }
        public double CarbohydrateDietryFiber { get; set; }
        public double CarbohydrateSugar { get; set; }
        public double Protein { get; set; }
        public double FatSaturated { get; set; }
        public double FatTrans { get; set; }
        public double Cholesterol { get; set; }
        public double Iron { get; set; }
        public double Magnesium { get; set; }
        public double Calcium { get; set; }
        public double Sodium { get; set; }
        public double Potassium { get; set; }
        public double Cobalamin { get; set; }
        public double Vitamin { get; set; }
        public double VitaminA { get; set; }
        public double VitaminB { get; set; }
        public double VitaminC { get; set; }
        public double VitaminD { get; set; }
        public double VitaminE { get; set; }
        public double VitaminK { get; set; }

        public Food GetFood()
        {
            Food food = new Food();
            food.Id = 0;
            food.Name = Name;
            food.Calories = Calories;
            food.CarbohydrateDietryFiber = CarbohydrateDietryFiber;
            food.CarbohydrateSugar = CarbohydrateSugar;
            food.Protein = Protein;
            food.FatSaturated = FatSaturated;
            food.FatTrans = FatTrans;
            food.Cholesterol = Cholesterol;
            food.Iron = Iron;
            food.Magnesium = Magnesium;
            food.Calcium = Calcium;
            food.Sodium = Sodium;
            food.Potassium = Potassium;
            food.Cobalamin= Cobalamin;
            food.Vitamin = Vitamin;
            food.VitaminC = VitaminC;
            food.VitaminD = VitaminD;
            food.VitaminB = VitaminB;
            food.VitaminK = VitaminK;
            food.VitaminA = VitaminA;
            food.VitaminE = VitaminE;

            return food;
        }
    }
}
