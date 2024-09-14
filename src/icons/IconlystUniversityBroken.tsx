import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUniversityBroken = ({
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
      d="m17.216 5.762-4.1-2.646a.73.73 0 0 0-.79 0L4.126 8.41a.73.73 0 0 0-.334.613v.575c0 .402.327.73.73.73h16.395a.73.73 0 0 0 .73-.73v-.575a.73.73 0 0 0-.333-.613l-2.05-1.323M12.72 7.264v.01M12.721 21h8.458a.51.51 0 0 0 .497-.62l-.387-1.755a.51.51 0 0 0-.498-.4H4.65a.51.51 0 0 0-.499.4l-.387 1.756a.51.51 0 0 0 .499.62h5.065M14.978 12.913v5.312m4.514-7.899v7.9M5.948 13.337v4.887m4.514-7.899v7.9"
    />
  </Svg>
);
export default IconlystUniversityBroken;
