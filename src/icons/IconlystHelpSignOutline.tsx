import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHelpSignOutline = ({
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
      d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12c0 5.384-4.365 9.75-9.75 9.75S2.25 17.384 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.999 8.716a3.284 3.284 0 1 0 0 6.567 3.284 3.284 0 0 0 0-6.567M7.215 12a4.784 4.784 0 1 1 9.569.001 4.784 4.784 0 0 1-9.57-.002"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.263 5.263a.75.75 0 0 1 1.06 0l3.104 3.103a.75.75 0 0 1-1.06 1.06L5.263 6.325a.75.75 0 0 1 0-1.06m13.475 0a.75.75 0 0 1 0 1.06l-3.104 3.104a.75.75 0 1 1-1.06-1.061l3.103-3.103a.75.75 0 0 1 1.06 0m-9.31 9.31a.75.75 0 0 1 0 1.06l-3.104 3.104a.75.75 0 1 1-1.06-1.06l3.103-3.104a.75.75 0 0 1 1.061 0m5.145 0a.75.75 0 0 1 1.061 0l3.104 3.104a.75.75 0 0 1-1.06 1.06l-3.105-3.103a.75.75 0 0 1 0-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHelpSignOutline;
