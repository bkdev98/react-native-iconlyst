import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserAiAltTwoTone = ({
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
      d="M11.083 14.595c-3.599 0-6.668.544-6.668 2.722 0 1.168.879 1.872 2.252 2.273"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.345 7.26a4.26 4.26 0 1 1-8.52 0 4.26 4.26 0 0 1 8.52 0"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.818 19.676.108-.292a4.01 4.01 0 0 1 2.368-2.372l.291-.108-.29-.108a4.01 4.01 0 0 1-2.37-2.372l-.107-.291-.108.291a4.01 4.01 0 0 1-2.369 2.372l-.29.108.29.108a4.01 4.01 0 0 1 2.37 2.372zM11.156 21a1.89 1.89 0 0 1 1.254-1.256 1.89 1.89 0 0 1-1.254-1.257A1.89 1.89 0 0 1 9.9 19.744 1.89 1.89 0 0 1 11.156 21"
    />
  </Svg>
);
export default IconlystUserAiAltTwoTone;
