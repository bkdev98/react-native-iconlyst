import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserVerifyLight = ({
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
      d="M9.355 14.102c-2.735.122-4.878.718-4.878 2.457 0 1.567 1.73 2.216 4.08 2.422M13.725 13.433a.97.97 0 0 0-.971.971v.44a.98.98 0 0 1-.283.685l-.31.31-.003.003-.002.001a.97.97 0 0 0 .006 1.373l.309.31a.97.97 0 0 1 .283.684v.444c0 .536.435.97.971.97h.441c.257 0 .502.103.684.283l.309.309.003.004.002.001a.97.97 0 0 0 1.373-.006l.309-.309a.97.97 0 0 1 .685-.283h.443a.97.97 0 0 0 .972-.97v-.442c0-.257.102-.503.282-.685l.31-.309.003-.003a.97.97 0 0 0-.004-1.374l-.31-.31a.97.97 0 0 1-.281-.684v-.442a.97.97 0 0 0-.972-.972h-.442a.97.97 0 0 1-.685-.282l-.312-.312-.002-.001a.97.97 0 0 0-1.373.004l-.309.31a.98.98 0 0 1-.684.282z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.523 16.582.873.874 1.799-1.8"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.443 7.384a3.885 3.885 0 1 1-7.77 0 3.885 3.885 0 0 1 7.77 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserVerifyLight;
