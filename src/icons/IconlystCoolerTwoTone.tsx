import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoolerTwoTone = ({
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
      d="m7.29 15.665.796-2.013a1.41 1.41 0 0 1 1.312-.892h6.176c.579 0 1.1.353 1.313.892l.795 2.013"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.685 7.14h-1.82"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.425 17.922v2.258M15.066 17.923a2.26 2.26 0 0 0 2.259 2.257M9.648 17.923A2.26 2.26 0 0 1 7.39 20.18"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M21.192 12.744c-.265 1.384-1.056 2.585-3.302 2.891-.477.09-4.113.115-5.493.116s-4.663 0-5.481-.114c-2.136-.28-2.994-1.367-3.312-2.893a21.6 21.6 0 0 1 0-5.91c.195-.848.638-2.55 3.312-2.898.424-.081 3.45-.113 5.48-.116 2.16-.004 5.288.064 5.494.115 2.676.35 3.127 2.103 3.302 2.899.272 1.961.284 3.95 0 5.91Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCoolerTwoTone;
