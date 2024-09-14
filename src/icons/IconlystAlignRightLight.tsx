import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAlignRightLight = ({
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
      d="M21 18.802v-2.604A2.2 2.2 0 0 0 18.802 14H5.198A2.2 2.2 0 0 0 3 16.198v2.604C3 20.016 3.984 21 5.198 21h13.604A2.2 2.2 0 0 0 21 18.802M21 7.802V5.198A2.2 2.2 0 0 0 18.802 3h-6.604A2.2 2.2 0 0 0 10 5.198v2.604C10 9.016 10.984 10 12.198 10h6.604A2.2 2.2 0 0 0 21 7.802"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAlignRightLight;
