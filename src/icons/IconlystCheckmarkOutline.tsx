import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCheckmarkOutline = ({
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
      d="M19.925 6.529a.75.75 0 0 1-.348 1.002c-5.234 2.534-8.458 7.173-9.944 9.966a.75.75 0 0 1-1.306.031 16.5 16.5 0 0 0-3.56-4.178.75.75 0 1 1 .967-1.146 18.1 18.1 0 0 1 3.194 3.492c1.763-2.953 5.011-7.102 9.995-9.515a.75.75 0 0 1 1.002.348"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCheckmarkOutline;
