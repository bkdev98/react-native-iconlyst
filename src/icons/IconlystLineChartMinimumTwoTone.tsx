import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLineChartMinimumTwoTone = ({
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
      d="M20.5 20.12h-14a2 2 0 0 1-2-2v-14"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M20.01 7.539c-1.575 0-2.605 1.566-2.929 4.261-.188 1.566-1.201 3.387-3.228 3.387s-3.04-1.82-3.229-3.387C10.3 9.105 9.271 7.539 7.696 7.539"
    />
  </Svg>
);
export default IconlystLineChartMinimumTwoTone;
