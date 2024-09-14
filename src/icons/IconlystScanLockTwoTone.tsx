import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanLockTwoTone = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.501 16.498v1.577a3.893 3.893 0 0 1-3.893 3.892H16.32M3.499 16.498v1.577a3.893 3.893 0 0 0 3.893 3.892h1.257M3.499 9.436V7.859a3.893 3.893 0 0 1 3.893-3.892h1.289M21.5 9.436V7.859a3.893 3.893 0 0 0-3.892-3.892H16.35"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.95 13.35a2.44 2.44 0 0 0 1.003-1.97 2.453 2.453 0 0 0-4.907 0c0 .81.397 1.523 1.002 1.97l-.76 2.285a1.04 1.04 0 0 0 .988 1.368h2.448c.709 0 1.21-.694.987-1.368z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScanLockTwoTone;
