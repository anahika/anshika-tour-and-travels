package com.ak.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.util.Date;

@Data
public class TourDto {
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date startDate;
}
