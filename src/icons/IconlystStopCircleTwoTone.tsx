import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStopCircleTwoTone = ({
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
      d="M21.5 11.999A9 9 0 0 0 12.5 3a9 9 0 1 0 9 8.999"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.776 9.273h-2.554c-.89 0-1.449.631-1.449 1.522v2.407c0 .892.556 1.522 1.45 1.522h2.553c.893 0 1.45-.63 1.45-1.522v-2.407c0-.891-.557-1.522-1.45-1.522"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStopCircleTwoTone;
