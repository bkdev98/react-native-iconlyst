import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPenAiTwoTone = ({
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
      d="m7.371 8.937-.09-.241A3.32 3.32 0 0 0 5.32 6.73l-.241-.09.24-.089a3.32 3.32 0 0 0 1.963-1.965l.089-.241.09.241a3.32 3.32 0 0 0 1.961 1.965l.241.09-.24.089A3.32 3.32 0 0 0 7.46 8.696zM4.04 13.13A1.56 1.56 0 0 0 3 12.09a1.56 1.56 0 0 0 1.04-1.041c.15.498.54.889 1.038 1.04A1.56 1.56 0 0 0 4.04 13.13M14.907 7.641l4.33 3.182"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.108 5.784c.981-1.334 2.342-.62 3.372.138s2.117 1.844 1.136 3.178l-7.22 9.429a1.89 1.89 0 0 1-1.244.748l-2.504.37a.63.63 0 0 1-.713-.524l-.392-2.5a1.89 1.89 0 0 1 .345-1.41z"
    />
  </Svg>
);
export default IconlystPenAiTwoTone;
