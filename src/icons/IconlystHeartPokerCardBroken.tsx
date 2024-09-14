import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartPokerCardBroken = ({
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
      d="M15 21a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h3M16 6v.01M8 18v.01"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12 15.395-.357-.272C10.281 14.005 8.1 12.751 8.3 10.712c.144-1.353 1.416-2.319 2.778-1.836.353.124.673.34.922.618.19-.213.42-.388.675-.514 1.292-.64 2.79.165 3.01 1.6.192 1.331-.653 2.343-1.645 3.197"
    />
  </Svg>
);
export default IconlystHeartPokerCardBroken;
