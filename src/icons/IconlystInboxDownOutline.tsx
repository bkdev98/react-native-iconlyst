import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInboxDownOutline = ({
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
      fill={props.color}
      d="M16.678 22.175H8.422c-3.249 0-5.432-2.286-5.432-5.687V8.681c0-3.4 2.183-5.687 5.432-5.687a.75.75 0 1 1 0 1.5c-2.388 0-3.932 1.644-3.932 4.187v7.807c0 2.543 1.544 4.187 3.932 4.187h8.256c2.39 0 3.933-1.644 3.933-4.187V8.681c0-2.543-1.543-4.187-3.932-4.187a.75.75 0 0 1 0-1.5c3.25 0 5.432 2.286 5.432 5.687v7.807c0 3.401-2.183 5.687-5.433 5.687"
    />
    <Path
      fill={props.color}
      d="M12.55 17.329a3.59 3.59 0 0 1-3.236-2.014 1.53 1.53 0 0 0-1.375-.856H3.75a.75.75 0 1 1 0-1.5h4.19a3.01 3.01 0 0 1 2.719 1.692 2.108 2.108 0 0 0 3.784 0 3.02 3.02 0 0 1 2.719-1.691h4.188a.75.75 0 1 1 0 1.5h-4.19a1.52 1.52 0 0 0-1.374.856 3.59 3.59 0 0 1-3.236 2.013M12.74 11.355a.75.75 0 0 1-.522-.21l-2.746-2.66a.75.75 0 0 1 1.044-1.078l2.224 2.154 2.226-2.154a.75.75 0 0 1 1.043 1.078l-2.747 2.66a.75.75 0 0 1-.522.21"
    />
    <Path
      fill={props.color}
      d="M12.74 11.351a.75.75 0 0 1-.75-.75V3.363a.75.75 0 0 1 1.5 0V10.6a.747.747 0 0 1-.75.751"
    />
  </Svg>
);
export default IconlystInboxDownOutline;
