import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReplay1Broken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.535 15.957 2.5 2.5-2.5 2.5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.035 18.459H10.45a7.4 7.4 0 0 1-4.033-1.186M3 10.7v.31c0 1.47.426 2.84 1.16 3.995M10.465 8.543l-2.5-2.5 2.5-2.5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.965 6.043h5.586c1.486 0 2.87.435 4.033 1.185M21 13.802v-.311c0-1.47-.425-2.84-1.16-3.995"
    />
  </Svg>
);
export default IconlystReplay1Broken;
