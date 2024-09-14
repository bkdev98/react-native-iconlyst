import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoBulkcurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.061 5.11c-5.47 0-7.41 1.95-7.41 7.43s1.94 7.42 7.41 7.42c5.46 0 7.39-1.94 7.39-7.42s-1.93-7.43-7.39-7.43"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M22.151 7.47c-.78-.84-3.18.67-4.54 1.63.23.99.34 2.14.34 3.44 0 1.29-.11 2.42-.33 3.41 1.09.77 2.87 1.9 3.91 1.9.26 0 .48-.07.62-.23.93-.99.93-9.15 0-10.15"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoBulkcurved;
