import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChevronUpDuoOutline = ({
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
      d="M11.47 6.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 1 1-1.06 1.06L12 8.06l-3.47 3.47a.75.75 0 0 1-1.06-1.06zm.53 5.78a.75.75 0 0 1 .53.22l4 4a.75.75 0 1 1-1.06 1.06L12 14.06l-3.47 3.47a.75.75 0 0 1-1.06-1.06l4-4a.75.75 0 0 1 .53-.22"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChevronUpDuoOutline;
