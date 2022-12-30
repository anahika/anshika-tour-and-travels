package com.ak.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "tripregistration")
public class TripRegistration {
    @Id
    @Column(name = "reg_id")
    private Integer regId;
    @ManyToOne
    @JoinColumn(name="tourId")
    private Tour tour;
    @ManyToOne
    @JoinColumn(name="userId")
    private User user;
    @Column(name = "boarding_station")
    private String boardingStation;
    @Column(name = "phone_no")
    private String phoneNo;
    @Column(name = "no_of_passengers")
    private Integer noOfPassengers;
}
