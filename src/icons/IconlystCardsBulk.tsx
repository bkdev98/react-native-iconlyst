import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCardsBulk = ({
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
      d="m11.236 19.464 2.59.39c.208.03.232.321.032.387l-3.335 1.097a4.9 4.9 0 0 1-1.53.256c-1.852 0-3.404-1.182-4.086-3.243L2.882 12.19c-.43-1.291-.38-2.578.147-3.622.503-1.001 1.4-1.737 2.596-2.13l1.436-.471c.11-.036.22.059.202.173l-.96 6.42c-.532 3.546 1.496 6.385 4.933 6.904"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.912 18.652q.392.057.764.057c2.228 0 3.903-1.514 4.271-3.957l.96-6.42c.407-2.716-1.069-4.805-3.674-5.198l-4.449-.67h-.002l-.003-.002c-2.609-.378-4.626 1.184-5.033 3.9l-.96 6.42c-.408 2.717 1.07 4.807 3.674 5.199zm1.574-8.697A.75.75 0 0 0 17.7 8.47l-4.495-.651a.75.75 0 0 0-.215 1.485zm-2.314 3.34a.75.75 0 1 0 .214-1.484l-2.696-.391a.75.75 0 1 0-.215 1.484z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCardsBulk;
