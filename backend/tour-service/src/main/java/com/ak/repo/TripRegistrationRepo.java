package com.ak.repo;

import com.ak.model.TripRegistration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TripRegistrationRepo extends JpaRepository<TripRegistration, Integer> {

}
