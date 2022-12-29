package com.ak.config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.CrossOrigin;

@Configuration
public class AddCustomRoutes {

    @Bean
    public RouteLocator getRouteLocator(RouteLocatorBuilder builder) {
        return builder.routes()
                .route(p -> p.path("/tour-service/**").uri("lb://TOUR-SERVICE"))
                .route(p -> p.path("/user-service/**").uri("lb://USER-SERVICE"))
                .build();
    }

}
