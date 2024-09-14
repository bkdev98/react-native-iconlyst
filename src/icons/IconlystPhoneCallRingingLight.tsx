import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallRingingLight = ({
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
      d="M11.13 12.874c3.706 3.705 4.808-.843 7.168 1.515 2.276 2.276 3.583 2.73.702 5.613-.362.29-2.656 3.781-10.718-4.279C.219 7.663 3.707 5.366 3.997 5.005c2.89-2.89 3.338-1.574 5.613.7 2.36 2.36-2.186 3.464 1.52 7.17"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.861 5.04V3m3.65 3.49 1.442-1.443m.007 5.091H21"
    />
  </Svg>
);
export default IconlystPhoneCallRingingLight;
