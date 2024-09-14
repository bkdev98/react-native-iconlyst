import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReloadSearchBroken = ({
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
      d="M4.583 17.1C1.77 13.008 2.807 7.403 6.897 4.59a9.01 9.01 0 0 1 12.384 2.113M21 12.007a9 9 0 0 1-3.907 7.406 9 9 0 0 1-9.587.387"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.266 3.275.2 3.408-3.388.2M11.728 8.687A2.964 2.964 0 1 1 9.39 9.829M13.746 13.823l1.493 1.49"
    />
  </Svg>
);
export default IconlystReloadSearchBroken;
