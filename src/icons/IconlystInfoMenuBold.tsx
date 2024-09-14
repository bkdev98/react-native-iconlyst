import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInfoMenuBold = ({
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
      d="M11.957 9.047a1.01 1.01 0 0 1-1.011-1.011 1.012 1.012 0 0 1 2.022 0c0 .558-.454 1.011-1.011 1.011m0 3.9a1.013 1.013 0 0 1-1.011-1.011 1.012 1.012 0 0 1 2.022 0c0 .557-.454 1.011-1.011 1.011m0 3.901a1.012 1.012 0 0 1 0-2.022 1.012 1.012 0 0 1 0 2.022M12 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystInfoMenuBold;
