package com.ak.repo;

import com.ak.model.Tour;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface TourRepo extends JpaRepository<Tour, Integer> {
    List<Tour> findByDestination(String destination);

    List<Tour> findByTourDate(Date date);

    List<Tour> findAllTourByOrderByTourIdAsc();

    @Query(value = "select * from tour t where t.fare>=:min and t.fare<=:max",nativeQuery = true)
    List<Tour> findByPriceRange(Integer min, Integer max);

}
