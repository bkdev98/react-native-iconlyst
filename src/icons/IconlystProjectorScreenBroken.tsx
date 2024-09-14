import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystProjectorScreenBroken = ({
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
      d="M10.014 9.427a3.992 3.992 0 1 1 .795 2.391"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.1 8.059H5.629C4.018 8.059 3 9.202 3 10.812v3.456c0 1.62 1.008 2.755 2.628 2.755l6.376.004M17.751 8.059h.63c1.61 0 2.619 1.134 2.619 2.753v3.456c0 1.611-1.008 2.763-2.62 2.763l-3.188-.002M15.69 8.795a1.8 1.8 0 0 0-.985-1.027M6.201 11.834h.94M6.4 17.027l-.9 1.539M17.545 17.027l.9 1.539"
    />
  </Svg>
);
export default IconlystProjectorScreenBroken;
