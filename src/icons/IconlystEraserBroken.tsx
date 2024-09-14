import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEraserBroken = ({
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
      d="M15.948 20.547h4.182m.862 0L8.07 20.524a2.6 2.6 0 0 1-1.835-.766l-2.441-2.462a2.71 2.71 0 0 1 0-3.834l9.272-9.272a2.513 2.513 0 0 1 3.553 0l1.253 1.253"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.222 20.431 9.042-9.042a2.514 2.514 0 0 0 0-3.555M10.627 11.162l4.931 4.931"
    />
  </Svg>
);
export default IconlystEraserBroken;
