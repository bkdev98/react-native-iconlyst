import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystComputerCaseLight = ({
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
      d="M17.832 6.007v11.987A3.007 3.007 0 0 1 14.825 21h-5.65a3.006 3.006 0 0 1-3.007-3.006V6.007A3.007 3.007 0 0 1 9.174 3h5.652a3.007 3.007 0 0 1 3.006 3.007M9.646 11.193h4.71M9.646 7.68h4.71"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 17.426v-.044m0-.234a.23.23 0 1 0 0 .462.23.23 0 0 0 0-.462"
    />
  </Svg>
);
export default IconlystComputerCaseLight;
