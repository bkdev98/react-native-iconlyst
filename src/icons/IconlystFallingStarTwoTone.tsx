import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFallingStarTwoTone = ({
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
      d="m7.674 8.947 2.248 1.721c.222.17.513.22.779.133l2.726-.875a.84.84 0 0 1 1.054 1.085l-.98 2.667a.83.83 0 0 0 .105.778l1.654 2.288a.852.852 0 0 1-.725 1.34l-2.851-.071a.87.87 0 0 0-.715.348l-1.703 2.29a.852.852 0 0 1-1.502-.256l-.78-2.712a.83.83 0 0 0-.548-.563l-2.706-.872a.84.84 0 0 1-.205-1.497l2.37-1.608a.85.85 0 0 0 .376-.695l.031-2.833a.86.86 0 0 1 1.372-.668"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.459 3-2.985 2.986M19.4 4.803 17.991 6.21M21.08 9.781l-3.183 3.183"
    />
  </Svg>
);
export default IconlystFallingStarTwoTone;
