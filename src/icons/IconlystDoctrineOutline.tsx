import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoctrineOutline = ({
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
      d="M12 7.75a6.25 6.25 0 1 0 0 12.5 6.25 6.25 0 0 0 0-12.5M4.25 14a7.75 7.75 0 1 1 15.5 0 7.75 7.75 0 0 1-15.5 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.25 14a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.47 10.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06L13.94 14l-2.47-2.47a.75.75 0 0 1 0-1.06M9.434 2.508a.75.75 0 0 1 1.058-.074l6.9 6a.75.75 0 1 1-.984 1.132l-6.9-6a.75.75 0 0 1-.074-1.058"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDoctrineOutline;
