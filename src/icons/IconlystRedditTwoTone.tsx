import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRedditTwoTone = ({
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
      d="M7.281 10.444a2.32 2.32 0 0 0-1.97-1.085c-1.275 0-2.309 1.018-2.309 2.273 0 .851.476 1.593 1.18 1.982a4.3 4.3 0 0 0-.297 1.566c0 3.215 3.633 5.822 8.115 5.822 4.481 0 8.114-2.607 8.114-5.821 0-.543-.104-1.068-.297-1.567a2.27 2.27 0 0 0 1.18-1.982c0-1.255-1.034-2.273-2.31-2.273-.833 0-1.563.434-1.969 1.085C15.388 9.761 13.76 9.36 12 9.36c-1.76 0-3.39.402-4.719 1.085"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M18.176 5.993a1.497 1.497 0 1 0 0-2.993 1.497 1.497 0 0 0 0 2.993Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12 9.359.968-5.808a.5.5 0 0 1 .628-.4l3.105.873"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M14.958 16.262A4.8 4.8 0 0 1 12 17.293a4.8 4.8 0 0 1-2.959-1.031"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.47 13.066h-.008M14.543 13.066h-.008"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystRedditTwoTone;
