// DO NOT WORRY ABOUT LINES 1 THROUGH 47, FOR DIRECTIONS ON HOW TO PROCEED PLEASE READ THE theBookStore.md and/or go to this link: https://github.com/TelegraphPrep/Week-2-bookstoreApp/blob/master/theBookStore.md

//NOTE: In Javascript, the leading __ in a variable name signifies that this is a variable you probably shouldn't be messing with..
function __dontWorryAboutThis(){
	var __books = "Lucky Jim by Kingsley Amis, Money by Martin Amis, The Information by Martin Amis, The Bottle Factory Outing by Beryl Bainbridge, According to Queeney by Beryl Bainbridge, Flaubert's Parrot by Julian Barnes, A History of the World in 10 1/2 Chapters by Julian Barnes, Augustus Carp Esq. by Himself: Being the Autobiography of a Really Good Man by Henry Howarth Bashford, Molloy by Samuel Beckett, Zuleika Dobson by Max Beerbohm, The Adventures of Augie March by Saul Bellow, The Uncommon Reader by Alan Bennett, Queen Lucia by EF Benson, The Ascent of Rum Doodle by WE Bowman, A Good Man in Africa by William Boyd, The History Man by Malcolm Bradbury, No Bed for Bacon by Caryl Brahms and SJ Simon, Illywhacker by Peter Carey, A Season in Sinji by JL Carr, The Harpole Report by JL Carr, The Hearing Trumpet by Leonora Carrington, Mister Johnson by Joyce Cary, The Horse's Mouth by Joyce Cary, Don Quixote by Miguel de Cervantes, The Case of the Gilded Fly by Edmund Crispin, Just William by Richmal Crompton, The Provincial Lady by EM Delafield, Slouching Towards Kalamazoo by Peter De Vries, The Pickwick Papers by Charles Dickens, Martin Chuzzlewit by Charles Dickens, Jacques the Fatalist and his Master by Denis Diderot, A Fairy Tale of New York by JP Donleavy, The Commitments by Roddy Doyle, Ennui by Maria Edgeworth, Cheese by Willem Elsschot, Bridget Jones's Diary by Helen Fielding, Joseph Andrews by Henry Fielding, Tom Jones by Henry Fielding, Caprice by Ronald Firbank, Bouvard et Pécuchet by Gustave Flaubert, Towards the End of the Morning by Michael Frayn, The Polygots by William Gerhardie, Cold Comfort Farm by Stella Gibbons, Dead Souls by Nikolai Gogol, Oblomov by Ivan Goncharov, The Wind in the Willows by Kenneth Grahame, Brewster's Millions by Richard Greaves (George Barr McCutcheon), Squire Haggard's Journal by Michael Green, Our Man in Havana by Graham Greene, Travels with My Aunt by Graham Greene, Diary of a Nobody by George Grossmith, The Little World of Don Camillo by Giovanni Guareschi, The Curious Incident of the Dog in the Night-time by Mark Haddon, Catch-22 by Joseph Heller, Mr Blandings Builds His Dream House by Eric Hodgkins, High Fidelity by Nick Hornby, I Served the King of England by Bohumil Hrabal, The Lecturer's Tale by James Hynes, Mr Norris Changes Trains by Christopher Isherwood, The Mighty Walzer Howard by Jacobson, Pictures from an Institution by Randall Jarrell, Three Men in a Boat by Jerome K Jerome, Finnegans Wake by James Joyce, The Castle by Franz Kafka, Lake Wobegon Days by Garrison Keillor, Death and the Penguin by Andrey Kurkov, The Debt to Pleasure by John Lanchester, L'Histoire de Gil Blas de Santillane (Gil Blas) by Alain-René Lesage, Changing Places by David Lodge, Nice Work by David Lodge, The Towers of Trebizond by Rose Macaulay, England Their England by AG Macdonell, Whisky Galore by Compton Mackenzie, Memoirs of a Gnostic Dwarf by David Madsen, Cakes and Ale - Or the Skeleton in the Cupboard by W Somerset Maugham, Tales of the City by Armistead Maupin, Bright Lights Big City by Jay McInerney, Puckoon by Spike Milligan, The Restraint of Beasts by Magnus Mills, Charade by John Mortimer, Titmuss Regained by John Mortimer, Under the Net by Iris Murdoch, Pnin by Vladimir Nabokov, Pale Fire by Vladimir Nabokov, Fireflies by Shiva Naipaul, The Sacred Book of the Werewolf by Victor Pelevin, La Disparition by Georges Perec, Les Revenentes by Georges Perec, La Vie Mode d'Emploi by Georges Perec, My Search for Warren Harding by Robert Plunkett, A Dance to the Music of Time by Anthony Powell, A Time to be Born by Dawn Powell, Excellent Women by Barbara Pym, Less Than Angels by Barbara Pym, Zazie in the Metro by Raymond Queneau, Solomon Gursky Was Here by Mordecai Richler, Alms for Oblivion by Simon Raven, Portnoy's Complaint by Philip Roth, The Westminster Alice by Saki, The Unbearable Bassington by Saki , Hurrah for St Trinian's by Ronald Searle, Great Apes by Will Self, Porterhouse Blue by Tom Sharpe, Blott on the Landscape by Tom Sharpe, Office Politics by Wilfrid Sheed, Belles Lettres Papers: A Novel by Charles Simmons, Moo by Jane Smiley, Topper Takes a Trip by Thorne Smith, The Adventures of Ferdinand Count Fathom by Tobias Smollett, The Adventures of Roderick Random by Tobias Smollett, The Adventures of Peregrine Pickle by Tobias Smollett, The Expedition of Humphry Clinker by Tobias Smollett, The Prime of Miss Jean Brodie by Muriel Spark, The Girls of Slender Means by Muriel Spark, The Driver's Seat by Muriel Spark, Loitering with Intent by Muriel Spark, A Far Cry from Kensington by Muriel Spark, The Life and Opinions by Tristram Shandy, Gentleman by Laurence Sterne, White Man Falling by Mike Stocks, Handley Cross by RS Surtees, A Tale of a Tub by Jonathan Swift, Penrod by Booth Tarkington, The Luck of Barry Lyndon by William Makepeace Thackeray, Before Lunch by Angela Thirkell, Tropic of Ruislip by Leslie Thomas, A Confederacy of Dunces by John Kennedy Toole, Barchester Towers by Anthony Trollope, Venus on the Half-Shell by Kilgore Trout, The Mysterious Stranger by Mark Twain, The Witches of Eastwick by John Updike, Breakfast of Champions by Kurt Vonnegut, Infinite Jest by David Foster Wallace, Decline and Fall by Evelyn Waugh, Vile Bodies by Evelyn Waugh, Black Mischief by Evelyn Waugh, Scoop by Evelyn Waugh, The Loved One by Evelyn Waugh, A Handful of Dust by Evelyn Waugh , The Life and Loves of a She-Devil by Fay Weldon, Tono Bungay by HG Wells, Molesworth by Geoffrey Willans and Ronald Searle, The Wimbledon Poisoner by Nigel Williams, Anglo-Saxon Attitudes by Angus Wilson, Something Fresh by PG Wodehouse, Piccadilly Jim by PG Wodehouse, Thank You Jeeves by PG Wodehouse, Heavy Weather by PG Wodehouse, The Code of the Woosters by PG Wodehouse, Joy in the Morning by PG Wodehouse";
	var __bookStore = [];
	var __booksArray = __books.split(',');
	var __categories = ['classic', 'horror', 'romantic comedy', 'self help', 'historical']

	function __createBook(bookName){
		var price = Math.random() * 20;
		price = parseFloat(price.toString().slice(0, 4), 10);
		var category = (__categories[Math.floor(Math.random() * 5)])

		return {
			title: bookName.split('by')[0].trim(),
			author: bookName.split('by')[1].trim(),
			price: price,
			category: category
		}
	}

	function __createBookStore(arr) {
		for (var i = 0; i < arr.length; i++) {
			__bookStore.push(__createBook(arr[i]));
		}

		return __bookStore
	}

	return __createBookStore(__booksArray);

}	//  Don't pay any attention to the man behind the curtain in lines 1-30.
	//  Remember, the leading underscores in the variable names mean 
	//  you shouldn't be messing with these variables.

