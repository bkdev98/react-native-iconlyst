import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAlignCenterTwoTone = ({
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
      d="M5.698 21h2.604a2.2 2.2 0 0 0 2.198-2.198V5.198A2.2 2.2 0 0 0 8.302 3H5.698A2.2 2.2 0 0 0 3.5 5.198v13.604C3.5 20.016 4.484 21 5.698 21"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.698 17.5h2.604a2.2 2.2 0 0 0 2.198-2.198V8.698A2.2 2.2 0 0 0 19.302 6.5h-2.604A2.2 2.2 0 0 0 14.5 8.698v6.604c0 1.214.984 2.198 2.198 2.198"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystAlignCenterTwoTone;
