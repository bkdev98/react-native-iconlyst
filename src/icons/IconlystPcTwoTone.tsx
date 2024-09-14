import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPcTwoTone = ({
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
      d="M19.556 6.703a3.764 3.764 0 0 0-3.688-3.015H7.262A3.76 3.76 0 0 0 3.5 7.451v5.095a3.76 3.76 0 0 0 3.762 3.762h3.843M6.916 19.96h4.853M9.558 16.304l-.595 3.657"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.326 9.499c1.2 0 2.172.973 2.173 2.174v6.466c0 1.2-.973 2.174-2.173 2.174h-3.314c-1.2 0-2.173-.973-2.173-2.174l-.001-6.466c0-1.2.974-2.174 2.174-2.174z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.67 17.673v.01"
    />
  </Svg>
);
export default IconlystPcTwoTone;
