import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartBagLike1Bulk = ({
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
      fill={props.color}
      d="M7.13 5.918c-2.491.065-4.153 1.85-4.153 4.487v6.301c0 2.685 1.725 4.49 4.294 4.49H17.68c2.57 0 4.297-1.805 4.297-4.49v-6.301c0-2.686-1.727-4.489-4.296-4.489h-.566v.002z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.587 5.916h-8.22v-.14a2.974 2.974 0 0 1 2.97-2.971h2.28a2.974 2.974 0 0 1 2.97 2.97zm-5.25-1.611c-.812 0-1.47.66-1.47 1.47v.14h5.22v-.14c0-.81-.66-1.47-1.47-1.47zM6.802 17.675a.75.75 0 0 1-.75-.75v-6.729a.75.75 0 1 1 1.5 0v6.73a.75.75 0 0 1-.75.75M18.151 17.675a.75.75 0 0 1-.75-.75v-6.729a.75.75 0 1 1 1.5 0v6.73a.75.75 0 0 1-.75.75M15.875 11.615a2.2 2.2 0 0 0-1.388-1.297 2.3 2.3 0 0 0-1.094-.077c-.335.056-.639.256-.894.443-.247-.179-.558-.383-.895-.44a2.36 2.36 0 0 0-1.093.074c-1.4.454-1.832 1.987-1.44 3.206.61 1.957 3.237 3.202 3.348 3.254a.2.2 0 0 0 .16 0c.109-.051 2.698-1.274 3.344-3.252a2.8 2.8 0 0 0-.048-1.911"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeartBagLike1Bulk;
