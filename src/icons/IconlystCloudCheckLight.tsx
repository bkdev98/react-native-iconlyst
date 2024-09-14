import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudCheckLight = ({
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
      d="M18.564 17.27A4.14 4.14 0 0 0 21 13.494c0-2.596-1.83-4.139-4.103-4.14 0-1.633-1.28-4.898-4.897-4.898S7.103 7.722 7.103 9.355C4.833 9.375 3 10.899 3 13.495c0 1.68 1 3.125 2.436 3.774"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.158 17.254 2.289 2.292 4.715-4.718"
    />
  </Svg>
);
export default IconlystCloudCheckLight;
