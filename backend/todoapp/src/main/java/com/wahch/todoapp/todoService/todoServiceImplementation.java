package com.wahch.todoapp.todoService;

import com.wahch.todoapp.domain.todoItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.wahch.todoapp.todoRepository.todoRepository;

import java.util.List;
import java.util.Optional;

@Service
public class todoServiceImplementation implements todoService{
    @Autowired
    private todoRepository todoRepo;
    @Override
    public todoItem registerItem(todoItem todoItem) throws Exception {
        if(todoItem == null){
            throw new Exception("user is null");
        }
        else{
           return todoRepo.save(todoItem);
        }
    }

    @Override
    public List<todoItem> fetchAllTodoItems() throws Exception {
        List<todoItem> todoItems = todoRepo.findAll();
        if (todoItems != null){
            return todoItems;
        }
        throw new Exception("list of items null");
    }

    @Override
    public void deleteItem(String id) throws Exception {
        Optional<todoItem> todoItem = todoRepo.findById(id);
        if(todoItem.isPresent()) {
            todoRepo.delete(todoItem.get());
        }
        else{
            throw new Exception("id not found");
        }
    }
}
