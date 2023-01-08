package com.ak.controller;

import com.ak.exception.TourNotFoundException;
import com.ak.exception.WrongDateFormatException;
import com.ak.model.Tour;
import com.ak.model.TripRegistration;
import com.ak.service.TourService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tour-service/tours")
public class TourController {
    @Autowired
    TourService tourService;

    @RequestMapping(method = RequestMethod.GET, path = "/tours/id/{tourId}", produces = "application/json")
    Tour getTourById(@PathVariable("tourId") int tourId) throws TourNotFoundException {
        return tourService.findById(tourId);
    }

    @GetMapping(path = "/", produces = "application/json")
    List<Tour> getTours() {
        return tourService.findAllTour();

    }

    @RequestMapping(method = RequestMethod.GET, path = "/destination/{destination}", produces = "application/json")
    List<Tour> getToursByDestination(@PathVariable("destination") String destination) throws TourNotFoundException {
        return tourService.searchByDestination(destination);
    }

    @RequestMapping(method = RequestMethod.GET, path = "/date/{date}", produces = "application/json")
    List<Tour> getToursByDate(@PathVariable("date") String date) throws TourNotFoundException, WrongDateFormatException {
        return tourService.searchByDate(date);
    }

    @RequestMapping(method = RequestMethod.GET, path = "/fare/{min}/{max}", produces = "application/json")
    List<Tour> getToursByFare(@PathVariable("min") Integer min,@PathVariable("max")  Integer max) throws TourNotFoundException {
        return tourService.searchByPrice(min,max);
    }

    @PostMapping(path = "/register", produces = "application/json",
            consumes = "application/json")
    TripRegistration registerUser(@RequestBody TripRegistration tripRegistration) {
        TripRegistration registration = tourService.registerUser(tripRegistration);
        return registration;
    }
}
