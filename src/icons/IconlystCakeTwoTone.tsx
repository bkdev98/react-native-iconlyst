import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCakeTwoTone = ({
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
      d="m5.747 15.195.752 3.469A2.964 2.964 0 0 0 9.396 21h6.216c1.395 0 2.6-.973 2.897-2.336l.752-3.469.008-.033"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.375 6.402a4.84 4.84 0 0 1 3.064 3.627c.024-.009.057-.009.083-.009a2.874 2.874 0 0 1 2.882 2.882c0 .935-.448 1.772-1.144 2.294a2.8 2.8 0 0 1-1.738.587c-.812 0-1.54-.34-2.062-.877a4.87 4.87 0 0 1-2.783.877A4.8 4.8 0 0 1 9.68 14.74a2.85 2.85 0 0 1-2.195 1.043 2.83 2.83 0 0 1-1.738-.587 2.85 2.85 0 0 1-1.151-2.294 2.88 2.88 0 0 1 2.89-2.882c.15 0 .29.017.43.041a4.85 4.85 0 0 1 3.072-3.668"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.398 6.091a1.719 1.719 0 1 0-3.438.001 1.719 1.719 0 0 0 3.438 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.387 3s-.558.549-.666 1.377"
    />
  </Svg>
);
export default IconlystCakeTwoTone;
