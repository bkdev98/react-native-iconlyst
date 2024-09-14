import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinCardTwoTone = ({
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
      d="M14.839 10.45H18.9a1.782 1.782 0 0 0 0-3.563c-1.117 0-2.235-.01-3.352 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.548 6.889h3.18a1.45 1.45 0 0 0-.019-2.899h-3.867M16.25 10.451v.934M18.73 10.451v.934M16.25 3.053v.936M18.73 3.053v.936M15.387 3.988v6.462"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 8.78a5.11 5.11 0 0 1 5.111-5.11l-.607 1.633M21.5 15.836a5.11 5.11 0 0 1-5.111 5.11l.607-1.632"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.948 13.031H5.604c-1.294 0-2.104.916-2.104 2.21v3.497c0 1.296.807 2.21 2.104 2.21h5.344c1.297 0 2.104-.914 2.104-2.21v-3.496c0-1.295-.807-2.21-2.104-2.21"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 15.842h9.552"
    />
  </Svg>
);
export default IconlystBitcoinCardTwoTone;
