namespace Digb.Service
{
    using Digb.Model;
    using System;

    public interface IBlastService
    {
        public BlastnInfo Blastn(String sequence);
    }
}
