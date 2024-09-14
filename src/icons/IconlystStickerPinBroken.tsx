import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStickerPinBroken = ({
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
      d="M15.851 20.256a2.42 2.42 0 0 1-1.746.744H7.782C4.842 21 3 18.919 3 15.974V8.026C3 5.08 4.834 3 7.782 3h8.434C19.166 3 21 5.08 21 8.026v5.893a2.42 2.42 0 0 1-.674 1.676z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.676 20.928v-3.414a3.02 3.02 0 0 1 3.014-3.022M10.165 13.075v2.032m-1.346-8.13a1.081 1.081 0 0 0-.752 1.858s.495.372.573.556c.1.233.114.789 0 1.015-.115.23-.823.617-.823.617-.43.322-.681.827-.681 1.363 0 .38.307.688.687.688h4.683c.38 0 .688-.307.688-.688 0-.536-.254-1.04-.683-1.363 0 0-.707-.386-.822-.617-.114-.226-.099-.782 0-1.015.078-.184.573-.556.573-.556a1.081 1.081 0 0 0-.752-1.858"
    />
  </Svg>
);
export default IconlystStickerPinBroken;
