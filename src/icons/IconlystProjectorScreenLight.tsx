import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystProjectorScreenLight = ({
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
      d="M14.005 5.436a3.992 3.992 0 1 1-.001 7.983 3.992 3.992 0 0 1 0-7.983"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.751 8.059h.63c1.611 0 2.619 1.134 2.619 2.753v3.456c0 1.611-1.008 2.763-2.62 2.763l-12.752-.008C4.008 17.023 3 15.888 3 14.268v-3.456C3 9.202 4.018 8.06 5.628 8.06h4.473"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.69 8.795a1.8 1.8 0 0 0-.985-1.027M6.201 11.834h.94M6.4 17.027l-.9 1.539M17.545 17.027l.9 1.539"
    />
  </Svg>
);
export default IconlystProjectorScreenLight;
