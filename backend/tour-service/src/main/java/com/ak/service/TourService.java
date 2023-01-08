package com.ak.service;

import com.ak.exception.TourNotFoundException;
import com.ak.exception.WrongDateFormatException;
import com.ak.model.Tour;
import com.ak.model.TripRegistration;

import java.util.List;

public interface TourService {
    Tour findById(int id) throws TourNotFoundException;

    List<Tour> findAllTour();

    List<Tour> searchByDestination(String destination) throws TourNotFoundException;

    List<Tour> searchByDate(String date) throws TourNotFoundException, WrongDateFormatException;

    List<Tour> searchByPrice(Integer min, Integer max) throws TourNotFoundException;

    TripRegistration registerUser(TripRegistration tripRegistration);

}
