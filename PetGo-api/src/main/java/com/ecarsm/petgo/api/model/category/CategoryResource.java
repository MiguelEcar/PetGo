package com.ecarsm.petgo.api.model.category;

import com.ecarsm.petgo.api.baseline.exception.MyException;
import java.util.List;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Ecar. S. M.
 */
@RestController
@RequestMapping("category")
@Getter
public class CategoryResource {

    @Autowired
    private CategoryService service;

    /**
     * List All Categories
     *
     * @return All Categories list
     * @throws com.ecarsm.petgo.api.baseline.exception.MyException
     */
    @GetMapping
    public ResponseEntity<List<Category>> list() throws MyException {
        List<Category> list = this.service.findAll();
        return ResponseEntity.status(HttpStatus.CREATED).body(list);
    }

}
