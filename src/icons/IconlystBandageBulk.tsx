import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBandageBulk = ({
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
      d="M20.1 13.36 10.64 3.9c-.9-.9-2.1-1.4-3.37-1.4-1.28 0-2.47.5-3.37 1.4a4.77 4.77 0 0 0 0 6.74l9.46 9.46c.9.91 2.1 1.4 3.37 1.4 1.28 0 2.47-.49 3.37-1.4a4.77 4.77 0 0 0 0-6.74"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.06 12a.939.939 0 1 1 1.88 0 .939.939 0 1 1-1.88 0M20.1 10.64 18.74 12 12 5.26l1.36-1.36c.9-.9 2.1-1.4 3.37-1.4 1.28 0 2.47.5 3.37 1.4a4.77 4.77 0 0 1 0 6.74M12 18.74l-1.36 1.36c-.9.91-2.1 1.4-3.37 1.4-1.28 0-2.47-.49-3.37-1.4a4.77 4.77 0 0 1 0-6.74L5.26 12z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBandageBulk;
