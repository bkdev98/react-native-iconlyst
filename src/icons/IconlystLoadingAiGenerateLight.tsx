import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoadingAiGenerateLight = ({
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
      strokeWidth={1.5}
      d="M11.69 3.31a8.69 8.69 0 0 1 8.473 6.765m-4.72 9.762A8.69 8.69 0 0 1 4.919 6.554"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M13.24 17.079a5.31 5.31 0 1 1 3.343-7.14"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.3 12.504.106.285a3.91 3.91 0 0 0 2.31 2.313l.284.105-.284.105a3.91 3.91 0 0 0-2.31 2.314l-.105.284-.105-.284a3.91 3.91 0 0 0-2.31-2.314l-.284-.105.284-.105a3.91 3.91 0 0 0 2.31-2.313zM11.875 10.21a2.75 2.75 0 0 0 1.83 1.834 2.75 2.75 0 0 0-1.83 1.833 2.75 2.75 0 0 0-1.83-1.833 2.75 2.75 0 0 0 1.83-1.834"
    />
  </Svg>
);
export default IconlystLoadingAiGenerateLight;
