import styles from './dayScheduleSide.module.css'
import logo from './images/logo_usarb.png'

function DayScheduleSide() {
	return (
		<section className={styles.container}>
			<div className={styles.labelContainer}>
				<div className={styles.labelImage}>
					<img src={logo} alt=""/>
				</div>
				<div className={styles.labelName}>
					UNIVERSITATEA DE STAT „ALECU RUSSO” DIN BĂLȚI
				</div>
			</div>
			<table className={styles.table}>
				<tbody>
				{[
					['8:00', '9:30'],
					['9:45', '11:15'],
					['11:30', '13:00'],
					['13:15', '14:45'],
					['15:00', '16:30'],
					['16:45', '18:15'],
					['18:30', '20:00']
				].map(([start, end]) => (
					<tr key={start}>
						<td className={styles.timeCell}>
							{start}<br/>{end}
						</td>
						<td className={styles.contentCell}>
							<div className={styles.hiddenContent}>
								<strong> </strong>
								<p></p>
								<p></p>
								<strong> </strong>
							</div>
						</td>
					</tr>
				))}
				</tbody>
			</table>
		</section>
	);
}

export default DayScheduleSide;