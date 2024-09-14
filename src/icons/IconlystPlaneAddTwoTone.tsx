import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneAddTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.084 13.046c1.227-.51 3.65-1.55 4.896-2.068L6.693 5.436c.619-.22 1.186-.478 1.78-.62.694-.166 1.292.149 1.802.596a185 185 0 0 1 3.484 3.11c.29.266.519.29.864.139.996-.44 1.995-.877 3.017-1.246 1.182-.427 2.865-.47 3.283 1.02.33 1.176-.683 2.178-1.681 2.599a603 603 0 0 1-9.957 4.118c-2.375.954-4.254.122-5.26-2.242-.091-.21-.436-1.05-.525-1.262"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.5 18.304h-4.258m2.128 2.173v-4.342M5.4 20.335h8.382"
    />
  </Svg>
);
export default IconlystPlaneAddTwoTone;
