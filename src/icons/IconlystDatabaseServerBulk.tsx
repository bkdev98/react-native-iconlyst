import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseServerBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.315 4.711C19.085 3.199 15.908 2 12.012 2c-3.753 0-6.841 1.111-7.27 2.544a.74.74 0 0 0-.092.341v7.964c0 .33.21 3.122 6.6 3.33h1.5c6.39-.208 6.6-3 6.6-3.33V4.885c0-.061-.021-.117-.035-.174M6.15 12.505c.003 0 .285 1.85 5.85 1.85 5.589 0 5.849-1.866 5.851-1.885v-1.306c-1.048.649-2.822 1.191-5.851 1.191s-4.802-.542-5.85-1.191zM17.851 8.35V6.623c-1.338.696-3.452 1.148-5.839 1.148-2.401 0-4.526-.457-5.862-1.161v1.778c.019.08.411 1.847 5.85 1.847 5.589 0 5.849-1.866 5.851-1.885"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.25 16.179v1.249a2.29 2.29 0 0 0-1.471 1.47H5.8a.75.75 0 0 0 0 1.5H9.78a2.31 2.31 0 0 0 2.221 1.6 2.31 2.31 0 0 0 2.221-1.6H18.2a.75.75 0 0 0 0-1.5h-3.979a2.29 2.29 0 0 0-1.471-1.47v-1.25zm-.1 3.47c0 .485.365.85.85.85a.83.83 0 0 0 .85-.85.83.83 0 0 0-.85-.85.83.83 0 0 0-.85.85"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDatabaseServerBulk;
