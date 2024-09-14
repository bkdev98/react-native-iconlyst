import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBoldTypeLight = ({
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
      d="M8.282 3.766h8.435c2.948 0 4.783 2.081 4.783 5.026v7.947c0 2.945-1.835 5.027-4.784 5.027H8.282c-2.948 0-4.782-2.082-4.782-5.027V8.792c0-2.945 1.843-5.026 4.782-5.026"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.154 8.875h2.508c1.016 0 1.924.743 2.02 1.755a1.946 1.946 0 0 1-1.936 2.137h-2.592z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.154 12.766h3.205c1.017 0 1.924.743 2.021 1.755a1.946 1.946 0 0 1-1.936 2.137h-3.29z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBoldTypeLight;
