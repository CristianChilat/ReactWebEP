import styles from './reactiveSide.module.css'

function ReactiveSide() {
	return (
		<section>

			<h4 className={styles.label}>
				Orarul cursului
			</h4>

			<div className={styles.selectOrarButtonsContainer}>
				<button>Grupe</button>
				<button>Profesori</button>
				<button>Aule</button>
			</div>

			<div className={styles.switchModeContainer}>
				<div>
					Regim pentru student
				</div>
				<div className={styles.switchButtonContainer}>
					<div className={styles.insideBox}></div>
				</div>
			</div>

			<div className={styles.searchGroupContainer}>
				<div className={styles.searchInputIcon}>
					<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
					     data-svg="search-icon">
						<circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"></circle>
						<path fill="none" stroke="#000" strokeWidth="1.1" d="M14,14 L18,18 L14,14 Z"></path>
					</svg>
				</div>
				<input className={styles.searchGroupInput} type="text"/>
			</div>

			<div className={styles.groupListContainer}>
				<ul>
					<li>101</li>
					<li>102</li>
					<li>103</li>
					<li>103-ER</li>
					<li>103-ER</li>
					<li>104</li>
					<li>105</li>
				</ul>
			</div>

			<div className={styles.selectDayContainer}>
				<form action="#">
					<select name="daySelector">
						<option value="-1">Ziua</option>
						<option value="0">Luni</option>
						<option value="1" selected="selected">Marți</option>
						<option value="2">Miercuri</option>
						<option value="3">Joi</option>
						<option value="4">Vineri</option>
						<option value="5">Sîmbătă</option>
						<option value="6">Duminică</option>
					</select>
				</form>
			</div>

			<div className={styles.selectWeekContainer}>
				<form action="#">
					<select name="weekSelector">
						<option value="-1">Săptămîna</option>
						<option value="1">1 (1.9.2025 - 7.9.2025)</option>
						<option value="2">2 (8.9.2025 - 14.9.2025)</option>
						<option value="3">3 (15.9.2025 - 21.9.2025)</option>
						<option value="4">4 (22.9.2025 - 28.9.2025)</option>
						<option value="5">5 (29.9.2025 - 5.10.2025)</option>
						<option value="6">6 (6.10.2025 - 12.10.2025)</option>
						<option value="7">7 (13.10.2025 - 19.10.2025)</option>
						<option value="8">8 (20.10.2025 - 26.10.2025)</option>
						<option value="9">9 (27.10.2025 - 2.11.2025)</option>
						<option value="10">10 (3.11.2025 - 9.11.2025)</option>
						<option selected="selected" value="11">11 (10.11.2025 - 16.11.2025)</option>
						<option value="12">12 (17.11.2025 - 23.11.2025)</option>
						<option value="13">13 (24.11.2025 - 30.11.2025)</option>
						<option value="14">14 (1.12.2025 - 7.12.2025)</option>
						<option value="15">15 (8.12.2025 - 14.12.2025)</option>
						<option value="16">16 (15.12.2025 - 21.12.2025)</option>
						<option value="17">17 (22.12.2025 - 28.12.2025)</option>
						<option value="18">18 (29.12.2025 - 4.1.2026)</option>
						<option value="19">19 (5.1.2026 - 11.1.2026)</option>
						<option value="20">20 (12.1.2026 - 18.1.2026)</option>
						<option value="21">21 (19.1.2026 - 25.1.2026)</option>
					</select>
				</form>
			</div>

			<table className={styles.scheduleTableContainer}>
				<thead>
					<tr>
						<th></th>
						<th>1</th>
						<th>2</th>
						<th>3</th>
						<th>4</th>
						<th>5</th>
						<th>6</th>
						<th>7</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>L - 10</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>Ma - 11</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>Mi - 12</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>J - 13</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>V - 14</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>S - 15</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>D - 16</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>

			<div className={styles.abbreviationMeaningContainer}>
				<p>P - Prelegere</p>
				<p>S - Seminar</p>
				<p>L - Laborator</p>
				<p>PC - Proiect de Curs</p>
				<p>EP - Evaluare periodică</p>
				<p>C - Consultație</p>
				<p>E - Examinare</p>
				<p>R - Reexaminare</p>
				<p>SP - Seminar prealabil</p>
				<p>ST - Seminar de totalizare</p>
			</div>

			<div className={styles.additionalInformationContainer}>
				<div>Descarca orar</div>
				<div>Examene</div>
				<div>Planificare</div>
			</div>

			<div className={styles.workingTimeInfoPanel}>
				Serviciul este inactiv între ore 23:00 și 3:00
			</div>
		</section>
	)
}

export default ReactiveSide;