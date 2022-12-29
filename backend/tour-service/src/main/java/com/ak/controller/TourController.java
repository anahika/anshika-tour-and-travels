package com.ak.controller;

import com.ak.exception.TourNotFoundException;
import com.ak.exception.WrongDateFormatException;
import com.ak.model.Tour;
import com.ak.service.TourService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;

@RestController
@RequestMapping("/tour-service")
public class TourController {
    @Autowired
    TourService tourService;

    //    get particular tour using id
    @RequestMapping(method = RequestMethod.GET, path = "/tours/id/{tourId}", produces = "application/json")
    Tour getTourById(@PathVariable("tourId") int tourId) throws TourNotFoundException {
        return tourService.findById(tourId);
    }

    //    get list of the tours available
    @GetMapping(path = "/tours", produces = "application/json")
    List<Tour> getTours() {
        return tourService.findAllTour();

    }

    //    list of tours to a particular destination
    @RequestMapping(method = RequestMethod.GET, path = "tours/destination/{destination}", produces = "application/json")
    List<Tour> getToursByDestination(@PathVariable("destination") String destination) throws TourNotFoundException {
        return tourService.searchByDestination(destination);
    }

    //    list of tours for particular date
    @RequestMapping(method = RequestMethod.GET, path = "tours/date/{date}", produces = "application/json")
    List<Tour> getToursByDate(@PathVariable("date") String date) throws TourNotFoundException, ParseException, WrongDateFormatException {
        return tourService.searchByDate(date);
    }
}
