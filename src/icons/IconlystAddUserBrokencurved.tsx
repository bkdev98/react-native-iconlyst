import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAddUserBrokencurved = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.158 21.829c-3.814 0-7.072-.577-7.072-2.887s3.237-4.411 7.072-4.411c3.814 0 7.072 2.081 7.072 4.39 0 1.626-1.606 2.404-3.895 2.722M10.158 2.171a4.533 4.533 0 0 0-4.533 4.533 4.52 4.52 0 0 0 4.501 4.533h.032a4.534 4.534 0 0 0 2.687-8.184M19.367 8.15v4.01M21.414 10.155h-4.09"
    />
  </Svg>
);
export default IconlystAddUserBrokencurved;
