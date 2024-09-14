import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMarkerRemoveTwoTone = ({
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
      d="M7.741 7.145A6.8 6.8 0 0 0 5.708 12a6.79 6.79 0 0 0 6.787 6.787 6.8 6.8 0 0 0 4.855-2.034"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.291 11.996H21.5M12.5 3v2.209M12.5 18.793v2.209M3.5 12h2.209"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.054 13.75a6.5 6.5 0 0 0 .239-1.75 6.795 6.795 0 0 0-6.797-6.797c-.605 0-1.191.083-1.75.238"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.085 10.488a2.068 2.068 0 0 0 1.41 3.581c.597 0 1.137-.246 1.522-.65"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.43 19.832 5.258 4.66"
    />
  </Svg>
);
export default IconlystMarkerRemoveTwoTone;
