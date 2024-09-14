import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWifiControllerTwoTone = ({
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
      d="M18.461 8.536c-.574-.256-2.202-1.14-4.108.05-1.637 1.02-2.25.867-3.705 0-1.99-1.187-3.534-.306-4.108-.05-2.796 1.461-3.043 8.247-3.037 8.542-.032 1.308.189 2.736 1.517 3.277 1.251.462 2.274.227 2.947-.272.729-.541.659-1.097 1.854-1.785 1.195-.69 4.313-.587 5.359 0 1.046.585 1.125 1.244 1.853 1.785.674.499 1.696.734 2.947.272 1.33-.54 1.55-1.969 1.517-3.277.007-.295-.24-7.08-3.036-8.542"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.072 13.466v-.01M17.941 13.466v-.01M16.502 12.026h.01M16.502 14.896h.01M8.503 12.02v2.87m1.435-1.434h-2.87M11.307 6.513a1.69 1.69 0 0 1 2.386 0M10.115 4.385a3.377 3.377 0 0 1 4.774 0"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWifiControllerTwoTone;
