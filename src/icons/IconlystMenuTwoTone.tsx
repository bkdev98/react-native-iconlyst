import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMenuTwoTone = ({
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
      d="M6.477 9.554V9.49m-.26.05a.26.26 0 1 1 .522 0 .26.26 0 0 1-.521 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.477 16.026v-.064m-.26.05a.26.26 0 1 1 .522 0 .26.26 0 0 1-.521 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.498 9.554V9.49m-.259.05a.26.26 0 1 1 .522 0 .26.26 0 0 1-.522 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.498 16.026v-.064m-.259.05a.26.26 0 1 1 .522 0 .26.26 0 0 1-.522 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.52 9.554V9.49m-.26.05a.26.26 0 1 1 .522 0 .26.26 0 0 1-.521 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.52 16.026v-.064m-.26.05a.26.26 0 1 1 .522 0 .26.26 0 0 1-.521 0"
    />
  </Svg>
);
export default IconlystMenuTwoTone;
