package com.wahch.todoapp.todoService;

import com.wahch.todoapp.domain.todoItem;

import java.util.List;

public interface todoService {
    public todoItem registerItem(todoItem todoItem) throws Exception;
    public List<todoItem> fetchAllTodoItems() throws Exception;
    public void deleteItem(String id) throws Exception;
}
