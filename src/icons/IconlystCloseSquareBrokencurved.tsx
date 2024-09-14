import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloseSquareBrokencurved = ({
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
      d="m14.64 10.13-4.79 4.792M14.65 14.928l-4.8-4.8M15.822 21.5c4.187-.802 5.678-3.391 5.678-8.965 0-6.937-2.31-9.25-9.25-9.25S3 5.598 3 12.535s2.31 9.25 9.25 9.25"
    />
  </Svg>
);
export default IconlystCloseSquareBrokencurved;
