import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSortsCompleteBroken = ({
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
      d="m4 17.575 1.455 1.455 2.424-2.425M4 11.759l1.455 1.454 2.424-2.424M4 5.938l1.455 1.455 2.424-2.424M11.273 18.059h8.728M16.466 12.242H20M11.273 12.242h2.182M11.273 6.422h8.728"
    />
  </Svg>
);
export default IconlystSortsCompleteBroken;
