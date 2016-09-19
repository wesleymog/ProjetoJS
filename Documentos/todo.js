function note(text) {
	this.text = String(text);
	this.getElement = function(){
		var row = document.createElement('tr');
		var cell = document.createElement('td');

		var div = document.createElement('div');
		div.className += 'input-group';

		var para = document.createElement('p');
		para.innerHTML = this.text;

		var span = document.createElement('span');
		span.className += 'input-group-btn';

		var button = document.createElement('button');
		button.className += 'btn btn-danger btn-sm';
		button.innerHTML = 'x';
		var button1 = document.createElement('button');
		button1.className += 'btn btn-danger btn-sm';
		button1.innerHTML = 'e';
		button.addEventListener('click', remove.bind(row));
		button1.addEventListener('click', edit.bind(row));

		span.appendChild(button);
		span.appendChild(button1);
		div.appendChild(para);
		div.appendChild(span);
		cell.appendChild(div);
		row.appendChild(cell);

		return row;
	};
}
function remove(){
	var notes = document.getElementById('notes');

	notes.removeChild(this);
}
function edit(row){ 
		var notes = document.getElementById('notes');
		var n =document.getElementById('note-input').value;
		notes.replaceChild(n,this);
		}
function add(){
	console.log('button clicked');
	var n = new note(document.getElementById('note-input').value);

	if(n.text){
		var notes = document.getElementById('notes');

		notes.appendChild(n.getElement());
	}
}

document.getElementById('add').addEventListener('click', add);