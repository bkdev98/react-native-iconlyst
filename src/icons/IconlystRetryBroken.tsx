import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRetryBroken = ({
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
      d="M12.982 15.7v-.04M12.977 8.342v4.26M3.98 17.851l2.534.586.583-2.519M21.98 6.148l-2.534-.585-.583 2.518"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.519 18.17a8.94 8.94 0 0 1-1.885-9.488M6.604 5.672a8.92 8.92 0 0 1 7.922-2.5M19.44 5.83a8.94 8.94 0 0 1 1.893 9.466M19.355 18.328a8.92 8.92 0 0 1-7.921 2.5"
    />
  </Svg>
);
export default IconlystRetryBroken;
