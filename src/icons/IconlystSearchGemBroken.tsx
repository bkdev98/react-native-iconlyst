import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchGemBroken = ({
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
      d="M19.937 12.485a8.45 8.45 0 0 1-16.305 1.824M3.19 10.229A8.45 8.45 0 0 1 10.508 3M17.309 17.571l3.437 3.43M20.888 4.96l-1.03-1.836h-4.122L14.708 4.96l3.09 3.433 1.545-1.717"
    />
  </Svg>
);
export default IconlystSearchGemBroken;
