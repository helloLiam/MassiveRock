namespace Digb.Utility
{
    using Digb.Entity;
    using System;
    using System.Collections.Generic;

    public interface IFastaMapper
    {
        public List<GlobalGerm> GlobalGermMapper(String filePath);

        public List<Housefly> HouseflyMapper(String filePath);

        public List<Mosquitoes> MosquitoesMapper(String filePath);

        public List<Fruitfly> FruitflyMapper(String filePath);

        public List<Cockroach> CockroachMapper(String filePath);

        public Double DoubleConversion(Double[] data);
    }
}
