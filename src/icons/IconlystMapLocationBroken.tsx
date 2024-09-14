import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMapLocationBroken = ({
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
      d="M15.889 5.586v3.462M20.553 17.947c-.93 1.576-2.507 2.754-2.907 2.754-.577 0-3.604-2.451-3.604-5.016a3.604 3.604 0 0 1 7.128-.757"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.645 15.772v-.116"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.078 9.371V4.776c0-.753-.77-1.253-1.455-.945l-3.525 1.567c-.353.157-.754.17-1.117.04L9.35 3.39a1.5 1.5 0 0 0-1.116.038L4.379 5.141A1.9 1.9 0 0 0 3.25 6.877v3.135M11.492 19.539l-2.142-.78a1.5 1.5 0 0 0-1.117.038l-3.53 1.567a1.033 1.033 0 0 1-1.453-.945v-6.27M8.784 18.668V6.966"
    />
  </Svg>
);
export default IconlystMapLocationBroken;
