import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlayCircleLight = ({
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
      d="M21 12a9 9 0 1 0-18 0 9 9 0 0 0 18 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.532 13.144a9.9 9.9 0 0 1-2.905 1.839c-.937.372-1.723-.093-1.837-1.025a18.5 18.5 0 0 1 0-3.919c.125-.97.99-1.382 1.838-1.022a9.7 9.7 0 0 1 2.904 1.84c.723.661.74 1.6 0 2.287"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlayCircleLight;
