import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGasCanTwoTone = ({
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
      d="M12.958 6.387h3.757"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.742 21H7.758a2.99 2.99 0 0 1-2.988-2.989v-7.944c0-.88.387-1.715 1.059-2.283l4.553-3.85a3 3 0 0 1 1.93-.705h4.43a2.99 2.99 0 0 1 2.989 2.988v11.794A2.99 2.99 0 0 1 16.742 21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.706 4.473 8.64 3.41a1.395 1.395 0 0 0-1.887-.08L5.394 4.48a1.395 1.395 0 0 0-.086 2.051l.891.892"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.081 18.115c-1.547 0-2.245-1.72-1.576-2.766.622-.894 1.576-1.511 1.576-1.511s.954.617 1.576 1.511c.67 1.047-.028 2.766-1.576 2.766M9.564 13.57c-1.136 0-1.649-1.262-1.158-2.03.457-.657 1.158-1.11 1.158-1.11s.7.453 1.157 1.11c.491.768-.021 2.03-1.157 2.03"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystGasCanTwoTone;
