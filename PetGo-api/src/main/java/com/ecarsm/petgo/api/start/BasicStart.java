package com.ecarsm.petgo.api.start;

import com.ecarsm.petgo.api.model.animal.Animal;
import com.ecarsm.petgo.api.model.animal.repository.AnimalRep;
import com.ecarsm.petgo.api.model.category.Category;
import com.ecarsm.petgo.api.model.category.repository.CategoryRep;
import java.time.LocalDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

/**
 *
 * @author Ecar. S. M.
 */
@Component
@Order(2)
public class BasicStart implements ApplicationRunner {

    @Autowired
    private AnimalRep animalRep;

    @Autowired
    private CategoryRep categRep;

    @Override
    public void run(ApplicationArguments args) throws Exception {

        Category dog = new Category(null, "Dog");
        Category cat = new Category(null, "Cat");

        dog = this.categRep.save(dog);
        cat = this.categRep.save(cat);

        this.animalRep.save(new Animal(null, "Boris", "Loren Ipsum 1", "https://", dog, LocalDate.parse("2007-12-03"), Boolean.FALSE, null));
        this.animalRep.save(new Animal(null, "Dori", "Loren Ipsum 2", "https://", cat, LocalDate.parse("2008-12-03"), Boolean.FALSE, null));
        this.animalRep.save(new Animal(null, "Rex", "Loren Ipsum 3", "https://", dog, LocalDate.parse("2009-12-03"), Boolean.TRUE, null));

    }

}
