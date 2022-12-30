package com.ak.service;

import com.ak.dto.TourDto;
import com.ak.exception.UserAlreadyExistException;
import com.ak.exception.UserNotFoundException;
import com.ak.exception.WrongPasswordException;
import com.ak.model.Tour;
import com.ak.model.TripRegistration;
import com.ak.model.User;

import java.util.List;

public interface UserService {
    User findByUsername(String username) throws UserNotFoundException;

    List<User> findAll();

    User addUser(User user) throws UserAlreadyExistException;

    List<TourDto> findToursByUserId(Integer userId);

    User signIn(String username, String password) throws UserNotFoundException, WrongPasswordException;

    User editUser(int userId) throws UserNotFoundException;
}
