import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudsPlanetLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.518 13.053a7.19 7.19 0 0 1-9.92 6.207M14.575 6.19a7.19 7.19 0 0 0-9.964 8.957"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.597 15.86c.895.009 1.619.61 1.619 1.634 0 .663-.395 1.233-.961 1.49a1.8 1.8 0 0 1-.657.133H4.734c-.18 0-.419-.035-.66-.132a1.64 1.64 0 0 1-.96-1.49c0-1.025.723-1.626 1.619-1.634 0-.645.505-1.933 1.932-1.933s1.932 1.288 1.932 1.933M18.864 8.385c1.244.012 2.25.847 2.25 2.27a2.27 2.27 0 0 1-1.336 2.07 2.5 2.5 0 0 1-.912.187h-5.371c-.251 0-.582-.05-.918-.184a2.27 2.27 0 0 1-1.334-2.072c0-1.424 1.005-2.26 2.25-2.27 0-.896.702-2.687 2.686-2.687s2.685 1.79 2.685 2.686"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudsPlanetLight;
