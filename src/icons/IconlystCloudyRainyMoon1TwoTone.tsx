import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudyRainyMoon1TwoTone = ({
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
      d="M11.92 10.433c-1.49.013-2.696 1.015-2.696 2.72 0 1.105.657 2.055 1.601 2.482a3 3 0 0 0 1.094.223h6.437c.3 0 .698-.059 1.1-.22a2.72 2.72 0 0 0 1.599-2.484c0-1.706-1.205-2.708-2.696-2.721 0-1.073-.843-3.22-3.22-3.22s-3.218 2.147-3.218 3.22"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.475 14.65H6.52a3.9 3.9 0 0 1-1.407-.287 3.5 3.5 0 0 1-2.06-3.191c0-2.195 1.551-3.483 3.47-3.5 0-1.38 1.082-4.14 4.14-4.14 2.71 0 3.868 2.168 4.097 3.622"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.116 17.059-.829 1.451M11.905 18.1l-.829 1.45M19.323 18.1l-.648 1.135"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.08 19.018-.829 1.45M15.536 18.825l-.828 1.452"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCloudyRainyMoon1TwoTone;
