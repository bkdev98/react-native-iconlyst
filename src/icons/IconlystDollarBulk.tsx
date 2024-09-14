import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M13.002 15.733V5.063a1 1 0 1 0-2 0v14a1 1 0 1 0 2 0v-3.33"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M13.002 15.732h.332c.735 0 1.333-.597 1.333-1.33 0-.739-.598-1.34-1.333-1.34h-2.667a3.336 3.336 0 0 1-3.334-3.33 3.336 3.336 0 0 1 3.334-3.33h4.334a1 1 0 1 1 0 2h-4.334c-.735 0-1.334.597-1.334 1.33s.599 1.33 1.334 1.33h2.667a3.335 3.335 0 0 1 0 6.67H9a1 1 0 1 1 0-2z"
    />
  </Svg>
);
export default IconlystDollarBulk;
