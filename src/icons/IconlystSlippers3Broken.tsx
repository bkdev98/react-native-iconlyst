import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSlippers3Broken = ({
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
      d="M4.802 18.088c.348 1.704 1.957 2.717 3.536 2.55 1.58-.164 2.943-1.49 2.93-3.228-.016-2.312-.093-6.619-.093-6.619a3.849 3.849 0 0 0-7.654.803s.35 1.805.72 3.688"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.791 13.138 2.3-1.298 1.184.952m-1.173-.953-.092-.884M19.879 15.445c-.426 1.686-2.08 2.626-3.65 2.385-1.57-.236-2.871-1.621-2.779-3.358.123-2.31.397-6.608.397-6.608a3.847 3.847 0 0 1 4.38-3.227 3.847 3.847 0 0 1 3.229 4.38s-.467 1.933-.943 3.874"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.117 10.456-2.239-1.403-1.226.897m1.216-.899.134-.878"
    />
  </Svg>
);
export default IconlystSlippers3Broken;
