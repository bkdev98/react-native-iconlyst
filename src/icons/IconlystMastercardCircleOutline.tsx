import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMastercardCircleOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.783 9.969a2.03 2.03 0 0 0-2.033 2.025c0 1.119.914 2.033 2.033 2.033.661 0 1.25-.32 1.614-.813l.007-.009a2.016 2.016 0 0 0-.003-2.427 2.01 2.01 0 0 0-1.618-.81M6.25 11.994a3.531 3.531 0 0 1 6.35-2.118v.001a3.516 3.516 0 0 1 0 4.234 3.5 3.5 0 0 1-2.817 1.416 3.54 3.54 0 0 1-3.533-3.533"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.225 9.969c-.664 0-1.254.316-1.626.81a.75.75 0 0 1-1.198-.903 3.53 3.53 0 0 1 2.824-1.407 3.524 3.524 0 0 1 3.525 3.525 3.524 3.524 0 0 1-3.525 3.525c-1.152 0-2.18-.551-2.824-1.407a.75.75 0 0 1 1.198-.903c.372.494.962.81 1.626.81a2.024 2.024 0 1 0 0-4.05"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMastercardCircleOutline;
