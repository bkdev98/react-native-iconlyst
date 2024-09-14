import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchRestartTwoTone = ({
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
      d="M20.204 12.807a8.128 8.128 0 1 1-9.07-9.125"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.676 17.7 3.307 3.3M18.12 7.552l1.495.76a3.035 3.035 0 0 1-5.043-2.277M17.092 4.518l-1.494-.76a3.035 3.035 0 0 1 5.043 2.277"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSearchRestartTwoTone;
