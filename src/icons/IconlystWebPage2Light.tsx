import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPage2Light = ({
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
      d="M8.601 3h8.435c2.948 0 4.782 2.081 4.782 5.026v7.948c0 2.945-1.834 5.026-4.783 5.026H8.601c-2.948 0-4.783-2.081-4.783-5.026V8.026C3.818 5.081 5.662 3 8.601 3M7.163 6.55h-.056m2.542 0h-.055m2.542 0h-.055M8.436 13.247h3.72m-3.72 3.445h6.821M21.818 9.491h-18"
    />
  </Svg>
);
export default IconlystWebPage2Light;
