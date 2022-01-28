
import { RequestHandler } from 'express';
import { Todo } from '../models/todo';

const TODOS: Array<Todo> = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = req.body.text as string;
  const newTodo = new Todo(text);

  TODOS.push(newTodo);

  res.status(201).json({message: 'Created the todo.', createdTodo: newTodo});
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.status(200).json({todos: TODOS});
}

export const updateTodo: RequestHandler<{id: string}> = (req, res, next) => {
  const todoId = req.params.id;
  const updatedText = req.body.text as string;
  const todoIdx = TODOS.findIndex(todo => todo.id === todoId);

  if (todoIdx < 0) {
    throw new Error('Could not find todo!');
  }

  TODOS[todoIdx] = new Todo(updatedText, TODOS[todoIdx].id);

  res.json({message: 'Updated!', updatedTodo: TODOS[todoIdx]});
}

export const deleteTodo: RequestHandler<{id: string}> = (req, res, next) => {
  const todoId = req.params.id;
  const todoIdx = TODOS.findIndex(todo => todo.id === todoId);

  if (todoIdx < 0) {
    throw new Error('Could not find todo!');
  }

  const [deletedTodo] = TODOS.splice(todoIdx, 1);
  
  res.json({message: 'Deleted!', deletedTodo});
}
