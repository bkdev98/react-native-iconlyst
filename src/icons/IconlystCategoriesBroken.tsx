import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCategoriesBroken = ({
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
      d="M14.598 3.436a3.18 3.18 0 0 0-3.214 0L5.84 6.687a1.6 1.6 0 0 0 0 2.76l5.545 3.25a3.18 3.18 0 0 0 3.214 0l5.545-3.25a1.6 1.6 0 0 0 0-2.76L17.37 5.062M9.768 11.75l-4.157 2.765a1.6 1.6 0 0 0 .078 2.71l2.847 1.67"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.383 20.563a3.18 3.18 0 0 0 3.214 0l5.674-3.327a1.6 1.6 0 0 0 .068-2.718l-4.186-2.735"
    />
  </Svg>
);
export default IconlystCategoriesBroken;
