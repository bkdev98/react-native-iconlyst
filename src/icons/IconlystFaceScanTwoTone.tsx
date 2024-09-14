import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFaceScanTwoTone = ({
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
      d="M3.5 8.47V6.891A3.89 3.89 0 0 1 7.393 3h1.29M3.5 15.531v1.577A3.89 3.89 0 0 0 7.393 21H8.65M21.5 15.531v1.577A3.89 3.89 0 0 1 17.608 21h-1.29M21.5 8.47V6.891A3.89 3.89 0 0 0 17.607 3H16.35"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M14.262 16.043c-.548.288-.81 1.774-.81 1.774"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M8.739 17.121c.686-1.566.315-3.204-.49-4.644-.575-1.03-.702-2.134-.216-3.254.723-1.666 2.467-2.435 4.198-2.473 1.037-.023 2.022.158 2.833.842 1.04.878 1.65 1.952 1.334 3.38-.168.762.388 1.627.782 2.156a.415.415 0 0 1-.185.65l-.513.197a.46.46 0 0 0-.286.342l-.171 1.461c-.057.38-.38.56-.74.484l-1.539-.347c-.503-.111-.481-.566-.613-1.043"
    />
  </Svg>
);
export default IconlystFaceScanTwoTone;
