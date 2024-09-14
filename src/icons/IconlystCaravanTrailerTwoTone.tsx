import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCaravanTrailerTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.083 20.21a2.22 2.22 0 1 1 0-4.44 2.22 2.22 0 0 1 0 4.44"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.397 17.99h10.945l.908 1.758"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.644 9.556v2.545c0 .271.22.491.491.491h2.78c.271 0 .491-.22.491-.491V9.556a.49.49 0 0 0-.491-.491h-2.78a.49.49 0 0 0-.491.491M12.974 17.99v-7.583c0-.293.238-.531.531-.531h3.004c.294 0 .532.238.532.531v7.583"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.814 17.99H4.375a2.125 2.125 0 0 1-2.117-2.306l.7-8.18a2.125 2.125 0 0 1 2.117-1.945h12.868c1.173 0 2.125.952 2.125 2.126v10.24"
    />
  </Svg>
);
export default IconlystCaravanTrailerTwoTone;
