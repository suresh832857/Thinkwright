// Book Details
const books = {
    book1: {
        title: "Mastering AI",
        author: "John Doe",
        description: "A comprehensive guide to artificial intelligence and machine learning.",
        image: "https://images.unsplash.com/photo-1524578271613-d550eacf6095",
        buyLink: "#"
    },
    book2: {
        title: "Data Science for Business",
        author: "Jane Smith",
        description: "Learn data science techniques to drive business insights.",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
        buyLink: "#"
    },
    book3: {
        title: "Leadership & Growth",
        author: "Alex Johnson",
        description: "A guide to developing leadership skills and career growth.",
        image: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6",
        buyLink: "#"
    },
    book4: {
        title: "Python for Beginners",
        author: "Michael Lee",
        description: "An easy-to-follow introduction to Python programming.",
        image: "https://images.unsplash.com/photo-1532012197267-da84d127e765",
        buyLink: "#"
    }
};

// Open Book Popup
function openBookPopup(bookId) {
    const book = books[bookId];
    document.getElementById('popupImage').src = book.image;
    document.getElementById('popupTitle').innerText = book.title;
    document.getElementById('popupAuthor').innerText = book.author;
    document.getElementById('popupDescription').innerText = book.description;
    document.getElementById('popupBuyLink').href = book.buyLink;
    document.getElementById('bookPopup').style.display = 'flex';
}

// Close Popup
function closeBookPopup() {
    document.getElementById('bookPopup').style.display = 'none';
}
// Dark Mode Toggle
const toggleBtn = document.querySelector(".toggle-btn");
const body = document.body;

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    toggleBtn.innerHTML = body.classList.contains("dark-mode") ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Search Books Functionality
const searchBar = document.getElementById("searchBar");
const books = document.querySelectorAll(".book-card");

searchBar.addEventListener("keyup", () => {
    let filter = searchBar.value.toLowerCase();
    books.forEach(book => {
        let title = book.querySelector("h3").innerText.toLowerCase();
        book.style.display = title.includes(filter) ? "block" : "none";
    });
});

// GSAP Animations
gsap.from(".navbar", { duration: 1, y: -100, opacity: 0 });
gsap.from(".hero h1", { duration: 1, x: -100, opacity: 0, delay: 0.5 });
gsap.from(".books-grid .book-card", { duration: 1, opacity: 0, stagger: 0.3 });
