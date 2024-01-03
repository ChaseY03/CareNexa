import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import javax.sql.DataSource;

public class CloudSqlConnection {
    private static final String INSTANCE_CONNECTION_NAME =
            "carenexa:us-central1:carenexa-db";
    private static final String DB_USER = "sys";
    private static final String DB_PASS = "<password>";
    private static final String DB_NAME = "test";

    public static DataSource createConnectionPool() {
        // create a new configuration and set the database credentials
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl(String.format("jdbc:postgresql:///%s", DB_NAME));
        config.setUsername(DB_USER);
        config.setPassword(DB_PASS);
        config.addDataSourceProperty("socketFactory", "com.google.cloud.sql.postgres.SocketFactory");
        config.addDataSourceProperty("cloudSqlInstance", INSTANCE_CONNECTION_NAME);

        // Initialize the connection pool using the configuration object.
        return new HikariDataSource(config);
    }
}