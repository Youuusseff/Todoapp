package com.wahch.todoapp.todoRepository;

import com.wahch.todoapp.domain.todoItem;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface todoRepository extends MongoRepository<todoItem, String> {

}
