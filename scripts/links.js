// Fetch the JSON file
fetch('data/links.json')
.then(response => response.json())
.then(data => {
    // Access the "lessons" array from the JSON data
    const lessons = data.lessons;
    
    // Get the learning card element
    const learningCard = document.getElementById('learningCard');
    
    // Create a new unordered list element
    const ul = document.createElement('ul');

    // Loop through each lesson in the JSON data
    lessons.forEach(lesson => {
        // Create a new list item
        const li = document.createElement('li');
        
        // Create a new unordered list element for links within the lesson
        const innerUl = document.createElement('ul');
        
        // Loop through each link in the lesson
        lesson.links.forEach(link => {
        // Create a new list item for each link
        const innerLi = document.createElement('li');
        
        // Create a new anchor element
        const a = document.createElement('a');
        
        // Set the href attribute of the anchor element to the URL from the JSON data
        a.href = link.url;
        
        // Set the text content of the anchor element to the title from the JSON data
        a.textContent = link.title;
        
        // Append the anchor element to the list item
        innerLi.appendChild(a);
        
        // Append the list item to the inner unordered list
        innerUl.appendChild(innerLi);
        });
        
        // Set the text content of the list item to the lesson number
        li.textContent = `Lesson ${lesson.lesson}:`;
        
        // Append the inner unordered list to the list item
        li.appendChild(innerUl);
        
        // Append the list item to the outer unordered list
        ul.appendChild(li);
    });

    // Append the unordered list to the learning card element
    learningCard.appendChild(ul);
})
.catch(error => console.error('Error fetching JSON:', error));