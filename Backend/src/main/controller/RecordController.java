package com.example.backend.controller;

import com.example.backend.model.Record;
import com.example.backend.repository.RecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/records")
@CrossOrigin(origins = "*")
public class RecordController {

    @Autowired
    private RecordRepository recordRepository;

    @GetMapping
    public List<Record> getAllRecords() {
        return recordRepository.findAll();
    }

    @PostMapping
    public Record createRecord(@RequestBody Record record) {
        return recordRepository.save(record);
    }

    @DeleteMapping("/{id}")
    public void deleteRecord(@PathVariable String id) {
        recordRepository.deleteById(id);
    }
}
