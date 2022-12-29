package com.ak.repo;

import com.ak.model.Tour;
import com.ak.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {
    Optional<User> findByUsername(String username);

    Boolean existsByUsername(String username);

    @Query(value = "Select t.* from tripregistration tr inner join tour t on tr.tour_id = t.tour_id where tr.user_id = :userId", nativeQuery = true)
    List<Tour> findToursByUserId(Integer userId);
}
