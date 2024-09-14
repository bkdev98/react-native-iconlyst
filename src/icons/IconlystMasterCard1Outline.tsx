import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMasterCard1Outline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M3.079 4.846c.881-.945 2.133-1.471 3.605-1.471h10.63c1.476 0 2.73.526 3.61 1.471.875.94 1.326 2.233 1.326 3.677v6.954c0 1.443-.451 2.737-1.326 3.676-.881.946-2.135 1.471-3.61 1.471H6.684c-1.475 0-2.728-.525-3.608-1.47-.875-.94-1.326-2.234-1.326-3.677V8.523c0-1.444.454-2.738 1.329-3.677M4.176 5.87c-.573.615-.926 1.521-.926 2.654v6.954c0 1.134.351 2.04.924 2.654.566.609 1.405.993 2.51.993h10.63c1.105 0 1.945-.384 2.512-.993.573-.615.924-1.52.924-2.654V8.523c0-1.134-.351-2.04-.924-2.654-.567-.61-1.406-.994-2.511-.994H6.685c-1.1 0-1.94.384-2.509.994"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.001 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M10.251 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.3 9.398a3.75 3.75 0 0 1 5.2-.192.75.75 0 1 1-1 1.118 2.25 2.25 0 1 0 0 3.352.75.75 0 1 1 1 1.118 3.75 3.75 0 0 1-5.2-5.396"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMasterCard1Outline;
