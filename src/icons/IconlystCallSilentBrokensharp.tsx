import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallSilentBrokensharp = ({
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
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.304 15.705c-2.426-3.056-3.7-6.615-3.254-8.997.868-1.493 1.982-2.598 3.472-3.472l3.24 4.45-1.643 2.856M11.06 14.852c1.546 1.24 3.013 1.644 3.013 1.644l2.854-1.644 4.61 3.4c-.857 1.533-1.939 2.614-3.47 3.472-3.804.174-7.204-1.517-9.81-3.915M4.266 22.02 18.88 6.43"
    />
  </Svg>
);
export default IconlystCallSilentBrokensharp;
