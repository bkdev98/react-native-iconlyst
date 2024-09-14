import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongUploadBroken = ({
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
      d="m13.07 14.207.755-6.266s.372 1.477 1.796 1.95M16.137 17.277l2.169-2.18 2.17 2.18M18.307 15.098v5.478M12.25 21a9 9 0 0 1-9-9c0-1.925.604-3.708 1.634-5.172M21.25 12A9 9 0 0 0 7.733 4.214"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.233 11.87a2.103 2.103 0 1 1-2.034.97"
    />
  </Svg>
);
export default IconlystSongUploadBroken;
