package com.ak.service;

import com.ak.dto.TourDto;
import com.ak.exception.UserAlreadyExistException;
import com.ak.exception.UserNotFoundException;
import com.ak.exception.WrongPasswordException;
import com.ak.model.User;
import com.ak.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepo userRepo;

    @Override
    @Transactional
    public User findByUsername(String username) throws UserNotFoundException {
        Optional<User> user;
        try {
            user = userRepo.findByUsername(username);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        if (user.isEmpty()) {
            throw new UserNotFoundException("No user exist with username " + username);
        }
        return user.orElse(null);
    }

    @Override
    public List<User> findAll() {
        return userRepo.findAll();
    }

    @Override
    @Transactional
    public User addUser(User user) throws UserAlreadyExistException {

        Optional<User> newUser;
        try {
            newUser = userRepo.findByUsername(user.getUsername());
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        if (newUser.isPresent()) {
            throw new UserAlreadyExistException("User with username " + user.getUsername() + " already exist");
        } else {
            User saved = userRepo.save(user);
            return saved;
        }

    }

    @Override
    public List<TourDto> findToursByUserId(Integer userId) {
        List<TourDto> trips = userRepo.findToursByUserId(userId);
        return trips;
    }

    @Override
    public User signIn(String username, String password) throws UserNotFoundException, WrongPasswordException {
        Optional<User> user;
        try {
            user = userRepo.findByUsername(username);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        if (user.isPresent()) {
            if(user.get().getPassword().equals(password)){
                return user.get();
            }
            else{
                throw new WrongPasswordException("Password does not match!");
            }

        } else {
            throw new UserNotFoundException("No user exist with username " + username);
        }
    }

    @Override
    @Transactional
    public User editUser(int userId) throws UserNotFoundException {
        Optional<User> optEmp = userRepo.findById(userId);
        User user = optEmp.get();
        return userRepo.save(user);
    }
}
