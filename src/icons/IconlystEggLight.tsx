import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEggLight = ({
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
      d="M19.964 13.827c.031 3.59-3.029 6.888-6.96 7.156-3.912.266-7.42-2.586-7.903-6.443-.238-1.897.196-3.695.9-5.436.765-1.886 1.798-3.6 3.413-4.89 2.04-1.631 4.193-1.62 6.216.041 1.838 1.51 2.925 3.52 3.687 5.73.391 1.13.622 2.298.647 3.842"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.574 7.863a11.5 11.5 0 0 0-1.495 3.34"
    />
  </Svg>
);
export default IconlystEggLight;
