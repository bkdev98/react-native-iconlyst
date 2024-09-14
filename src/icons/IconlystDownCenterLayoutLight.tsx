import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownCenterLayoutLight = ({
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
      d="M8.283 21.766h8.435c2.948 0 4.782-2.08 4.782-5.027V8.792c0-2.945-1.834-5.026-4.783-5.026H8.283c-2.948 0-4.783 2.08-4.783 5.026v7.947c0 2.946 1.844 5.027 4.783 5.027M8.852 13.496h7.297m-5.614 4.379h3.368"
    />
  </Svg>
);
export default IconlystDownCenterLayoutLight;
