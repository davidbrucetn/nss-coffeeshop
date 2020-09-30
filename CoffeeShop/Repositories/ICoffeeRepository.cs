using CoffeeShop.Models;
using System.Collections.Generic;

namespace CoffeeShop.Repositories
{
    public interface ICoffeeRepository
    {
        void Add(Coffee coffee);
        void Delete(int coffeeId);
        Coffee Get(int coffeeId);
        List<Coffee> GetAll();
        void Update(Coffee coffee);
    }
}