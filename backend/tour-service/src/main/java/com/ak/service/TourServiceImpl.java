package com.ak.service;

import com.ak.exception.TourNotFoundException;
import com.ak.exception.WrongDateFormatException;
import com.ak.model.Tour;
import com.ak.model.TripRegistration;
import com.ak.repo.TourRepo;
import com.ak.repo.TripRegistrationRepo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class TourServiceImpl implements TourService {

    @Autowired
    TourRepo tourRepo;

    @Autowired
    TripRegistrationRepo tripRegistrationRepo;

    @Override
    public Tour findById(int id) throws TourNotFoundException {
        Optional<Tour> tour;
        try {
            tour = tourRepo.findById(id);
        } catch (Exception e) {
            log.error("exception in findById method", e);
            throw new RuntimeException();
        }
        if (tour.isEmpty()) {
            throw new TourNotFoundException("No tour exist for id " + id);
        }
        return tour.orElse(null);
    }

    @Override
    public List<Tour> findAllTour() {
        return tourRepo.findAllTourByOrderByTourIdAsc();
    }

    @Override
    public List<Tour> searchByDestination(String destination) throws TourNotFoundException {

        if(destination == null || destination == "undefined"){
            throw new TourNotFoundException("Please enter the destination!");
        }
        List<Tour> tours = tourRepo.findByDestination(destination);
        if (tours.isEmpty()) {
            throw new TourNotFoundException("No tours available to " + destination);
        }
        return tours;

    }

    @Override
    public List<Tour> searchByDate(String date) throws TourNotFoundException, WrongDateFormatException {
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        Date date1;
        try {
            date1 = formatter.parse(date);
        } catch ( ParseException ex) {
            throw new WrongDateFormatException("Please enter date in specified manner!");
        }
        List<Tour> tours = tourRepo.findByTourDate(date1);
        if (tours.isEmpty()) {
            throw new TourNotFoundException("No tours available for " + date);
        }
        return tours;
    }

    @Override
    public List<Tour> searchByPrice(Integer min, Integer max) throws TourNotFoundException{
         List<Tour> tours = tourRepo.findByPriceRange(min,max);
        if (tours.isEmpty()) {
            throw new TourNotFoundException("No tours available for price range " + min + "-" + max);
        }
         return tours;
    }

    @Override
    public TripRegistration registerUser(TripRegistration tripRegistration) {
        TripRegistration newRegister = tripRegistrationRepo.save(tripRegistration);
        return newRegister;
    }
}
