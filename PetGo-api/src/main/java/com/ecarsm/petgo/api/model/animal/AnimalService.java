package com.ecarsm.petgo.api.model.animal;

import com.ecarsm.petgo.api.baseline.exception.MyException;
import com.ecarsm.petgo.api.model.animal.repository.AnimalRep;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Ecar. S. M.
 */
@Service
public class AnimalService {

    @Autowired
    private AnimalRep rep;

    public List<Animal> findAll() {
        return this.rep.findAll();
    }

    public Animal save(Animal animal) throws MyException {
        return this.rep.save(animal);
    }

    public Animal getOne(Long id) throws MyException {
        return this.rep.getOne(id);
    }

    public Animal changeStatus(Long id, Boolean status) throws MyException {
        Animal animal = this.getOne(id);
        animal.setStatus(status);
        return this.save(animal);
    }
}
