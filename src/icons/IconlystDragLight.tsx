import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDragLight = ({
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
      d="M19.138 11.672c.957 2.583.015 6.002-1.662 7.679-2.14 2.14-8.12 2.302-10.077-.132-1.243-1.545-2.208-3.42-2.817-5.1-.326-.901.153-1.873 1.048-2.216a1.84 1.84 0 0 1 2.17.672l1.202 1.745V4.68a1.68 1.68 0 0 1 3.361-.025l.067 4.347c2.351.225 5.757.103 6.708 2.67M5.5 4 4 5.5 5.5 7M19 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12.5 5.5H16M4 5.5h5"
    />
  </Svg>
);
export default IconlystDragLight;