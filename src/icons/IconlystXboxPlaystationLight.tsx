import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystXboxPlaystationLight = ({
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
      d="M17.961 6.245c-.574-.256-2.202-1.14-4.108.05-1.637 1.02-2.25.867-3.705 0-1.99-1.187-3.534-.306-4.108-.05-2.796 1.461-3.044 8.247-3.037 8.542-.032 1.308.189 2.736 1.517 3.277 1.251.462 2.274.227 2.947-.272.729-.541.659-1.097 1.853-1.786 1.196-.69 4.313-.586 5.36 0 1.046.586 1.125 1.245 1.853 1.786.674.499 1.696.733 2.947.272 1.33-.54 1.55-1.969 1.517-3.277.007-.295-.24-7.08-3.036-8.542M8.001 9.73v2.869m1.437-1.435h-2.87M16.006 12.609v-.01M16.006 9.74v-.01M14.572 11.174v-.01M17.441 11.174v-.01"
    />
  </Svg>
);
export default IconlystXboxPlaystationLight;
