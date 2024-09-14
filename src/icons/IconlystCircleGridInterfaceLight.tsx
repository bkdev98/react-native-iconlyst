import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCircleGridInterfaceLight = ({
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
      d="M6.5 14a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7M17.5 10a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7M7.802 10H5.198A2.2 2.2 0 0 1 3 7.802V5.198C3 3.984 3.984 3 5.198 3h2.604C9.016 3 10 3.984 10 5.198v2.604A2.2 2.2 0 0 1 7.802 10M16.198 14h2.604c1.214 0 2.198.984 2.198 2.198v2.604A2.2 2.2 0 0 1 18.802 21h-2.604A2.2 2.2 0 0 1 14 18.802v-2.604c0-1.214.984-2.198 2.198-2.198"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCircleGridInterfaceLight;
