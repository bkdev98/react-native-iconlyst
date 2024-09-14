import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPocketLikeLight = ({
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
      d="M17.86 7.05V4.652c0-1.08-1.018-1.87-2.064-1.6L7.061 5.307a1.436 1.436 0 0 0-1.076 1.389v12.16c0 1.185.96 2.144 2.145 2.144h9.693c1.185 0 2.144-.96 2.144-2.145V9.433c0-1.185-.96-2.144-2.144-2.144H5.985"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.216 14.07c-.324-1.015.054-2.172 1.119-2.516a1.82 1.82 0 0 1 1.642.276 1.83 1.83 0 0 1 1.64-.276c1.063.344 1.445 1.501 1.12 2.515-.505 1.606-2.76 2.843-2.76 2.843s-2.239-1.219-2.761-2.843"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPocketLikeLight;
