namespace Digb.Api.Controller
{
    using System;
    using Digb.Model;
    using Digb.Service;
    using Microsoft.AspNetCore.Mvc;

    /// <summary>
    /// 
    /// </summary>
    [Route("blast")]
    [ApiController]
    public class BlastController : ControllerBase
    {
        /// <summary>
        /// Get 
        /// </summary>
        /// <returns></returns>
        [HttpGet("")]
        public BlastnInfo Blast(String sequence)
        {
            return new BlastService().Blastn(sequence);
        }
    }
    //[HttpGet("blast")]
    //public String Blast()
    //{
    //    new BlastService().SequenceBlast();
    //    //pairaln(seq1, seq2)
    //}

    /// <summary>
    /// 
    /// </summary>
    /// <returns></returns>
    //[HttpGet("get/ncbi")]
    //public String CallNcbiApi()
    //{
    //    string webpageUrl = String.Format("https://blast.ncbi.nlm.nih.gov/blast/Blast.cgi");

    //    try
    //    {
    //        WebRequest requestObject = WebRequest.Create(webpageUrl);

    //        requestObject.Method = "POST";

    //        requestObject.ContentType = "application/x-www-form-urlencoded";

    //        string postData = "CMD=Put&PROGRAM=$blastp&DATABASE=$Patented protein sequences (pataa)&QUERY=MRKGEELFTGVVPILVELDGDVNGHKFSVSGEGEGDATNGKLTLKFICTTGKLPVPWPTLVTTLTYGVQCFARYPDHMKQHDFFKSAMPEGYVQERTISFKDDGTYKTRAEVKFEGDTLVNRIELKGIDFKEDGNILGHKLEYNFNSHNVYITADKQKNGIKANFKIRHNVEDGSVQLADHYQQNTPIGDGPVLLPDNHYLSTQSALSKDPNEKRDHMVLLEFVTAAGITHGMDELYKRPAANDENYAASV";

    //        using (var streamWriter = new StreamWriter(requestObject.GetRequestStream()))
    //        {
    //            streamWriter.Write(postData);
    //            streamWriter.Flush();
    //            streamWriter.Close();

    //            var httpResponse = (HttpWebResponse)requestObject.GetResponse();

    //            using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
    //            {
    //                var result2 = streamReader.ReadToEnd();

    //                return result2;
    //            }
    //        }
    //    }
    //    catch (Exception e)
    //    {
    //        return e.Message;
    //    }
    //}

}
