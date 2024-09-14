import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStickerTwoTone = ({
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
      d="M16.351 20.256a2.42 2.42 0 0 1-1.745.744H8.282C5.342 21 3.5 18.919 3.5 15.974V8.026C3.5 5.08 5.334 3 8.282 3h8.435C19.666 3 21.5 5.08 21.5 8.026v5.893a2.42 2.42 0 0 1-.674 1.676z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.176 20.928v-3.414a3.02 3.02 0 0 1 3.014-3.022h3.233"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystStickerTwoTone;
