import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCircleGridInterfaceOutline = ({
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
      d="M6.75 14.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M2.5 17.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0M2.5 6.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0m4.25-2.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M17.75 3.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M13.5 6.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0M13.5 17.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0m4.25-2.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCircleGridInterfaceOutline;
