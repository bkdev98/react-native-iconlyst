import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScooterTwoTone = ({
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M5.966 19.18a2.216 2.216 0 1 0 0-4.432 2.216 2.216 0 0 0 0 4.431M19.534 19.18a2.216 2.216 0 1 0 0-4.432 2.216 2.216 0 0 0 0 4.431"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m6.764 14.894 2.61-9.237c.137-.492.6-.837 1.112-.837h1.585M17.565 17.986l-.315.128a3.2 3.2 0 0 1-1.22.246H8.19"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M11.4 18.362V13.29c0-.69-.325-1.35-.876-1.763L8.22 9.805"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystScooterTwoTone;
