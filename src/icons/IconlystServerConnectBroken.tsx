import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerConnectBroken = ({
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
      d="M13 4.549H5.44C4.01 4.549 3 5.439 3 6.87v2.555c0 1.432 1.01 2.32 2.44 2.32h13.12c1.43 0 2.44-.888 2.44-2.32V6.87c0-1.427-1.01-2.321-2.44-2.321h-2.28M11.247 8.148H6.69"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.634 17.815a1.635 1.635 0 1 1-3.27 0 1.635 1.635 0 0 1 3.27 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.352 17.817H13.61m-3.231 0H5.646M12 16.177v-4.355"
    />
  </Svg>
);
export default IconlystServerConnectBroken;
