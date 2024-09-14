import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOrbitOutline = ({
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
      d="M7.183 21.749c-1.28 0-2.37-.37-3.15-1.16-2.54-2.55-.77-8.31 4.05-13.13 4.81-4.81 10.58-6.59 13.12-4.05 2.54 2.55.77 8.31-4.05 13.13-3.33 3.33-7.11 5.21-9.97 5.21m10.86-18.01c-2.4 0-5.91 1.79-8.9 4.79-4.08 4.08-5.93 9.12-4.05 11 1.89 1.89 6.93.03 11-4.05 4.08-4.08 5.93-9.12 4.05-11-.5-.5-1.23-.74-2.1-.74"
    />
    <Path
      fill={props.color}
      d="M18.043 21.749c-2.86 0-6.64-1.88-9.97-5.21-4.81-4.81-6.59-10.58-4.05-13.13 2.54-2.54 8.31-.77 13.12 4.05 4.81 4.81 6.59 10.58 4.05 13.13-.79.78-1.88 1.16-3.15 1.16m-8.91-6.27c4.08 4.08 9.12 5.93 11 4.05 1.88-1.89.03-6.93-4.05-11s-9.12-5.93-11-4.05c-1.88 1.89-.03 6.92 4.05 11"
    />
    <Path
      fill={props.color}
      d="M12.613 14.879a2.88 2.88 0 1 1 .002-5.762 2.88 2.88 0 0 1-.002 5.762m0-4.26c-.76 0-1.38.62-1.38 1.38s.62 1.38 1.38 1.38 1.38-.62 1.38-1.38-.62-1.38-1.38-1.38"
    />
  </Svg>
);
export default IconlystOrbitOutline;
