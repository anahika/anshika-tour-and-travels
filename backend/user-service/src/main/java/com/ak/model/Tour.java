package com.ak.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "tour", uniqueConstraints = {
        @UniqueConstraint(columnNames = "tour_id")
})
public class Tour {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "tour_id")
    private Integer tourId;
    @Column(name = "tour_date")
    private Date tourDate;
    private String destination;
    private Integer fare;
    @Column(name = "seats_available")
    private Integer seatsAvailable;

}
