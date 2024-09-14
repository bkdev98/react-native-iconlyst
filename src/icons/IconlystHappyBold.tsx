import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHappyBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M15.275 10.001a.976.976 0 0 1-.976-.975.977.977 0 0 1 1.668-.687.975.975 0 0 1-.692 1.662M12 16.251c-1.931 0-2.631-1.771-2.631-2.962a.75.75 0 0 1 1.5 0c0 .015.012 1.462 1.131 1.462 1.116 0 1.129-1.447 1.129-1.462a.75.75 0 1 1 1.5 0c0 1.191-.701 2.962-2.629 2.962M7.799 9.026a.977.977 0 0 1 1.668-.687.975.975 0 1 1-1.668.687M12 2.5c-5.239 0-9.5 4.262-9.5 9.5s4.261 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHappyBold;
