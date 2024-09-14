import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBallTennis1Bulk = ({
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
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M21.5 12c0 2.55-1 4.86-2.64 6.57-.35.36-.73.7-1.12 1.01A9.55 9.55 0 0 1 12 21.5c-2.15 0-4.14-.72-5.74-1.92-.39-.31-.77-.65-1.12-1.01A9.45 9.45 0 0 1 2.5 12c0-2.55 1-4.86 2.65-6.57.35-.36.72-.7 1.11-1A9.5 9.5 0 0 1 12 2.5c2.15 0 4.14.72 5.74 1.93.39.3.76.64 1.11 1A9.41 9.41 0 0 1 21.5 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.51 12c0 2.88-1.18 5.62-3.25 7.58-.39-.31-.77-.65-1.12-1.01A8.98 8.98 0 0 0 8.01 12c0-2.49-1.04-4.88-2.86-6.57.35-.36.72-.7 1.11-1C8.33 6.39 9.51 9.13 9.51 12M18.86 18.57c-.35.36-.73.7-1.12 1.01-2.07-1.96-3.25-4.7-3.25-7.58 0-2.87 1.18-5.61 3.25-7.57.39.3.76.64 1.11 1A8.98 8.98 0 0 0 15.99 12c0 2.5 1.05 4.88 2.87 6.57"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBallTennis1Bulk;
