
import java.util.Random;

public class Message {

    private static final Random random = new Random();
    private static long s_no = 0L;

    public static WeatherMessage generateMessage(long stationId) throws InterruptedException {
       while (true) {
           // Wait for 1 second
           Thread.sleep(1000);
           s_no++;
           // Determine if the message should be dropped
           if (random.nextInt(10) != 0) {
               // Produce the message
               return new WeatherMessage(stationId, s_no, generateBatteryStatus(), System.currentTimeMillis() / 1000, new WeatherMessage.Weather(random.nextInt(100), random.nextInt(100), random.nextInt(100)));

           }
       }
    }

    private static String generateBatteryStatus() {
        int batteryStatusRand = random.nextInt(10);
        if (batteryStatusRand < 3) {
            return "low";
        } else if (batteryStatusRand < 7) {
            return "medium";
        } else {
            return "high";
        }
    }
}
