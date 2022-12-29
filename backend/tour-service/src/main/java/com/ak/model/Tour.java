package com.ak.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "tour")
public class Tour {
    @Id
    @Column(name="tour_id")
    int tourId;
    @Column(name = "tour_date")
    Date tourDate;
    String destination;
    int fare;
    @Column(name = "seats_available")
    int seatsAvailable;

}
