import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDcoument3LinesOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M16.22 21.75H8.271a4.5 4.5 0 0 1-4.4-4.6V6.656A4.523 4.523 0 0 1 8.367 2.25h5.667a2.8 2.8 0 0 1 2.02.861l3.796 3.948a2.8 2.8 0 0 1 .78 1.94v8.165a4.543 4.543 0 0 1-4.41 4.586m-7.917-1.5h7.9a3.05 3.05 0 0 0 2.923-3.082V9a1.3 1.3 0 0 0-.363-.9l-3.79-3.948a1.3 1.3 0 0 0-.938-.4h-5.65a2.987 2.987 0 0 0-3.012 2.924v10.49a3 3 0 0 0 2.93 3.085z"
    />
    <Path
      fill={props.color}
      d="M19.812 9.265h-2.739a3.314 3.314 0 0 1-3.3-3.31V3.063a.75.75 0 0 1 1.5 0v2.892a1.81 1.81 0 0 0 1.806 1.81h2.736a.75.75 0 0 1 0 1.5zM13.225 17.232h-4.46a.75.75 0 1 1 0-1.5h4.46a.75.75 0 1 1 0 1.5m2.268-3.421H8.766a.75.75 0 1 1 0-1.5h6.727a.75.75 0 1 1 0 1.5m-3.785-3.42H8.766a.75.75 0 1 1 0-1.5h2.942a.75.75 0 1 1 0 1.5"
    />
  </Svg>
);
export default IconlystDcoument3LinesOutline;
