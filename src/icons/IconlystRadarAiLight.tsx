import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRadarAiLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.202 4.903a8.89 8.89 0 1 1-14.029 6.143"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.416 11.523a4.46 4.46 0 0 1-1.248 3.903 4.48 4.48 0 0 1-6.336 0 4.46 4.46 0 0 1-1.248-3.903"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12 11.694-.128-.346A4.75 4.75 0 0 0 9.068 8.54l-.345-.128.345-.127a4.75 4.75 0 0 0 2.804-2.809L12 5.131l.127.345a4.75 4.75 0 0 0 2.805 2.809l.345.127-.345.128a4.75 4.75 0 0 0-2.805 2.809zM5.709 5.975a2.23 2.23 0 0 0-1.486-1.487A2.23 2.23 0 0 0 5.71 3c.216.713.773 1.27 1.485 1.488a2.23 2.23 0 0 0-1.485 1.487M10.936 13.882l-5.872 7.927"
    />
  </Svg>
);
export default IconlystRadarAiLight;
