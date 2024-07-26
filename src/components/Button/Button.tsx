import styles from './Button.module.css';

const Button = () => {
	const socialPlatforms = [
		{ platform: 'github', link: 'https://github.com/Pratitb' },
		{
			platform: 'frontend mentor',
			link: 'https://www.frontendmentor.io/profile/Pratitb',
		},
		{
			platform: 'linkedin',
			link: 'https://www.linkedin.com/in/pratit-bangdiwala/',
		},
		{ platform: 'twitter', link: 'https://twitter.com/pbangdiwala7' },
		{
			platform: 'website',
			link: 'https://pratit.dev/',
		},
	];
	return (
		<div className={styles.social_btns}>
			{socialPlatforms.map((social) => (
				<a
					href={social.link}
					target="_blank"
					key={social.platform}
					className={styles.social_btn}>
					{social.platform}
				</a>
			))}
		</div>
	);
};

export default Button;
