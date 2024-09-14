import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAvocadoTwoTone = ({
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
      d="M11.84 8.601c.69-2.307.765-4.544 3.558-4.517 3.796-.037 2.818 3.8 4.692 6.93 1.407 2.153 1.158 5.067-.577 6.956-1.126 1.272-2.629 1.806-4.115 1.76a5.5 5.5 0 0 1-1.13-.08"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.467 19.784c1.664-.34 2.878-1.374 3.581-2.684.783-1.264 1.072-2.833.534-4.444-.769-2.447-3.168-4.12-5.736-3.977-3.648.058-6.482-2.708-8.348.598-1.93 3.269 2.274 4.283 3.656 7.528 1.161 2.296 3.809 3.537 6.313 2.979"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.179 12.46c-1.273-.735-3.21-.425-3.634.31-.424.734.276 2.566 1.549 3.301s2.484.356 3.06-.64c.575-.998.297-2.236-.975-2.971"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystAvocadoTwoTone;
