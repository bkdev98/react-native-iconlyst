import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGlobeOutline = ({
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
      fillRule="evenodd"
      d="M4.59 9.225a6.37 6.37 0 1 1 12.74 0 6.37 6.37 0 0 1-12.74 0m6.37-4.87a4.87 4.87 0 1 0 0 9.74 4.87 4.87 0 0 0 0-9.74"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.66 2.47a.75.75 0 0 1 1.06 0A9.561 9.561 0 0 1 4.2 15.99a.75.75 0 0 1 1.06-1.06 8.061 8.061 0 0 0 11.4-11.4.75.75 0 0 1 0-1.061"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.96 17.309a.75.75 0 0 1 .75.75v2.467a.75.75 0 1 1-1.5 0v-2.467a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.41 20.527a.75.75 0 0 1 .75-.75h7.623a.75.75 0 0 1 0 1.5H7.159a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGlobeOutline;
