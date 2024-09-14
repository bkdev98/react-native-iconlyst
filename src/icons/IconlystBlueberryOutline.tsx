import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBlueberryOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M8.239 9.24a4.489 4.489 0 1 0 0 8.977 4.489 4.489 0 0 0 0-8.977M2.25 13.729a5.989 5.989 0 1 1 11.977 0 5.989 5.989 0 0 1-11.977 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.761 5.783a4.49 4.49 0 0 0-4.355 3.4.75.75 0 0 1-1.456-.363 5.989 5.989 0 1 1 3.14 6.812.75.75 0 0 1 .67-1.342 4.489 4.489 0 1 0 2.002-8.507M6.347 10.639a.75.75 0 0 1 .843-.151 2.25 2.25 0 0 0 1.877 0 .75.75 0 0 1 .995.995 2.25 2.25 0 0 0 0 1.877.75.75 0 0 1-.995.994 2.25 2.25 0 0 0-1.877 0 .75.75 0 0 1-.994-.994 2.25 2.25 0 0 0 0-1.877.75.75 0 0 1 .15-.844m1.547 1.547q.015.235 0 .47.234-.015.47 0a4 4 0 0 1 0-.47q-.236.015-.47 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.896 7.72a.75.75 0 0 1 .15.843.7.7 0 0 0 0 .582.75.75 0 0 1-.994.994.7.7 0 0 0-.581 0 .75.75 0 0 1-.995-.994.7.7 0 0 0 0-.582.75.75 0 0 1 .995-.994.7.7 0 0 0 .581 0 .75.75 0 0 1 .844.15"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBlueberryOutline;
