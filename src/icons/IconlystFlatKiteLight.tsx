import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlatKiteLight = ({
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
      d="M10.75 20.29c9.011-5.397 10.169-12.886 9.621-15.956-1.94-.157-6.852-.3-9.62-1.584.528 1.72 1.01 5.843-1.29 8.565 1.142.469 2.732 2.047 2.936 4.195"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.948 20.18c-5.913 3.38-9.373-1.962-6.076-6.132 2.623-3.076 1.394-5.583-1.356-5.179M9.518 11.268c5.026-1.32 7.44-2.647 10.76-6.816"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.787 2.775c3.724 2.564 8.172 12.22.017 17.464M18.583 19.44c-.655.982-1.07 1.308-1.87 1.7"
    />
  </Svg>
);
export default IconlystFlatKiteLight;
