import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerRack6Broken = ({
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
      d="M6.721 21a3.694 3.694 0 0 1 0-7.387H17.28a3.694 3.694 0 0 1 0 7.388H9.954M17.279 10.387a3.694 3.694 0 0 0 0-7.387H6.72a3.693 3.693 0 1 0 0 7.387h7.422M7.39 17.307h.523M7.39 6.693h.523M13.104 17.307h3.56M13.104 6.693h3.56"
    />
  </Svg>
);
export default IconlystServerRack6Broken;
