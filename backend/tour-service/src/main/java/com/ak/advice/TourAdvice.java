package com.ak.advice;

import com.ak.exception.TourNotFoundException;
import com.ak.exception.WrongDateFormatException;
import com.ak.util.JsonResponse;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Map;

@RestControllerAdvice
public class TourAdvice {
    @ExceptionHandler(TourNotFoundException.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ResponseBody
    public Map<String, String> tourNotFoundExceptionHandler(TourNotFoundException tourNotFoundException) {

        return JsonResponse.setErrors("INTERNAL_SERVER_ERROR", tourNotFoundException.getMessage());
    }
    @ExceptionHandler(WrongDateFormatException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ResponseBody
    public Map<String, String> wrongDateFormatExceptionHandler(WrongDateFormatException wrongDateFormatException) {

        return JsonResponse.setErrors("BAD_REQUEST", wrongDateFormatException.getMessage());
    }
}
