package com.ecarsm.petgo.api.model.animal;

import com.ecarsm.petgo.api.baseline.exception.MyException;
import java.util.List;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Ecar. S. M.
 */
@RestController
@RequestMapping("animal")
@Getter
public class AnimalResource {

    @Autowired
    private AnimalService service;

    /**
     * Adding new Animal and returns new Animal with ID
     *
     * @param animal
     * @return new Animal with ID
     * @throws com.ecarsm.petgo.api.baseline.exception.MyException
     */
    @PostMapping
    public ResponseEntity<Animal> save(@RequestBody Animal animal) throws MyException {
        try {
            animal = this.service.save(animal);
            return ResponseEntity.status(HttpStatus.CREATED).body(animal);
        } catch (Exception ex) {
            throw new MyException("msg.animal.create.error");
        }
    }

    /**
     * List All Animals
     *
     * @return All Animals list
     * @throws com.ecarsm.petgo.api.baseline.exception.MyException
     */
    @GetMapping
    public ResponseEntity<List<Animal>> list() throws MyException {
        List<Animal> list = this.service.findAll();
        return ResponseEntity.status(HttpStatus.CREATED).body(list);
    }

}
