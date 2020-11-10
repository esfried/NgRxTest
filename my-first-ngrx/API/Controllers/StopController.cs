using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StopController: ControllerBase
    {
        private static List<Stop> Items = new List<Stop>()
        {
            new Stop(1,"Parada 1"),
            new Stop(2,"Parada 2"),
            new Stop(3,"Parada 3"),
            new Stop(4,"Parada 4"),
        };

        private readonly ILogger<StopController> _logger;

        public StopController(ILogger<StopController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public List<Stop> GetAll()
        {
            return Items.OrderBy(x=>x.ID).ToList();
        }

        [HttpDelete]
        [Route("{code}")]
        public ObjectResult Delete(int code)
        {
            ObjectResult response;

            try
            {
                Items.RemoveAll(x => x.ID == code);
                return Ok(code);
            }
            catch (Exception ex)
            {
                response = StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }

            return response;
        }

        [HttpPost]
        public List<Stop> Post([FromBody]Stop item)
        {
            var foundItem = Items.FirstOrDefault(x => x.ID == item.ID);
            if (foundItem != null) foundItem.Name = item.Name;
            else Items.Add(item);
            return GetAll();
        }
    }
}
