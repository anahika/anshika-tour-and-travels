package com.ak.advice;

import com.ak.exception.UserAlreadyExistException;
import com.ak.exception.UserNotFoundException;
import com.ak.exception.WrongPasswordException;
import com.ak.util.JsonResponse;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Map;

@RestControllerAdvice
public class UserAdvice {

    @ExceptionHandler(UserNotFoundException.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ResponseBody
    public Map<String, String> userNotFoundExceptionHandler(UserNotFoundException userNotFoundException) {

        return JsonResponse.setErrors("INTERNAL_SERVER_ERROR", userNotFoundException.getMessage());
    }

    @ExceptionHandler(UserAlreadyExistException.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ResponseBody
    public Map<String, String> userAlreadyExistExceptionHandler(UserAlreadyExistException userAlreadyExistException) {

        return JsonResponse.setErrors("INTERNAL_SERVER_ERROR", userAlreadyExistException.getMessage());
    }

    @ExceptionHandler(WrongPasswordException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ResponseBody
    public Map<String, String> wrongPasswordExceptionHandler(WrongPasswordException wrongPasswordException) {

        return JsonResponse.setErrors("BAD_REQUEST", wrongPasswordException.getMessage());
    }
}
