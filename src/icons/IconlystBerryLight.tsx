import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBerryLight = ({
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
      d="M8.543 11.436a3.64 3.64 0 0 1 1.66-2.125l3.975-2.295c1.728-.997 4-.38 4.992 1.338 1.353 2.343 1.574 5.04.882 7.623-.579 2.16-2.868 3.48-5.027 2.9-.85-.229-1.55-.54-2.303-.95M16.703 12.962l.27.27M16.654 9.903l.27.269M13.712 11.288l.268.268M16.02 15.703l.27.268"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.502 3.506c-.696 1.589-.094 2.686.294 3.036-.37-.207-1.51-.327-3.119.845.616 1.065 2.597 2.461 5.514.777C15.02 6.53 14.891 4.066 14.275 3c-1.82.808-2.285 1.856-2.291 2.279-.11-.511-.758-1.581-2.482-1.773"
    />
    <Circle
      cx={8.263}
      cy={16.302}
      r={4.697}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.554 14.238a1.53 1.53 0 0 0 0 1.282 1.53 1.53 0 0 0-1.281 0 1.53 1.53 0 0 0 0-1.282c.407.187.875.187 1.281 0"
    />
  </Svg>
);
export default IconlystBerryLight;
