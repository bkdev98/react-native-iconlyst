import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTwoWayDirectionTwoTone = ({
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
      d="M8.283 21h8.435c2.94 0 4.782-2.081 4.782-5.026V8.026C21.5 5.081 19.666 3 16.718 3H8.284C5.335 3 3.5 5.081 3.5 8.026v7.948C3.5 18.919 5.335 21 8.283 21"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.499 16.164v-3.716a3.034 3.034 0 0 0-3.034-3.034h-2.15"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.903 7.832 7.315 9.42l1.588 1.588M12.502 16.164v-3.716a3.034 3.034 0 0 1 3.034-3.034h2.149"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.098 7.832 1.588 1.588-1.588 1.588"
    />
  </Svg>
);
export default IconlystTwoWayDirectionTwoTone;
