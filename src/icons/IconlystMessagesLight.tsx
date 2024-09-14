import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesLight = ({
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
      d="M18.897 18.554a8.97 8.97 0 0 1-6.921 3.22c-.893-.004-4.872-.001-7.22 0a.874.874 0 0 1-.722-1.362c.217-.327.495-.724.715-1.034a.97.97 0 0 0 .048-1.047c-.333-.58-.83-1.463-.959-1.784-1.541-3.343-.947-7.431 1.804-10.191a8.988 8.988 0 0 1 13.448.811c2.614 3.315 2.527 8.16-.193 11.387"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessagesLight;
