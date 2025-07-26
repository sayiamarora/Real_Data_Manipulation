package com.example.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "records")
public class Record {
    @Id
    private String id;

    private String name;
    private String contact;
    private String address;
    private String city;
    private String country;
    private String profession;
}
