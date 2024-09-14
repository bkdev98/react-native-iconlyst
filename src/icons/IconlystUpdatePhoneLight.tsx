import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpdatePhoneLight = ({
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
      d="M10.257 3H9.243a3.62 3.62 0 0 0-3.619 3.618l.001 10.764A3.62 3.62 0 0 0 9.243 21h5.515a3.617 3.617 0 0 0 3.618-3.619v-5.363"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.652 7.401h-1.8v1.675M18.378 3v1.8h-1.8"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.914 4.657a2.91 2.91 0 0 1 2.538-1.468c1.952 0 2.924 1.62 2.924 1.62M17.982 7.573a2.92 2.92 0 0 1-2.53 1.457c-1.61 0-2.6-1.62-2.6-1.62M12.4 17.33v-.048m0-.253a.25.25 0 1 0 0 .5.25.25 0 0 0 0-.5"
    />
  </Svg>
);
export default IconlystUpdatePhoneLight;
