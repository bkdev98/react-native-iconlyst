import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCableControllerLight = ({
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
      d="M17.961 8.648c-.574-.256-2.202-1.14-4.108.05-1.637 1.021-2.25.867-3.705 0-1.99-1.186-3.534-.306-4.108-.05-2.796 1.461-3.043 8.247-3.037 8.543-.032 1.307.189 2.736 1.517 3.277 1.251.46 2.274.226 2.947-.273.729-.54.659-1.096 1.854-1.785 1.195-.69 4.313-.587 5.359 0 1.046.585 1.125 1.244 1.853 1.785.674.5 1.696.734 2.947.273 1.33-.541 1.55-1.97 1.517-3.277.007-.296-.24-7.082-3.036-8.543M8.003 12.133v2.87m1.433-1.435h-2.87M14.57 13.577v-.01M16.006 15.012v-.01M17.44 13.577v-.01M16.006 12.143v-.01M8.201 3.284c0 .62.513 1.122 1.145 1.122h.884c.976.004 1.766.778 1.77 1.734v.66"
    />
  </Svg>
);
export default IconlystCableControllerLight;
