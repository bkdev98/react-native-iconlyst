import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCardsBroken = ({
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
      d="M18.036 3.72c2.38.355 3.61 2.257 3.253 4.634l-.96 6.413c-.355 2.377-2.086 3.836-4.467 3.48l-4.45-.667c-2.38-.356-3.61-2.256-3.254-4.634l.96-6.414c.355-2.377 2.094-3.833 4.467-3.48l1.113.167M13.088 8.854l4.495.644m-5.01 2.951 2.696.387"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.268 5.875-2.86.945c-2.289.753-3.188 2.833-2.425 5.121l1.012 3.079M6.008 18.098c.754 2.28 2.707 3.424 4.985 2.67l4.287-1.407c.718-.227 1.317-.608 1.753-1.09"
    />
  </Svg>
);
export default IconlystCardsBroken;