function testUser(){
	var balance = Math.random() * 100 + 130;
		balance = parseFloat(balance.toString().slice(0, 4), 10);
	return {
		balance: balance,
		cart: [],
	}
}

var BookStore = __dontWorryAboutThis();
var Susan = new testUser();


var customerCart = [];

//declare a function that takes a bookname string as a parameter
var checkStore = function(title){
	var holder = [];
	//iterate through the bookStore array
	for(var i = 0; i < BookStore.length; i++){
		//find the title of each book
    	//check if the title matches the bookname
    	if(BookStore[i].title === title){
    		var bookTitle = BookStore[i].title;
    		holder.push(BookStore[i]);
    		//if so, pop up alert box with title, author, and price
    		//ask the user if they want to add the item to their cart
    		var addToCartPrompt  = confirm('We have found the book '+ BookStore[i].title +' by ' + BookStore[i].author + ' and the cost for this book is $' + BookStore[i].price.toFixed(2) + '. \nWould you like to add this book to your cart?');
    		//if the user selects yes, add to their cart
    		if(addToCartPrompt){
    			customerCart.push(BookStore[i]);
    		}
    	}
	}
	//if the book isn't found, alert the user that we don't have the book
	if(holder.length === 0){
    		alert('We do not have this book.');
    	}
	return BookStore[i];
}

