import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCardsTwoTone = ({
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
      d="m13.835 3.053 4.452.666c2.38.356 3.608 2.258 3.252 4.635l-.96 6.413c-.355 2.377-2.086 3.836-4.467 3.48l-4.45-.667c-2.38-.356-3.61-2.256-3.254-4.634l.96-6.414c.355-2.377 2.094-3.833 4.467-3.48"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.338 8.852 4.495.644m-5.01 2.951 2.696.387M9.518 5.875l-2.86.945c-2.289.753-3.188 2.833-2.425 5.121L6.258 18.1c.754 2.28 2.706 3.423 4.985 2.67l4.287-1.408c.718-.226 1.316-.608 1.752-1.09"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCardsTwoTone;
