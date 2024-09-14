import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDropboxSquareTwoTone = ({
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
      d="M7.782 3h8.435C19.165 3 21 5.081 21 8.026v7.948C21 18.919 19.165 21 16.216 21H7.782C4.834 21 3 18.919 3 15.974V8.026C3 5.081 4.843 3 7.782 3"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.256 13.942c.376.24.857.24 1.233 0l8.005-5.095a.574.574 0 0 0 0-.968l-1.75-1.114a1.15 1.15 0 0 0-1.233 0L6.506 11.86a.574.574 0 0 0 0 .968z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.494 12.828a.574.574 0 0 0 0-.968L9.489 6.765a1.15 1.15 0 0 0-1.233 0L6.506 7.88a.574.574 0 0 0 0 .968l8.005 5.095c.376.24.857.24 1.233 0z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.201 14.125-.015 1.143a1.1 1.1 0 0 1-.601.965l-2.089 1.06a1.1 1.1 0 0 1-.995 0L9.428 16.24a1.1 1.1 0 0 1-.602-.995l.015-1.12"
    />
  </Svg>
);
export default IconlystDropboxSquareTwoTone;
