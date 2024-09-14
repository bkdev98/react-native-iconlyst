import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystApricotTwoTone = ({
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
      d="M13.916 9.705c-1.013-1.592-2.569-2.61-4.314-2.61-3.051 0-5.524 3.112-5.524 6.952S6.551 21 9.602 21c1.745 0 3.301-1.02 4.314-2.61"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.034 7.761a4.6 4.6 0 0 1 2.364-.667c3.05 0 5.524 3.113 5.524 6.953S17.449 21 14.398 21c-.846 0-1.647-.24-2.364-.667"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M12.181 7.817c-.198-1.114-1.135-3.487-3.294-4.072M16.572 3.02s.567 4.11-4.294 4.091c-.407-4.63 4.294-4.092 4.294-4.092" />
    </G>
  </Svg>
);
export default IconlystApricotTwoTone;
