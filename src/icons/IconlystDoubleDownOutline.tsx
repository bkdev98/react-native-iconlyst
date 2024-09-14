import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleDownOutline = ({
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
      d="M16.856 12.435a.75.75 0 0 0-1.058.072L12 16.86 8.2 12.507a.75.75 0 1 0-1.13.986l4.364 5a.75.75 0 0 0 1.13 0l4.363-5a.75.75 0 0 0-.072-1.058M17.046 5.69a.75.75 0 0 0-.683-.44H7.636a.75.75 0 0 0-.565 1.243l4.364 5a.75.75 0 0 0 1.13 0l4.363-5a.75.75 0 0 0 .118-.803m-2.333 1.06L12 9.86 9.286 6.75z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDoubleDownOutline;
