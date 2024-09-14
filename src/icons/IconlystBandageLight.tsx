import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBandageLight = ({
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
      d="M13.713 19.75a4.268 4.268 0 0 0 6.036-6.036L10.285 4.25a4.267 4.267 0 1 0-6.035 6.036z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.564 13.51-1.055 1.055a.57.57 0 0 1-.806 0l-3.284-3.283a.57.57 0 0 1 0-.806l1.056-1.055a.57.57 0 0 1 .806 0l3.283 3.283a.57.57 0 0 1 0 .806"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.996 5.96 1.718-1.706a4.254 4.254 0 0 1 6.032 0 4.2 4.2 0 0 1 1.25 3.016 4.24 4.24 0 0 1-1.25 3.015l-1.707 1.718M5.963 12.004 4.245 13.71a4.29 4.29 0 0 0 0 6.042 4.29 4.29 0 0 0 6.043 0l1.706-1.718"
    />
  </Svg>
);
export default IconlystBandageLight;
