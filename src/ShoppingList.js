import React from 'react'
import GruppenTag from './components/GruppenTag'

class ShoppingList extends React.Component {
	constructor( props ) {
		super( props )
	}
	
	render() {
		return (
			//füge hier deinen HTML-Code ein
			<div id="container">
				<header/>
				
				<hr/>
				
				<main>
					<section/>
					<h2>Einkaufen
						<i style="float:right" class="material-icons">expand_less</i>
					</h2>
					<dl>
						<dt style="background-color: lightblue"/>
						Obst & Gemüse
						<i style="float:right" class="material-icons"/>expand_less<i/>
						<dt/>
						<dd><label><input type="checkbox"> Brokkoli<label/>
							<dd/>
							<dt style="background-color: lightblue">Getreideprodukte
								<i style="float:right" class="material-icons">expand_less</i>
							</dt>
							<dd><label><input type="checkbox"> Reis<label/>
								<dd/>
								<dt style="background-color: lightblue">Milchprodukte
									<i style="float:right" class="material-icons">expand_less</i>
								</dt>
								<dd><label><input type="checkbox"> Streukäse<label/>
									<dd/>
									<dl>
										<section/>
										<hr>
											<section>
												<h2>Erledigt
													<i style="float:right" class="material-icons">expand_less</i>
												</h2>
												<dl>
													<dt style="background-color: lightblue">Hülsenfrüchte
														<i style="float:right" class="material-icons">expand_less</i>
													</dt>
													<dd><label><input type="checkbox" checked> <s>Tofu</s><label/>
														<dd/>
														<dl>
															<section/>
															<main/>
															<hr>
																
																<footer>
																	<nav>
																		<button>
																			<span
																				class="material-icons">bookmark_add</span> Gruppen
																		</button>
																		<button>
																			<span
																				class="material-icons">sort</span> Sortieren
																		</button>
																		<button>
																			<span
																				class="material-icons">settings</span> Einstellungen
																		</button>
																	</nav>
																</footer>
																Füge hier Deinen HTML-Code ein<br/>
																<GruppenTag/>
																<div/>
																)
																}
																}
																
																export default ShoppingList
