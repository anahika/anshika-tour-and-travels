package com.ak.dto;

import com.ak.model.Tour;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TourDto {
    private Tour tour;
    private String boardingStation;
    private String phoneNo;
    private Integer noOfPassengers;
}
