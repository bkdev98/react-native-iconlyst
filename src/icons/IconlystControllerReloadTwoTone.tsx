import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystControllerReloadTwoTone = ({
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
      d="M16.524 16.087c.208.27.405.532.73.775.674.504 1.48.737 2.73.27 1.324-.54 1.548-1.963 1.512-3.277.01-.297-.233-7.075-3.032-8.542-.576-.253-2.206-1.143-4.114.054-1.63 1.016-2.241.864-3.7 0-1.99-1.188-3.538-.307-4.114-.054-2.79 1.467-3.042 8.245-3.033 8.542-.036 1.314.19 2.736 1.513 3.276 1.26.468 2.062.235 2.738-.27.342-.251.504-.503.702-.774"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.508 11.679v-.01M16.508 8.809v-.01M15.074 10.244v-.01M17.943 10.244v-.01M8.501 8.799v2.87m1.436-1.434h-2.87"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.71 17.69a1.8 1.8 0 0 0 1.78 1.553c.402 0 .763-.126 1.057-.344M11.424 16.004a1.72 1.72 0 0 1 1.065-.361c.924 0 1.679.688 1.788 1.577"
    />
  </Svg>
);
export default IconlystControllerReloadTwoTone;
