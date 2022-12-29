package com.ak.util;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class JsonResponse {

    private JsonResponse() {
    }

    public static Map<String, List<Map<String, String>>> setErrorResponse(List<Map<String, String>> errors) {
        Map<String, List<Map<String, String>>> errorMap = new
                HashMap<>();
        errorMap.put("errors", errors);
        return errorMap;
    }

    public static Map<String, String> setErrors(String code, String message) {
        Map<String, String> errorMap = new HashMap<>();
        errorMap.put("code", code);
        errorMap.put("message", message);
        return errorMap;
    }

    public static Map<String, List<Map<String, String>>> setError(String code, String message) {
        List<Map<String, String>> errors = List.of(setErrors(code, message));
        return setErrorResponse(errors);
    }
}