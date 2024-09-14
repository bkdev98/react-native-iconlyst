import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeadlightsLeftStopLight = ({
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
      d="M3.25 6.885h4.5M3.25 10.885h4.5M3.25 14.885h4.5M3.25 18.885h4.5M5.5 19.877a6.35 6.35 0 0 1 0-6.992 6.35 6.35 0 0 0 0-6.992M11.194 12.802c.05-1.535.194-3.089.735-4.566.202-.552.463-1.068.843-1.502.441-.509.981-.736 1.621-.71 1.108.043 2.153.348 3.157.854 1.212.613 2.167 1.54 2.842 2.791 1.172 2.178 1.13 4.367-.043 6.527-.747 1.378-1.864 2.294-3.198 2.906-.862.394-1.77.569-2.699.639-.889.069-1.541-.362-2.015-1.14-.46-.755-.725-1.603-.908-2.48-.227-1.08-.304-2.179-.334-3.32z"
    />
  </Svg>
);
export default IconlystHeadlightsLeftStopLight;
