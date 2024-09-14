import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPcBroken = ({
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
      d="M3.5 12.545a3.76 3.76 0 0 0 3.762 3.762h3.843M19.556 6.703a3.764 3.764 0 0 0-3.688-3.015H7.262A3.76 3.76 0 0 0 3.5 7.451v2.141M6.916 19.96h4.853M9.558 16.304l-.595 3.657M21.5 13.29v-1.617a2.175 2.175 0 0 0-2.174-2.174h-3.314c-1.2 0-2.174.974-2.174 2.174v6.466c0 1.2.974 2.174 2.175 2.174h3.313c1.2 0 2.173-.973 2.173-2.174v-1.617M17.67 17.673v.01"
    />
  </Svg>
);
export default IconlystPcBroken;
