import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChargeControllerLight = ({
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
      d="M16.024 15.678c.208.27.405.531.73.775.674.504 1.48.737 2.73.27 1.324-.54 1.548-1.963 1.512-3.277.01-.298-.233-7.076-3.032-8.542-.576-.253-2.206-1.143-4.114.053-1.63 1.017-2.241.864-3.7 0-1.99-1.188-3.538-.306-4.114-.053-2.79 1.466-3.042 8.244-3.033 8.542-.036 1.314.19 2.736 1.513 3.276 1.26.468 2.062.235 2.738-.27.342-.251.504-.503.702-.774M8.001 8.39v2.87m1.436-1.435h-2.87M16.008 11.27v-.01M16.008 8.4v-.01M14.572 9.835v-.01M17.441 9.835v-.01"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.78 15.7-1.098 1.976h2.636l-1.099 1.977"
    />
  </Svg>
);
export default IconlystChargeControllerLight;
