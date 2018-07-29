import * as fromStore from './store';
import { renderTodos } from './utils';
import { AddTodo } from './store';

const reducers = {
  todos: fromStore.reducer
};

const input = document.querySelector('input') as HTMLInputElement;
const button = document.querySelector('button') as HTMLButtonElement;
const destroy = document.querySelector('.unsubscribe') as HTMLButtonElement;
const todoList = document.querySelector('.todos') as HTMLLIElement;

const store = new fromStore.Store(reducers);

//test
console.log(store.value);
button.addEventListener(
  'click',
  () => {
    if (!input.value.trim()) return;

    const todo = { label: input.value, complete: false };
    store.dispatch(new fromStore.AddTodo(todo));
    //test
    console.log(store.value);
    input.value = '';
  },
  false
);

//console.log('David was here!!');
const unsubscribe = store.subscribe(state => {
  renderTodos(state.todos.data);
});

destroy.addEventListener('click', unsubscribe, false);

todoList.addEventListener('click', function(event) {
  const target = event.target as HTMLButtonElement;
  if (target.nodeName.toLowerCase() === 'button') {
    console.log(target);
  }
});

store.subscribe(state => console.log('STATE::', state));
