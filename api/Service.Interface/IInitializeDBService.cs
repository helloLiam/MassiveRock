namespace Digb.Service
{
    using Digb.Utility;
    using System;

    public interface IInitializeDBService
    {
        public void InitializeDB(ResourceDBContext context);

        public void InitializeGlobalGermSchedule(ResourceDBContext context);

        public void InitializeHouseflySchedule(ResourceDBContext context);

        public void InitializeMosquitoesSchedule(ResourceDBContext context);

        public void InitializeFruitflySchedule(ResourceDBContext context);

        public void InitializeCockroachSchedule(ResourceDBContext context);

        public Byte[] SHA256(String password);
    }
}
