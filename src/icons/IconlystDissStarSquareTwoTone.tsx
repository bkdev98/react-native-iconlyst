import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDissStarSquareTwoTone = ({
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
      d="M8.282 3h8.435C19.665 3 21.5 5.081 21.5 8.026v7.948c0 2.945-1.835 5.026-4.784 5.026H8.282C5.334 21 3.5 18.919 3.5 15.974V8.026C3.5 5.081 5.343 3 8.282 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.178 9.716-.983-1.948a.67.67 0 0 0-1.183 0l-.985 1.948a.66.66 0 0 1-.498.354l-2.2.314a.642.642 0 0 0-.367 1.105l1.593 1.516a.64.64 0 0 1 .19.573l-.254 1.447m7.751-3.536-1.59 1.515a.64.64 0 0 0-.19.574l.376 2.14a.656.656 0 0 1-.547.75.67.67 0 0 1-.415-.068l-1.964-1.01"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.146 4.357 4.856 19.644"
    />
  </Svg>
);
export default IconlystDissStarSquareTwoTone;
