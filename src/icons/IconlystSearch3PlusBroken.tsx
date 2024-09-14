import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearch3PlusBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.969 11.09h4.3m-2.15-2.15v4.3M11.128 3a8.1 8.1 0 1 1 0 16.2A8.1 8.1 0 0 1 6.794 4.256"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.972 19.485a1.515 1.515 0 1 1-3.03 0 1.515 1.515 0 0 1 3.03 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearch3PlusBroken;
