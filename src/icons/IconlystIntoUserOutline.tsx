import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIntoUserOutline = ({
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
      d="M5.638 17.398c-.846.767-1.185 1.742-1.185 2.602a.75.75 0 0 1-1.5 0c0-1.25.494-2.641 1.678-3.714 1.186-1.075 2.997-1.77 5.53-1.77s4.343.69 5.53 1.76c1.185 1.068 1.679 2.455 1.679 3.706a.75.75 0 0 1-1.5 0c0-.86-.338-1.83-1.184-2.592-.844-.762-2.263-1.374-4.525-1.374-2.26 0-3.678.616-4.523 1.382M18.841 9.639a.75.75 0 0 1-.002 1.06l-.598.596H21.1a.75.75 0 1 1 0 1.5h-2.857l.597.595a.75.75 0 0 1-1.058 1.063l-1.884-1.876a.75.75 0 0 1 0-1.063l1.884-1.877a.75.75 0 0 1 1.06.002M10.16 4.75a3.375 3.375 0 1 0 .001 6.75 3.375 3.375 0 0 0-.001-6.75M5.285 8.126a4.875 4.875 0 1 1 9.75 0 4.875 4.875 0 0 1-9.75 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystIntoUserOutline;
