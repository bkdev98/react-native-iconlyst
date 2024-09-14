import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSmilingBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M16.717 2.5H8.282C5.123 2.5 3 4.721 3 8.026v7.948C3 19.28 5.123 21.5 8.282 21.5h8.434c3.16 0 5.284-2.22 5.284-5.526V8.026C22 4.721 19.877 2.5 16.717 2.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.115 14.809c-.887 1.153-2.182 1.814-3.553 1.814-1.372 0-2.667-.661-3.552-1.814a.751.751 0 0 1 1.19-.914c.6.78 1.46 1.228 2.362 1.228s1.763-.448 2.364-1.228a.75.75 0 1 1 1.19.914"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSmilingBulk;
