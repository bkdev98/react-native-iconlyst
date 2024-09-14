import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIconTwoTone = ({
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
      d="M4.5 19.943v.05M5 20a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M20.5 4.007v.052M21 4a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.424 15.391a7.4 7.4 0 0 1-.686-3.175c0-4.259 3.465-7.722 7.74-7.722 1.12 0 2.202.234 3.159.685M19.444 8.84a7.6 7.6 0 0 1 .775 3.373 7.74 7.74 0 0 1-7.74 7.74c-1.21 0-2.364-.27-3.374-.775"
    />
  </Svg>
);
export default IconlystIconTwoTone;
