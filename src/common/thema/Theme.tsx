import s from 'component/header/style.module.scss';

type ThemePropsType = {
  theme: string;
  toggleTheme: () => void;
};

export const Theme = ({ theme, toggleTheme }: ThemePropsType) => (
  <div>
    {theme === 'dark' ? (
      <span className={s.icon} onClick={toggleTheme} role="presentation">
        &#127770;
      </span>
    ) : (
      <span
        className={s.icon}
        style={{ fontSize: '30px' }}
        onClick={toggleTheme}
        role="presentation"
      >
        &#127773;
      </span>
    )}
  </div>
);
