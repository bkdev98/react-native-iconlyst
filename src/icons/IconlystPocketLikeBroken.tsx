import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPocketLikeBroken = ({
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
      d="M17.36 7.05V4.652c0-1.08-1.018-1.87-2.064-1.6L6.561 5.307a1.436 1.436 0 0 0-1.076 1.389v.593m0 0v11.567c0 1.185.96 2.144 2.145 2.144h1.644M5.485 7.289h11.838c1.185 0 2.144.959 2.144 2.144v9.423c0 1.185-.96 2.144-2.144 2.144h-4.847"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.477 16.912s-2.239-1.219-2.761-2.843c-.324-1.014.054-2.171 1.119-2.515a1.82 1.82 0 0 1 1.642.276 1.83 1.83 0 0 1 1.64-.276c1.063.344 1.445 1.501 1.12 2.515-.155.495-.478.956-.849 1.355"
    />
  </Svg>
);
export default IconlystPocketLikeBroken;
