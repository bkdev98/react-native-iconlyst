import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFaceScanLight = ({
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
      d="M3 8.47V6.891A3.89 3.89 0 0 1 6.893 3h1.29M3 15.531v1.577A3.89 3.89 0 0 0 6.893 21H8.15M21 15.531v1.577A3.89 3.89 0 0 1 17.108 21h-1.29M21 8.47V6.891A3.89 3.89 0 0 0 17.107 3H15.85"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M13.762 16.043c-.548.288-.81 1.774-.81 1.774"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M8.238 17.121c.687-1.566.316-3.204-.489-4.644-.575-1.03-.702-2.134-.216-3.254C8.256 7.557 10 6.788 11.73 6.75c1.038-.023 2.022.158 2.833.842 1.041.878 1.65 1.952 1.335 3.38-.168.762.388 1.627.782 2.156a.415.415 0 0 1-.185.65l-.513.197a.46.46 0 0 0-.286.342l-.171 1.461c-.057.38-.38.56-.74.484l-1.54-.347c-.502-.111-.48-.566-.612-1.043"
    />
  </Svg>
);
export default IconlystFaceScanLight;
