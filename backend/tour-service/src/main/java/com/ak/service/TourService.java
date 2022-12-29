package com.ak.service;

import com.ak.exception.TourNotFoundException;
import com.ak.exception.WrongDateFormatException;
import com.ak.model.Tour;

import java.text.ParseException;
import java.util.List;

public interface TourService {
    Tour findById(int id) throws TourNotFoundException;

    List<Tour> findAllTour();

    List<Tour> searchByDestination(String destination) throws TourNotFoundException;

    List<Tour> searchByDate(String date) throws TourNotFoundException, ParseException, WrongDateFormatException;

    List<Tour> searchByPrice(int min, int max);

}
