import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTruck2TwoTone = ({
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
      d="M3.5 9.72h4.451M5.388 7.31h2.564"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.636 17.183h-.057A2.08 2.08 0 0 1 3.5 15.104v-2.512M9.469 17.183h5.31M16.697 15.267V6.98a2.08 2.08 0 0 0-2.08-2.08H3.5M18.613 17.183h.808a2.08 2.08 0 0 0 2.079-2.079v-3.443c0-.936-.553-1.785-1.41-2.162L16.698 8"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.098 12.411h2.4"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.47 17.183a1.917 1.917 0 1 0-3.833 0 1.917 1.917 0 0 0 3.833 0M18.613 17.183a1.917 1.917 0 1 0-3.834 0 1.917 1.917 0 0 0 3.834 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTruck2TwoTone;
