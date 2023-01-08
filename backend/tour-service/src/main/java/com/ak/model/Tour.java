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
    private int tourId;
    @Column(name = "start_date")
    private Date tourDate;
    String destination;
    private int fare;
    @Column(name = "seats_available")
    private int seatsAvailable;
    @Column(name = "end_date")
    private Date endDate;

}
