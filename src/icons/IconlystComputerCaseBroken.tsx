import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystComputerCaseBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.332 12V6.008A3.007 3.007 0 0 0 15.325 3h-5.65a3.007 3.007 0 0 0-3.007 3.007v11.987A3.006 3.006 0 0 0 9.674 21h5.652a3.007 3.007 0 0 0 3.006-3.006V15.51M10.147 11.193h4.71M10.147 7.68h4.71"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 17.426v-.044m0-.234a.23.23 0 1 0 0 .462.23.23 0 0 0 0-.462"
    />
  </Svg>
);
export default IconlystComputerCaseBroken;
