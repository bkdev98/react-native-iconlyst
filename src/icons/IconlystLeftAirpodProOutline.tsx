import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftAirpodProOutline = ({
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
      fill={props.color}
      d="M12.51 7.454a.75.75 0 0 1 .75-.75h1.91a.75.75 0 0 1 0 1.5h-1.91a.75.75 0 0 1-.75-.75"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.234 12.608a2.1 2.1 0 0 1-.905.299A4.35 4.35 0 0 1 4.8 11.653a2.02 2.02 0 0 1-.577-1.432V5.974c0-.58.24-1.117.65-1.507A4.34 4.34 0 0 1 8.33 3.284c.334.03.647.139.92.307 1.172-.841 2.665-1.341 4.289-1.341 3.66 0 6.955 2.74 6.727 6.719-.191 3.773-1.648 8.164-2.65 10.814a3.037 3.037 0 0 1-3.634 1.862c-1.682-.454-2.513-2.187-2.13-3.76l.009-.035 1.159-3.918c-1.426-.093-2.734-.568-3.785-1.324m.923-7.822q.076.266.078.56v5.498q0 .301-.082.577c.906.638 2.08 1.028 3.385 1.028.17 0 .28-.001.382-.016a.75.75 0 0 1 .674.253.75.75 0 0 1 .15.703l-1.436 4.85-.007.031c-.197.873.282 1.713 1.072 1.927.765.206 1.559-.2 1.84-.944.994-2.634 2.376-6.837 2.554-10.365.17-2.965-2.265-5.138-5.23-5.138-1.3 0-2.472.396-3.38 1.036m-1.507.269a1 1 0 0 1-.058-.079.6.6 0 0 0-.4-.198c-1.141-.105-1.886.397-2.283.776a.57.57 0 0 0-.185.42v4.247c0 .162.058.29.136.369a2.84 2.84 0 0 0 2.331.823.584.584 0 0 0 .544-.57V5.348a.55.55 0 0 0-.085-.292"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLeftAirpodProOutline;
