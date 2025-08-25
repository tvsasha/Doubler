using Microsoft.AspNetCore.Mvc;

namespace DoublerApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DoublerController : ControllerBase
    {
        [HttpPost("double")]
        public IActionResult DoubleNumber([FromBody] NumberData data)
        {
            if (data == null || data.Number == null)
            {
                return BadRequest("Неверный формат данных. Ожидался JSON с полем 'number'.");
            }

           float result = data.Number * 2;
            return Ok(new { result = result });
        }
    }

    public class NumberData
    {
        public float Number { get; set; }
    }
}