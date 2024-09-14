import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGridInterfaceMinusLight = ({
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
      d="M18.802 21h-2.604A2.2 2.2 0 0 1 14 18.802v-2.604c0-1.214.984-2.198 2.198-2.198h2.604c1.214 0 2.198.984 2.198 2.198v2.604A2.2 2.2 0 0 1 18.802 21"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.268 6.496h-5.536"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.802 21H5.198A2.2 2.2 0 0 1 3 18.802v-2.604C3 14.984 3.984 14 5.198 14h2.604C9.016 14 10 14.984 10 16.198v2.604A2.2 2.2 0 0 1 7.802 21M7.802 10H5.198A2.2 2.2 0 0 1 3 7.802V5.198C3 3.984 3.984 3 5.198 3h2.604C9.016 3 10 3.984 10 5.198v2.604A2.2 2.2 0 0 1 7.802 10"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGridInterfaceMinusLight;