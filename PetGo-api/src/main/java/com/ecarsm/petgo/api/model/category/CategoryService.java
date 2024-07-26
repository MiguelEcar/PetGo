package com.ecarsm.petgo.api.model.category;

import com.ecarsm.petgo.api.model.category.repository.CategoryRep;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Ecar. S. M.
 */
@Service
public class CategoryService {

    @Autowired
    private CategoryRep rep;

    public List<Category> findAll() {
        return this.rep.findAll();
    }
}
