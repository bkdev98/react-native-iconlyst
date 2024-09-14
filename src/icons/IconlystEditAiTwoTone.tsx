import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEditAiTwoTone = ({
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
      strokeWidth={1.5}
      d="M11.69 21a11.5 11.5 0 0 1-4.118-1.827c-3.163-2.215-4.837-5.623-4.56-8.648M18.688 8.81c2.452 2.992 2.56 6.213 1.604 7.646-1.911 2.868-5.734.956-5.734.956M15.038 5.85c-1.448-.76-2.971-1.173-4.431-1.25"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.343 3.488c.877-.972 1.891-.303 2.641.374s1.52 1.617.643 2.59l-7.955 8.38c-.266.296-.64.473-1.037.491l-1.998.094a.497.497 0 0 1-.52-.469l-.11-1.997a1.5 1.5 0 0 1 .382-1.082zM6.185 4.4l.086.233A3.2 3.2 0 0 0 8.155 6.52l.232.086-.232.085a3.2 3.2 0 0 0-1.884 1.887l-.086.232-.086-.232a3.2 3.2 0 0 0-1.884-1.887l-.231-.085.231-.086A3.2 3.2 0 0 0 6.1 4.633z"
    />
  </Svg>
);
export default IconlystEditAiTwoTone;
