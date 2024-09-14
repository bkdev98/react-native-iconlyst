import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSortUpBroken = ({
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
      d="M18.487 13.975V4.834m0 0 2.763 2.693m-2.763-2.693-2.763 2.693M15.003 14.578h-2.876m-8.877 0h5.43m2.405-4.586H3.25m3.919-4.586H3.252M18.92 19.165h-8.835m-6.835 0h2.918"
    />
  </Svg>
);
export default IconlystSortUpBroken;
