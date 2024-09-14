import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKelvinTemperatureTwoTone = ({
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
      d="M6.323 6v6.022c-1.208.913-2 2.347-2 3.978a5 5 0 0 0 10 0c0-1.63-.793-3.065-2-3.978V6a3 3 0 0 0-6 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.794 16a1.473 1.473 0 1 1-2.947 0 1.473 1.473 0 0 1 2.947 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.321 10.481v4.046M16.459 6.462v4.777M19.906 6.462l-3.441 2.864M19.906 11.239l-2.398-2.733M14.498 4.37v.041m.164-.032a.17.17 0 1 1-.34 0 .17.17 0 0 1 .34 0"
    />
  </Svg>
);
export default IconlystKelvinTemperatureTwoTone;
