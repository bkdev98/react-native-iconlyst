import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlagOutline = ({
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
      d="M4.466 3a.75.75 0 0 1 .75-.75h14.069a.75.75 0 0 1 .663 1.1l-2.651 5.011 2.647 4.897a.75.75 0 0 1-.65 1.107l-13.328.179V21a.75.75 0 0 1-1.5 0V3m1.5 10.044 12.07-.162-2.25-4.16a.75.75 0 0 1-.003-.707L18.04 3.75H5.966z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlagOutline;
