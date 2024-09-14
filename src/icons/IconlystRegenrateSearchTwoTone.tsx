import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRegenrateSearchTwoTone = ({
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
      d="M19.536 12.71a7.915 7.915 0 1 1-8.502-8.61M17.04 17.787 20.26 21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.747 9.686.109-.294a4.04 4.04 0 0 1 2.387-2.39l.293-.109-.293-.108a4.04 4.04 0 0 1-2.387-2.391l-.109-.294-.108.294a4.04 4.04 0 0 1-2.387 2.39l-.293.11.293.108a4.04 4.04 0 0 1 2.387 2.39zM11.29 12.888a2.13 2.13 0 0 1 1.414-1.415 2.13 2.13 0 0 1-1.413-1.415 2.13 2.13 0 0 1-1.413 1.415 2.13 2.13 0 0 1 1.413 1.415"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystRegenrateSearchTwoTone;
