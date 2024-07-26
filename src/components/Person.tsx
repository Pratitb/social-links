import styles from './Person/Person.module.css';

interface PersonProps {
	PersonName: string;
	PersonLocation: string;
	PersonRole: string;
}

const Person = ({ PersonName, PersonLocation, PersonRole }: PersonProps) => {
	return (
		<>
			<div className={styles.person}>
				<img
					src="/profile_image.png"
					alt="person image"
					className={styles.person_image}
				/>
				<p className={styles.person_name}>{PersonName}</p>
				<p className={styles.person_location}>{PersonLocation}</p>
				<p className={styles.person_work_role}>"{PersonRole}"</p>
			</div>
		</>
	);
};

export default Person;
