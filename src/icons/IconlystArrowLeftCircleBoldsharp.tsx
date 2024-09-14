import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowLeftCircleBoldsharp = ({
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
      d="M17.09 12.75H9.978l3.012 2.995-1.057 1.064L7.097 12l4.836-4.809 1.057 1.064-3.012 2.995h7.112zm-14.59 9H22V2.25H2.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowLeftCircleBoldsharp;
