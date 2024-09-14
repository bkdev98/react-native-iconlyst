import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNaxtBold = ({
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
      d="M5.913 18.226c.44.252.94.378 1.459.378.454 0 .923-.097 1.379-.29 2.212-.916 4.179-2.162 5.844-3.702.795-.727 1.235-1.65 1.238-2.595.004-.951-.435-1.883-1.236-2.626l-.002-.003a19.9 19.9 0 0 0-5.85-3.703c-1.048-.417-2.07-.381-2.882.099-.78.46-1.278 1.283-1.407 2.325-.275 2.703-.274 5.326.002 7.805.134 1.03.65 1.852 1.455 2.312M18.75 18.468a1 1 0 0 1-1-1V6.533a1 1 0 0 1 2 0v10.935a1 1 0 0 1-1 1"
    />
  </Svg>
);
export default IconlystNaxtBold;
