import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAlignBottomLight = ({
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
      d="M5.198 21h2.604A2.2 2.2 0 0 0 10 18.802V5.198A2.2 2.2 0 0 0 7.802 3H5.198A2.2 2.2 0 0 0 3 5.198v13.604C3 20.016 3.984 21 5.198 21M16.198 21h2.604A2.2 2.2 0 0 0 21 18.802v-6.604A2.2 2.2 0 0 0 18.802 10h-2.604A2.2 2.2 0 0 0 14 12.198v6.604c0 1.214.984 2.198 2.198 2.198"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAlignBottomLight;
