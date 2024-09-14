import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPointingLeftLight = ({
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
      d="M11.672 19.139c2.583.957 6.002.015 7.679-1.662 2.14-2.14 2.302-8.12-.132-10.077-1.545-1.243-3.42-2.208-5.1-2.817-.901-.326-1.873.153-2.216 1.048a1.84 1.84 0 0 0 .672 2.17l1.745 1.202H4.68a1.68 1.68 0 0 0-.025 3.361l4.347.067c.225 2.352.103 5.757 2.67 6.708"
    />
  </Svg>
);
export default IconlystPointingLeftLight;
