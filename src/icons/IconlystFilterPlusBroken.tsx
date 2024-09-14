import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterPlusBroken = ({
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
      d="M14.837 15.581a1.54 1.54 0 0 0-.508 1.143v1.988c0 .63-.384 1.195-.969 1.428l-1.88.75a1.538 1.538 0 0 1-2.107-1.43v-3.222c0-.408-.163-.799-.45-1.088l-4.365-3.885a3.77 3.77 0 0 1-1.103-2.664V6.55c0-1.481 1.2-2.682 2.683-2.682M18.322 3.87c1.481 0 2.682 1.2 2.682 2.682v1.363a3.77 3.77 0 0 1-1.245 2.8l-2.461 2.433M14.633 5.627H9.377m2.628 2.63V3"
    />
  </Svg>
);
export default IconlystFilterPlusBroken;
