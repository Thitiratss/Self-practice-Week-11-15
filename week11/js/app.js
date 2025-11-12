import { loadQuotes, deleteQuote, addQuote , editQuote} from "./quoteManagement.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const quotes = await loadQuotes();
    console.log(quotes);
    const quoteListEle = document.getElementById("quoteList");
    quotes.forEach((quote) => {
      const quoteCardEle = newQuoteCard(quote);
      quoteListEle.appendChild(quoteCardEle);
    });
  } catch (e) {
    console.log(e);
  }
});

function newQuoteCard(quote) {
  // <div class="quote-card" data-id="1">
  const divEle = document.createElement("div");
  divEle.className = "quote-card";
  divEle.dataset.id = quote.id;
  // <p>No one is perfect</p>
  const pQuote = document.createElement("p");
  pQuote.textContent = quote.content;
  divEle.appendChild(pQuote);
  //<p class="author">someone</p>
  const pAuthor = document.createElement("p");
  pAuthor.className = "author";
  pAuthor.textContent = quote.author;
  divEle.appendChild(pAuthor);

  //<div class="actions">
  const divActionsEle = document.createElement("div");
  divActionsEle.className = "actions";

  //  <button class="edit" data-id="1">Edit</button>
  const editButtonEle = document.createElement("button");
  editButtonEle.className = "edit";
  editButtonEle.dataset.id = quote.id;
  editButtonEle.textContent = "Edit";
  divActionsEle.appendChild(editButtonEle);
  // <button class="delete" data-id="1">delete</button>
  const deleteButtonEle = document.createElement("button");
  deleteButtonEle.className = "delete";
  deleteButtonEle.dataset.id = quote.id;
  deleteButtonEle.textContent = "Delete";
  deleteButtonEle.addEventListener("click", handleDelete);

  divActionsEle.appendChild(deleteButtonEle);

  divEle.appendChild(divActionsEle);
  return divEle; //
}

async function handleDelete(e) {
  const ans = confirm(`Do you want to delete?`);
  if (ans) {
    // console.log(e.target.dataset.id)
    const id = e.target.dataset.id;
    try {
      const deleteQuoteId = await deleteQuote(id);
      if (deleteQuoteId) {
        const divDeleteQuote = document.querySelector(`div[data-id="${id}"]`);
        const divQuoteList = document.getElementById("quoteList");
        divQuoteList.removeChild(divDeleteQuote);
      }
    } catch (e) {
      alert(e.message);
    }
  }
}


const form = document.getElementById("quoteForm")
form.addEventListener('submit', handleAddQuote)

async function handleAddQuote(e) {
    e.preventDefault()
    const content = document.getElementById("content").value
    const author = document.getElementById("author").value
    
    console.log(content)
    console.log(author)

    const newQuote = { content , author } 
    try {
        const addedQuote = await addQuote(newQuote)
        const QuoteCard = newQuoteCard(addedQuote)

        const quoteList = document.getElementById("quoteList")
        quoteList.appendChild(QuoteCard)
    } catch(error){
        console.log(error)
    }
}

// const editButton = document.querySelector(".edit")
// editButton.addEventListener("click", handleEditQuote)

// async function handleEditQuote(e){
//     const id = e.target.dataset.id
//     const quoteCard = document.querySelector(`div[data-id="${id}"`)
//     const content = card.querySelector("p").textContent;
//     const author = card.querySelector(".author").textContent;
//     console.log(content)
//     console.log(author)
// }