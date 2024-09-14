import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBatteryEectricityTwoTone = ({
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
      d="M17.75 6.756v-1.8a.9.9 0 0 1 .9-.9h.8a.9.9 0 0 1 .9.9v1.996M6.953 6.756v-1.8a.9.9 0 0 0-.9-.9h-.8a.9.9 0 0 0-.9.9v1.996"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.25 6.756h-1.578a2 2 0 0 1-1.52-.702l-.34-.396a2 2 0 0 0-1.52-.702h-4.083a2 2 0 0 0-1.522.702l-.338.396a2 2 0 0 1-1.521.702H5.25a2 2 0 0 0-2 2v7.7a3.49 3.49 0 0 0 3.488 3.488h11.024a3.49 3.49 0 0 0 3.488-3.488v-7.7a2 2 0 0 0-2-2"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.713 12.917h3M14.713 12.917h3m-1.5-1.5v3"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBatteryEectricityTwoTone;
