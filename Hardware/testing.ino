// Define the LED pin
#include "BluetoothSerial.h"
#include "esp_bt_device.h"
#include <ESP32Servo.h>
BluetoothSerial ESP_BT;

const int right1 = 23, right2 = 22, left1 = 4, left2 = 5, enA = 25, enB = 26;

char command;

// PWM channels

Servo myServo;  // Create servo object
const int servoPin = 18;  // GPIO 18 for the servo's signal line

// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin ledPin as an output.
  ESP_BT.begin("ESP32_BT");
  Serial.println("Bluetooth device is ready to pair");
  
  Serial.begin(115200);
  
  myServo.setPeriodHertz(50);
  myServo.attach(servoPin, 500, 2400);  // Attach the servo to the pin

  pinMode(right1, OUTPUT);
  pinMode(right2, OUTPUT);
  pinMode(left1, OUTPUT);
  pinMode(left2, OUTPUT);
  pinMode(enA, OUTPUT);
  pinMode(enB, OUTPUT);

  /*// Setup PWM for motor speed control
  ledcSetup(PWM_CHANNEL_1, PWM_FREQUENCY, PWM_RESOLUTION);
  ledcSetup(PWM_CHANNEL_2, PWM_FREQUENCY, PWM_RESOLUTION);

  // Attach PWM channels to the pins they will control
  ledcAttachPin(right1, PWM_CHANNEL_1);
  ledcAttachPin(left1, PWM_CHANNEL_2);*/

  stopMotors();
}

// the loop function runs over and over again forever
void loop() {
  if (ESP_BT.available()) {
    command = (char) ESP_BT.read();

    if (command == '0') {
      Serial.println("Forward");
      moveForward();
    } else if (command == '1') {
      turnLeft();
    } else if (command == '2') {
      turnRight();
    } else if (command == '3') {
      stopMotors();
    } else if (command == '4') {
      myServo.write(90);  // Move servo to the mid-point (90 degrees)
    }
  }

  delay(5000);
  stopMotors();
}

void moveForward() {
      
      analogWrite(enA, 255);
      analogWrite(enB, 160);
      digitalWrite(left1, HIGH);
      digitalWrite(left2, LOW);
      digitalWrite(right1, HIGH);
      digitalWrite(right2, LOW);

}

void turnLeft() {
      
      analogWrite(enA, 255);
      analogWrite(enB, 160);
      digitalWrite(left1, HIGH);
      digitalWrite(left2, LOW);
      digitalWrite(right1, LOW);
      digitalWrite(right2, LOW);

}

void turnRight() {
      
      analogWrite(enA, 255);
      analogWrite(enB, 160);
      digitalWrite(left1, LOW);
      digitalWrite(left2, HIGH);
      digitalWrite(right1, LOW);
      digitalWrite(right2, LOW);

}

void stopMotors() {
      
      analogWrite(enA, 0);
      analogWrite(enB, 0);
      digitalWrite(left1, LOW);
      digitalWrite(left2, LOW);
      digitalWrite(right1, LOW);
      digitalWrite(right2, LOW);

}
  