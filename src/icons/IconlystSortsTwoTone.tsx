import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSortsTwoTone = ({
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
      d="M11.208 17.836h8.727M11.208 12h8.727M11.208 6.184h8.727"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.15 18.904a1.085 1.085 0 1 0 0-2.17 1.085 1.085 0 0 0 0 2.17M6.15 13.084a1.085 1.085 0 1 0 0-2.17 1.085 1.085 0 0 0 0 2.17M6.15 7.267a1.085 1.085 0 1 0 0-2.17 1.085 1.085 0 0 0 0 2.17"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSortsTwoTone;
