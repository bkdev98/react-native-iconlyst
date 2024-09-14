import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCardsBold = ({
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
      d="M16.677 18.709q-.372 0-.764-.057l-4.453-.671c-2.605-.392-4.082-2.482-3.674-5.198l.96-6.42c.407-2.717 2.425-4.28 5.035-3.9h.002l4.45.67c2.605.394 4.081 2.483 3.674 5.199l-.96 6.42c-.367 2.443-2.043 3.957-4.27 3.957"
    />
    <Path
      fill={props.color}
      d="m11.236 19.465 2.59.389c.208.031.232.322.032.388l-3.335 1.096a4.9 4.9 0 0 1-1.53.256c-1.852 0-3.404-1.182-4.086-3.243l-2.025-6.16c-.43-1.292-.38-2.579.147-3.623.503-1 1.4-1.737 2.596-2.129l1.436-.472c.11-.036.22.06.202.174l-.96 6.419c-.532 3.547 1.496 6.386 4.933 6.905"
    />
  </Svg>
);
export default IconlystCardsBold;
