import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClubPokerCardLight = ({
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
      d="M15 3H9a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4M16 6v.01M8 18v.01"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.973 13.47c.527.7 1.24.794 1.7.805a1.71 1.71 0 0 0 1.604-.943c.43-.87.01-1.97-.9-2.325a1.7 1.7 0 0 0-1.134-.038 1.71 1.71 0 0 0 .23-1.881 1.704 1.704 0 0 0-1.903-.87 1.7 1.7 0 0 0-1.22 1.165 1.72 1.72 0 0 0 .343 1.584c-.391-.1-.79-.103-1.169.06a1.71 1.71 0 0 0-.919 2.146 1.7 1.7 0 0 0 1.566 1.095c.487.001 1.329-.098 1.802-.798m0 0c0 1.965.004 2.408.004 2.408"
    />
  </Svg>
);
export default IconlystClubPokerCardLight;
