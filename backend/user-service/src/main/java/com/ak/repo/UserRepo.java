package com.ak.repo;

import com.ak.dto.TourDto;
import com.ak.model.Tour;
import com.ak.model.TripRegistration;
import com.ak.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.persistence.TypedQuery;
import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {
    Optional<User> findByUsername(String username);

    Boolean existsByUsername(String username);

  @Query("SELECT new com.ak.dto.TourDto(t.tour, t.boardingStation, t.phoneNo, t.noOfPassengers) FROM TripRegistration t WHERE t.user.userId=:userId")
    List<TourDto> findToursByUserId(Integer userId);

}
