import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorldShieldBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.458 20.461a8.744 8.744 0 0 1-8.03-8.721 8.72 8.72 0 0 1 3.048-6.632M12.168 3c4.465 0 8.14 3.346 8.667 7.667"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.406 10.849a20 20 0 0 0-.191-2.147C14.76 5.373 13.569 3 12.168 3c-1.391 0-2.592 2.373-3.046 5.702-.137.946-.21 1.965-.21 3.038s.073 2.1.21 3.047c.318 2.31 1.3 4.538 2.337 5.674M5.99 11.75h5.783M21.046 17.246c0 2.755-3.3 3.754-3.3 3.754s-3.3-.998-3.3-3.754-.12-2.669.144-2.934c.266-.265 2.723-1.122 3.156-1.122s3.154 1.122 3.154 1.122"
    />
  </Svg>
);
export default IconlystWorldShieldBroken;
