import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerOutlet2Outline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.014 7.567c0-1.033.837-1.872 1.87-1.872h7.865a1.87 1.87 0 0 1 1.87 1.872v1.527c0 2.983-2.18 5.702-5.234 5.993A5.804 5.804 0 0 1 7.014 9.31zm1.87-.372a.37.37 0 0 0-.37.372v1.744a4.304 4.304 0 0 0 4.728 4.282c2.2-.21 3.878-2.203 3.878-4.5V7.568a.37.37 0 0 0-.37-.372z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.275 2.387a.75.75 0 0 1 .75.75v3.309a.75.75 0 0 1-1.5 0v-3.31a.75.75 0 0 1 .75-.75M15.357 2.387a.75.75 0 0 1 .75.75v3.309a.75.75 0 0 1-1.5 0v-3.31a.75.75 0 0 1 .75-.75M12.816 13.777a.75.75 0 0 1 .75.75v3.194c.005.716.6 1.321 1.368 1.325h1.055c1.155 0 2.118.922 2.118 2.09a.75.75 0 1 1-1.5 0 .605.605 0 0 0-.618-.59h-1.06c-1.564-.006-2.855-1.251-2.863-2.819v-3.2a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPowerOutlet2Outline;
