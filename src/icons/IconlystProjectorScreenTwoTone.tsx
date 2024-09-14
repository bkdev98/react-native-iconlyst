import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystProjectorScreenTwoTone = ({
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
      d="M14.505 5.436a3.992 3.992 0 1 1-.001 7.983 3.992 3.992 0 0 1 0-7.983"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.251 8.059h.63c1.611 0 2.619 1.134 2.619 2.753v3.456c0 1.611-1.008 2.763-2.62 2.763l-12.752-.008c-1.62 0-2.628-1.135-2.628-2.755v-3.456c0-1.61 1.018-2.753 2.628-2.753h4.473"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.19 8.795a1.8 1.8 0 0 0-.985-1.027M6.701 11.834h.94M6.9 17.027 6 18.566M18.045 17.027l.9 1.539"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystProjectorScreenTwoTone;
