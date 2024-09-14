import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTruck2Light = ({
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
      d="M5.136 17.183h-.057A2.08 2.08 0 0 1 3 15.104v-2.512"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.97 17.183a1.917 1.917 0 1 0-3.833 0 1.917 1.917 0 0 0 3.833 0M18.113 17.183a1.917 1.917 0 1 0-3.834 0 1.917 1.917 0 0 0 3.834 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.969 17.183h5.31M16.197 15.267V6.98a2.08 2.08 0 0 0-2.08-2.08H3M3 9.72h4.451M4.888 7.31h2.564M18.113 17.183h.808A2.08 2.08 0 0 0 21 15.104v-3.443c0-.936-.553-1.785-1.41-2.162L16.198 8M18.598 12.411h2.4"
    />
  </Svg>
);
export default IconlystTruck2Light;