import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChevronUpOutline = ({
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
      d="M11.47 8.47a.75.75 0 0 1 1.06 0l7 7a.75.75 0 1 1-1.06 1.06L12 10.06l-6.47 6.47a.75.75 0 0 1-1.06-1.06z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChevronUpOutline;
