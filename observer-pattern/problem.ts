/*
Problem - 
Develop a pseudo application for a smart home in which there is centralised Sensor which continuously measures temperature. 
As soon as temperature changes multiple home Devices (e.g. Fan, Heater etc) shall get notified.
Our application should be extensible since in future many more device can use sensor measurements and also existing devices can stop using sensor measurements.
*/

class Sensor {
    private temperature: number;
    setTemperature(temp: number) {
        console.log('Sensor: New Temperature measured : ', temp);
        this.temperature = temp;
    }
}

class Fan {
}

// Driver code
let sensor = new Sensor();
let fan = new Fan();
sensor.setTemperature(35);
sensor.setTemperature(18);
