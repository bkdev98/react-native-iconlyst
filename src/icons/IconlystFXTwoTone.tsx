import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFXTwoTone = ({
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
      d="M21.5 8.025v7.948c0 2.944-1.843 5.021-4.788 5.021H8.278c-2.945 0-4.778-2.077-4.778-5.021V8.025c0-2.945 1.843-5.021 4.778-5.021h8.434c2.945 0 4.788 2.076 4.788 5.02"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.916 14.735V9.262h2.779M7.916 12h2.512M13.2 14.733l2.08-2.737M15.28 11.999l2.08-2.737M15.28 11.999 13.2 9.262M15.28 12l2.08 2.737"
    />
  </Svg>
);
export default IconlystFXTwoTone;
