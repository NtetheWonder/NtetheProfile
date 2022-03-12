
var typed = new Typed(".auto-input",{
    strings: ["Hi there!","Welcome!"],
    typeSpeed: 150,
    backSpeed: 100,
    loop: true

});

$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    })

    $(window).on('scroll', function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });
});


function sendEmail(){
    email.send({
       SecureToken : "e18dd471-c4b9-486d-8631-bc8f8ae03dd8",
        To : "ntethewonder@gmail.com",
        From : document.getElementById("email").value,
        Subject : "New Submit from you website",
        Body : "And this is the body"
    }).then(
      message => alert("Message sent successfully")
    );
}

const cards = document.querySelectorAll('.card');

		const toggleExpansion = (element, to, duration = 350) => {
		  return new Promise((res) => {
		    element.animate([
		      {
			top: to.top,
			left: to.left,
			width: to.width,
			height: to.height
		      }
		    ], {duration, fill: 'forwards', ease: 'ease-in'})
		    setTimeout(res, duration);
		  })
		}

		const fadeContent = (element, opacity, duration = 300) => {
			return new Promise(res => {
				[...element.children].forEach((child) => {
					requestAnimationFrame(() => {
						child.style.transition = `opacity ${duration}ms linear`;
						child.style.opacity = opacity;
					});
				})
				setTimeout(res, duration);
			})
		}

			
		const getCardContent = (title, type) => {

			if(type === "maze"){
				return `
					<div class="card-content">
						<h2>${title}</h2>
						<p>This is Maze application which is used to compare different search algorithms</p>
						<img src="./img/${type}.png" alt="${title}">
						<h4>
						Maze runner app .	
						</h4>
						<h5> Tools used : <span> Java & inteliJ</span> </h5>
						<p></p>
						<p>
						Maze Runner game is a game that requires pathfinding algorithm to get 
						to the destination with the shortest path. This algorithm is used in an NPC that
						will move from start node to destination node. However, the use of incorrect algorithms 
						can affect the length of the computing process to find the shortest path. The longer the 
						computing process, the longer the players have to wait. 
						</p>
						<p>This study compared pathfinding 
						algorithms A *, Dijkstra, and Breadth First Search (BFS) in the Maze Runner game. Comparison 
						process of these algorithms was conducted by replacing the algorithm in the game by measuring
						the process time, the length of the path, and the numbers of block played in the existing 
						computing process. The results of this study recommend
						which algorithm is suitable to be applied in Maze Runner Game </p>
						
					</div>
				`;
			}
			else if(type === "quiz"){
				return `
					<div class="card-content">
						<h2>${title}</h2>
						<p>This is a quiz about healthly living lifestyle</p>
						<img src="./img/${type}.png" alt="${title}">
						<h4>
						Hi, Thank you for visiting .	
						</h4>
						<h5> Tools used : <span> C++ & CLion</span> </h5>
						<p></p>
						<p>
						Anyone looking to improve their knowledge can use this
						</p>
						
					</div>
				`;
			}
			else if(type === "website"){
				return `
					<div class="card-content">
						<h2>${title}</h2>
						
						<img src="./img/${type}.png" alt="${title}">
						<h4>
						Hi, Thank you for visiting .	
						</h4>
						<h5> Tools used : <span> Html, Cascading Style Sheet (CSS) & JavaScript</span> </h5>
						<p>This is a personal portfolio website of myself (Ntethelelo), made using Html, CSS & JavaScript.</p>
						
					</div>
				`;
			}
			else if(type === "scratch"){
				return `
					<div class="card-content">
						<h2>${title}</h2>
						<p>Fun and interactive way of learning</p>
						<img src="./img/${type}.png" alt="${title}">
						<h4>
						Hi, Thank you for visiting .	
						</h4>
						<h5> Tools used : <span> Scratch.com</span> </h5>
						<p></p>
						<p>
						This is a project that uses scratch to create an interactive and a fun way of learning
						, which keeps you engaged and enjoying the learning process. In this project we learn more 
						about the Database Life Cycle, you learn more about the stages and processes involved and you also get 
						to take a quiz about what you have learned.
						</p>
						
					</div>
				`;
			}
			else if(type === "Memory"){
				return `
					<div class="card-content">
						<h2>${title}</h2>
						<img src="./img/${type}.png" alt="${title}">
						<h4>
							Card pairing game.	
						</h4>
						<h5> Tools used : <span>Java & Intellij</span> </h5>
						
				
					</div>
				`;
			}
			else if(type === "E-comerce"){
				return `
					<div class="card-content">
						<h2>${title}</h2>
						<img src="./img/${type}.png" alt="${title}">
						<h4>
						Final year Major Project.	
						</h4>
						<h5> Tools used : <span> Microsoft C# ASP.Net, MySQL</span> </h5>
						<p>
						</p>
						
						
					</div>
				`;
			}
			else if(type === "puzzle"){
				return `
					<div class="card-content">
						<h2>${title}</h2>
						<img src="./img/${type}.png" alt="${title}">
						<h4>
						Puzzle Slider game	
						</h4>
						<h5> Tools used : <span> Java & Eclipse</span> </h5>
						
						
					</div>
				`;
			}
			else if(type === "react"){
				return `
					<div class="card-content">
						<h2>${title}</h2>
						<p>Portfolio website in Reactjs</p>
						<img src="./img/${type}.png" alt="${title}">
						<h4>
						Hi, Thank you for visiting .	
						</h4>
						<h5> Tools used : <span> Reactjs</span> </h5>
						<p></p>
						<p>
						</p>
						
					</div>
				`;
			}
			else if(type === "Calculator"){
				return `
					<div class="card-content">
						<h2>${title}</h2>
						<p>Basic calculator implemented using javaScript</p>
						<img src="./img/${type}.png" alt="${title}">
						<h4>
						Hi, Thank you for visiting .	
						</h4>
						<h5> Tools used : <span>Html, CSS & JavaScript</span> </h5>
						<p>
						Anyone looking to improve their knowledge can use this
						</p>
						
					</div>
				`;
			}
			else if(type === "blur"){
				return `
					<div class="card-content">
						<h2>${title}</h2>
						<img src="./img/${type}.png" alt="${title}">
						<h4>
						Hi, Thank you for visiting .	
						</h4>
						<h5> Tools used : <span>Html, CSS & JavaScript</span> </h5>
						<p>
						As the browser loads 
						</p>
						
					</div>
				`;
			}
		}

		const onCardClick = async (e) => {
			const card = e.currentTarget;
			// clone the card
			const cardClone = card.cloneNode(true);
			// get the location of the card in the view
			const {top, left, width, height} = card.getBoundingClientRect();
			// position the clone on top of the original
			cardClone.style.position = 'fixed';
			cardClone.style.top = top + 'px';
			cardClone.style.left = left + 'px';
			cardClone.style.width = width + 'px';
			cardClone.style.height = height + 'px';
			// hide the original card with opacity
			card.style.opacity = '0';
			// add card to the same container
			card.parentNode.appendChild(cardClone);
			// create a close button to handle the undo
			const closeButton = document.createElement('button');
			// position the close button top corner
			closeButton.style = `
				position: fixed;
				z-index: 10000;
				top: 35px;
				right: 35px;
				width: 35px;
				height: 35px;
				border-radius: 50%;
				background-color: #e25656;
				cursor: pointer;
			`;
			// attach click event to the close button
			closeButton.addEventListener('click', async () => {
				// remove the button on close
				closeButton.remove();
				// remove the display style so the original content is displayed right
				cardClone.style.removeProperty('display');
				cardClone.style.removeProperty('padding');
				// show original card content
				[...cardClone.children].forEach(child => child.style.removeProperty('display'));
				fadeContent(cardClone, '0');
				// shrink the card back to the original position and size
				await toggleExpansion(cardClone, {top: `${top}px`, left: `${left}px`, width: `${width}px`, height: `${height}px`}, 300)
				// show the original card again
				card.style.removeProperty('opacity');
				// remove the clone card
				cardClone.remove();
			});

			//create github button

			// fade the content away
			fadeContent(cardClone, '0')
				.then(() => {
					[...cardClone.children].forEach(child => child.style.display = 'none');
				});
			// expand the clone card
			await toggleExpansion(cardClone, {top: 0, left: 0, width: '100vw', height: '100vh'});
			const content = getCardContent(card.textContent, card.dataset.type)
			// set the display block so the content will follow the normal flow in case the original card is not display block
			cardClone.style.display = 'block';
			cardClone.style.padding = '0';
			// append the close button after the expansion is done
			cardClone.appendChild(closeButton);
			cardClone.insertAdjacentHTML('afterbegin', content);
		};

		cards.forEach(card => card.addEventListener('click', onCardClick));
		