import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanSliderBroken = ({
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
      d="M11.367 3v18M14.76 4.086h1.445c2.59 0 4.208 1.83 4.208 4.422v3.494M20.413 15.496c0 2.583-1.617 4.414-4.208 4.414H14.76M11.37 19.91H8.788c-2.592 0-4.2-1.83-4.2-4.414v-3.494M4.588 8.508c0-2.592 1.617-4.422 4.2-4.422h2.582"
    />
  </Svg>
);
export default IconlystScanSliderBroken;