// checkStore('Cheese');
// checkStore('Oblomov');
// checkStore('Piccadilly Jim');
// checkStore('The Commitments');
// console.log('customerCart after invoking checkStore',customerCart);

//create the method deleteBook and put it on your testUser object (Susan)
//deleteBook takes a string parameter and checks it against the books in the user's cart
Susan.deleteBook = function(titleToDelete){
	//iterate through the cart to determine if the book already exists in the cart
	for(var i = 0; i < customerCart.length; i++){
		//if the book is in the cart, ask the user if they're sure they want to delete it using confirm() 
		if(customerCart[i].title === titleToDelete){
			var confirmDelete = confirm('Are you sure you want to delete these delete this book from your cart?');
			//if they do want to delete, take the book out of the cart
			if(confirmDelete){
				customerCart.splice(i,1);
			}
		}
	}
	//inspect the cart to make sure the book was deleted
	console.log(customerCart);
};

// Susan.deleteBook('Cheese');

//create the method clearCart and put it on your testUser object (Susan)
Susan.clearCart = function(){
	// clearCart prompts the user as to whether they're SURE they want to clear their cart
	var confirmClearCart = confirm('Are you sure you want to clear your cart?');
		//if they confirm yes, delete everything in their cart
		if(confirmClearCart){
			customerCart.length = 0;
		}
	//inspect the cart to make sure it's empty
	console.log(customerCart);
};

// Susan.clearCart();

//create a method checkOut and put it on your testUser object (Susan)
//checkOut adds up the total price of the books in the user's cart and compares it to their balance
Susan.checkOut = function(){
	//initialize total variable to determine total sum 
	var total = 0;
	//loop through the cart to add each book price to the total sum
	for(var i = 0; i < customerCart.length; i++){
		console.log('customerCart',customerCart);
		total += customerCart[i].price;
	}
	//if their balance is higher than the the total of the combined books, let them check out
	if(total < Susan.balance){
		alert('You have successfully checked out!');
	}
	//if their balance is lower than the total of the combined books, tell them to get their money up and try again later
	else
		alert('You do not have sufficient funds to purchase these items.');
};

// Susan.checkOut();




