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
@Table(name = "person", uniqueConstraints = {
        @UniqueConstraint(columnNames = "username")
})
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_generator")
    @SequenceGenerator(name = "user_generator", sequenceName = "user_id_gen", allocationSize = 1)
    @Column(name = "user_id")
    private Integer userId;
    private String username;
    private String email;
    private String usertype;
    @Column(name = "user_password")
    private String password;
}
