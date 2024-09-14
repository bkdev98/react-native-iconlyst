import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdaCardanoLight = ({
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
      d="M17.849 15.109a.535.535 0 1 0-1.07 0 .535.535 0 0 0 1.07 0M17.849 8.556a.535.535 0 1 1-1.07 0 .535.535 0 0 1 1.07 0M6.217 15.107a.535.535 0 1 1 1.07 0 .535.535 0 0 1-1.07 0M6.217 8.556a.535.535 0 1 0 1.07 0 .535.535 0 0 0-1.07 0M3.543 11.832a.535.535 0 1 1 1.07 0 .535.535 0 0 1-1.07 0M20.523 11.832a.535.535 0 1 0-1.07 0 .535.535 0 0 0 1.07 0M12.568 17.648a.535.535 0 1 1-1.07 0 .535.535 0 0 1 1.07 0M7.555 18.383a.535.535 0 1 1 1.07 0 .535.535 0 0 1-1.07 0M16.513 18.383a.535.535 0 1 0-1.07 0 .535.535 0 0 0 1.07 0M7.555 5.28a.535.535 0 1 0 1.07 0 .535.535 0 0 0-1.07 0M16.513 5.28a.535.535 0 1 1-1.07.001.535.535 0 0 1 1.07 0M12.568 6.351a.535.535 0 1 1-1.07 0 .535.535 0 0 1 1.07 0M10.964 14.774a.669.669 0 1 1-1.337 0 .669.669 0 0 1 1.337 0M14.173 14.774a.669.669 0 1 1-1.337 0 .669.669 0 0 1 1.337 0M9.427 11.965a.669.669 0 1 1-1.337 0 .669.669 0 0 1 1.337 0M15.779 11.965a.669.669 0 1 1-1.338 0 .669.669 0 0 1 1.337 0M10.964 9.225a.669.669 0 1 1-1.337 0 .669.669 0 0 1 1.337 0M14.173 9.225a.669.669 0 1 1-1.337 0 .669.669 0 0 1 1.337 0M11.914 20.989V21m0-18v.011M4.129 16.494l-.01.006m15.589-9-.01.006m0 8.988.01.006m-15.589-9 .01.006"
    />
  </Svg>
);
export default IconlystAdaCardanoLight;
