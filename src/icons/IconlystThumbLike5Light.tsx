import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbLike5Light = ({
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
      d="M3.733 8.477c1.037 0 1.555 0 1.952.198.364.182.66.478.842.842.198.397.198.915.198 1.952v6.038c0 1.036 0 1.554-.198 1.952-.182.364-.478.66-.842.842-.397.198-.915.198-1.952.198M6.727 9.732c1.43 0 3.602-1.51 4.448-5.31.108-.488.233-.727.75-.922 3.656 0 2.899 5.03 2.067 6.389h2.616c3.878 0 3.657 3.014 3.657 5.99 0 2.85-1.831 4.569-4.49 4.569h-4.596c-1.542 0-3.066-.942-4.452-1.516"
    />
  </Svg>
);
export default IconlystThumbLike5Light;
