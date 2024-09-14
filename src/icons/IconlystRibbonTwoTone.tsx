import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRibbonTwoTone = ({
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
      d="M13.969 10.54c6.48 5.145 7.282 1.178 7.282-1.513s-.802-6.658-7.282-1.512M10.49 10.54c-6.887 5.145-7.74 1.178-7.74-1.513s.853-6.658 7.74-1.512"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.49 7.326a1 1 0 0 1 1-1h1.48a1 1 0 0 1 1 1v3.403a1 1 0 0 1-1 1h-1.48a1 1 0 0 1-1-1z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.35 11.383c.054 1.217-.868 3.992-4.265 5.001l1.76.995-.642 2.836c4.695-2.427 5.084-6.517 4.792-8.607M15.112 11.383c-.055 1.217.867 3.992 4.264 5.001l-1.76.995.642 2.836c-4.695-2.427-5.083-6.517-4.792-8.607M13.97 9.248c.46.027 1.785-.024 3.409-.447M10.49 9.248c-.459.027-1.784-.024-3.408-.447"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystRibbonTwoTone;
