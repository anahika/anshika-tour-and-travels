package com.ak.controller;

import com.ak.dto.LoginRequestDto;
import com.ak.dto.TourDto;
import com.ak.exception.UserAlreadyExistException;
import com.ak.exception.UserNotFoundException;
import com.ak.exception.WrongPasswordException;
import com.ak.model.Tour;
import com.ak.model.TripRegistration;
import com.ak.model.User;
import com.ak.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/user-service")
public class UserController {

    @Autowired
    UserService userService;

    //    get particular user using username
    @RequestMapping(method = RequestMethod.GET, path = "/users/name/{username}",
            produces = "application/json")
    User getUserByName(@PathVariable("username") String username) throws UserNotFoundException {
        return userService.findByUsername(username);
    }

    //    get the list of users
    @GetMapping(path = "/users", produces = "application/json")
    List<User> getUsers() {
        return userService.findAll();
    }

    //    post new user here
    @PostMapping(path = "/signup", produces = "application/json",
            consumes = "application/json")
    User addUser(@RequestBody User newUser) throws UserAlreadyExistException {
        User user = userService.addUser(newUser);
        return user;
    }

    //    get list of trips for particular user
    @RequestMapping(method = RequestMethod.GET, path = "/user/trips/{userId}",
            produces = "application/json")
    List<TourDto> getToursByUserId(@PathVariable("userId") Integer userId) {
        return userService.findToursByUserId(userId);
    }

    //    login
    @PostMapping(path = "/login", produces = "application/json",
            consumes = "application/json")
    User userLogin(@RequestBody LoginRequestDto loginRequestDto) throws UserNotFoundException, WrongPasswordException {
        User user = userService.signIn(loginRequestDto.getUsername(), loginRequestDto.getPassword());
        return user;
    }

}
