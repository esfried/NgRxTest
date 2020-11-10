namespace API
{
    public class Stop
    {
        public int ID { get; set; }
        public string Name { get; set; }

        public Stop()
        {

        }
        public Stop(int id, string name)
        {
            this.ID = id;
            this.Name = name;

        }
    }
}
