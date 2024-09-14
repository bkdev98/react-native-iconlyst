import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNavigationBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.433 4.093 12.636 5.133c1.171.476 1.082 2.163-.132 2.514l-6.145 1.775-2.82 5.74c-.559 1.135-2.235.927-2.498-.309L4.627 5.607a1.345 1.345 0 0 1 1.806-1.514"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNavigationBroken;
