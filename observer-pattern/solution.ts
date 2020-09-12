interface Subject {
    registerObserver(o: Observer);
    unregisterObserver(o: Observer);
    notifyObservers();
}

interface Observer {
    notify(temperature: number);
}

class Sensor implements Subject {
    private temperature: number;
    private observers: Observer[] = [];
    
    registerObserver(o: Observer) {
        this.observers.push(o);
    }
    
    unregisterObserver(o: Observer) {
        let index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    }
    
    notifyObservers() {
        for (let observer of this.observers) {
            observer.notify(this.temperature);
        }
    }
    
    setTemperature(temp: number) {
        console.log('Sensor: New Temperature measured : ', temp);
        this.temperature = temp;
        this.notifyObservers();
    }
}

class Fan implements Observer {
    subject: Subject;

    constructor(sensor: Subject) {
        this.subject = sensor;
        sensor.registerObserver(this);
    }

    notify(temperature: number) {
        console.log('FAN: Got new temperature values');
        if (temperature > 30) {
            console.log('FAN : Its quite hot, turning myself ON');
        } else {
            console.log('FAN: Its cool, turning myself OFF');
        }
    }
}

// Driver code
let sensor = new Sensor();
let fan = new Fan(sensor);
sensor.setTemperature(35);
sensor.setTemperature(18);
/*
 Output
Sensor: New Temperature measured :  35
FAN: Got new temperature values
FAN : Its quite hot, turning myself ON
Sensor: New Temperature measured :  18
FAN: Got new temperature values
FAN: Its cool, turning myself OFF
*/
