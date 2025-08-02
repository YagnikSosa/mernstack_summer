import "./InfoBox.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function InfoBox({info}){
    const INIT_URL = "https://images.unsplash.com/photo-1696912158241-be58ad220dcc?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const HOT_URL="https://images.unsplash.com/photo-1532953802613-6f66f1f4cc1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN1bW1lciUyMGhlYXR8ZW58MHx8MHx8fDA%3D";
    const COLD_URL="https://images.unsplash.com/photo-1524175869111-19b0893d20b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
    const RAINY_URL="https://plus.unsplash.com/premium_photo-1673278171340-99b4dbf0418f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFpbiUyMGNsb3VkfGVufDB8fDB8fHww";

    const icon = "";
    return(
        <div className="InfoBox">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAINY_URL : (info.temp > 18 ? HOT_URL : COLD_URL)}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} { (info.humidity >80?<UmbrellaIcon/>:info.temp>18?<WbSunnyIcon/>:<AcUnitIcon/>)}
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <div>Temperature = {info.temp}&deg;C</div>
            <div>Minimum Temperature = {info.tempMin}&deg;C</div>
            <div>Maximum Temperature = {info.tempMax}&deg;C</div>
            <div>Humidity = {info.humidity}</div>
            <div>Feels Like = {info.feelsLike}&deg;C</div>
            <div>Weather = {info.weather}</div>
        </Typography>
      </CardContent>
            </Card>
        </div>
    )
}