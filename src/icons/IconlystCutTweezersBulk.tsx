import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCutTweezersBulk = ({
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
      d="M9.35 8.1c-.01 0-.01.01-.01.01-.04.05-.08.11-.14.16v.01a1.35 1.35 0 0 1-2.33-.93c0-.74.61-1.35 1.35-1.35a1.357 1.357 0 0 1 1.13 2.1m11.13 9.01L14.97 12l-3.65-3.38c.16-.39.25-.82.25-1.27 0-1.84-1.5-3.35-3.35-3.35S4.87 5.51 4.87 7.35a3.35 3.35 0 0 0 5.17 2.81L12.02 12l7.1 6.58c.19.18.43.26.68.26.27 0 .53-.1.73-.32.38-.4.35-1.03-.05-1.41"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.22 18.002c-.74 0-1.35-.6-1.35-1.35 0-.74.61-1.35 1.35-1.35.45 0 .85.22 1.1.57a1.35 1.35 0 0 1-1.1 2.13m5.28-4.63-1.48-1.37-1.98 1.84c-.52-.34-1.15-.54-1.82-.54-1.85 0-3.35 1.51-3.35 3.35a3.35 3.35 0 1 0 6.45-1.27zM20.48 6.902l-5.51 5.1-1.47-1.36 5.62-5.21a.996.996 0 0 1 1.41.05c.38.41.35 1.04-.05 1.42"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCutTweezersBulk;
