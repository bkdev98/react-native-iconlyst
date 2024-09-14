import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDnaBroken = ({
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
      d="m10.289 20.414-1.43-1.43M6.475 16.6l-2.89-2.89M13.71 3.586l1.431 1.43M17.525 7.4l2.89 2.89M12.152 6.527l2.66 2.66M11.81 17.436 9.17 14.794M14.25 3c-5.625 5.625 1.125 12.375-4.5 18"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 9.75c-5.625 5.625-12.375-1.125-18 4.5"
    />
  </Svg>
);
export default IconlystDnaBroken;
