package com.ecarsm.petgo.api.model.animal.repository;

import com.ecarsm.petgo.api.model.animal.Animal;
import org.springframework.data.jpa.repository.JpaRepository;


public interface AnimalRep extends JpaRepository<Animal, Long> {


}
