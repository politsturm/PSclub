import React from "react"
import classNames from "classnames"
import styles from "./styles.module.css"
import styleHelpers from "../helpers.module.css"

const {wrapper, sectionText} = styleHelpers;
const {programmItem, itemsWrapper, itemHeading, itemText} = styles;

const ProgrammSection = () => {
	const sectionClasses = classNames({
		[wrapper]: true
	})

	return (
		<div className={sectionClasses} >
			<h2>План работы</h2>

			<div className={itemsWrapper}>
				<div className={programmItem}>
					<h3 className={itemHeading}>Центральный информресурс</h3>
					<p className={itemText}>Создание единого марксистского информресурса, "коллективного организатора", который объединяет коммунистов, ведет агитацию и пропаганду, решает теоретические вопросы, разоблачает оппортунизм и ревизионизм, координирует действия марксистских кружков.</p>
				</div>

				<div className={programmItem}>
					<h3 className={itemHeading}>Кружковое движение</h3>
					<p className={itemText}>Организация марксистских кружков и клубов для обучения марксистско-ленинской теории,  создание теоретического и организационного ядра для будущей коммунистической партии.</p>
				</div>

				<div className={programmItem}>
					<h3 className={itemHeading}>Связь с рабочим движением</h3>
					<p className={itemText}>Максимальное привлечение рабочих в ряды марксистов, ведение классовой агитации и пропаганды, помощь в защите трудовых прав и создании независимых профсоюзов.</p>
				</div>

				<div className={programmItem}>
					<h3 className={itemHeading}>Образование компартии</h3>
					<p className={itemText}>Соединение широкого кружкового движения с передовыми рабочими, создание массовой дисциплинированной коммунистической партии - авангарда рабочего класса, борьба за социализм.</p>
				</div>
			</div>
		</div>
	)
}

export default ProgrammSection
