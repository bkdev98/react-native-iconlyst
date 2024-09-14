import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeadlightsLeftShortLight = ({
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
      d="m3.25 8.885 4.206-2M3.25 12.885l4.206-2M3.25 16.885l4.206-2M3.25 20.885l4.206-2M11.194 12.802c.05-1.535.194-3.089.735-4.566.202-.552.463-1.068.843-1.502.441-.509.981-.736 1.621-.71 1.108.043 2.153.348 3.157.854 1.212.613 2.167 1.54 2.842 2.791 1.172 2.178 1.13 4.367-.043 6.527-.747 1.378-1.864 2.294-3.198 2.906-.862.394-1.77.569-2.699.639-.889.069-1.541-.362-2.015-1.14-.46-.755-.725-1.603-.908-2.48-.227-1.08-.304-2.179-.334-3.32z"
    />
  </Svg>
);
export default IconlystHeadlightsLeftShortLight;
