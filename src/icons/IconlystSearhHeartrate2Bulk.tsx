import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearhHeartrate2Bulk = ({
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
      d="M11.133 2.498a8.42 8.42 0 1 0 .001 16.84 8.42 8.42 0 0 0 0-16.84"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M9.812 7.848a.75.75 0 0 0-1.328-.043l-1.888 3.346a.75.75 0 1 0 1.307.737l1.182-2.096 2.132 4.417a.75.75 0 0 0 1.292.1l2.165-3.135 1.367 2.083a.75.75 0 0 0 1.26-.01l1.046-1.65h1.385a.75.75 0 1 0 0-1.5h-1.798a.75.75 0 0 0-.633.348l-.644 1.017-1.34-2.043a.75.75 0 0 0-1.244-.014l-2.066 2.991zM19.009 17.816l1.984 1.979a1 1 0 1 1-1.412 1.416l-1.984-1.978a1.001 1.001 0 0 1 1.412-1.417"
    />
  </Svg>
);
export default IconlystSearhHeartrate2Bulk;
