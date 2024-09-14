import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChevronExpandHorizontalOutline = ({
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
      d="M9.53 7.47a.75.75 0 0 1 0 1.06L6.06 12l3.47 3.47a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 0M19.53 11.47a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06L17.94 12l-3.47-3.47a.75.75 0 0 1 1.06-1.06z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChevronExpandHorizontalOutline;
