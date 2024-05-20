public class ElasticSearchCaller {
    private final ElasticSearch elasticSearch;

    public ElasticSearchCaller() {
        this.elasticSearch = new ElasticSearch();
    }

    public void processMessage(WeatherMessage weatherMessage) {
        elasticSearch.processMessage(weatherMessage);
    }

    public static void main(String[] args) {
        ElasticSearchCaller elasticSearchCaller = new ElasticSearchCaller();
        WeatherMessage weatherMessage = new WeatherMessage(1, 1, "low", 1, new WeatherMessage.Weather(1, 1, 1));
        elasticSearchCaller.processMessage(weatherMessage);
    }
}
