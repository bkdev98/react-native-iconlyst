import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTransmissionManualOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.222 18.064a.75.75 0 0 1 1.04.207l1.287 1.926a.75.75 0 1 1-1.247.833l-1.287-1.926a.75.75 0 0 1 .207-1.04M5.05 7.264a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 .75-.75M20.193 5.471a1.05 1.05 0 1 0-1.485 1.485 1.05 1.05 0 0 0 1.485-1.485m1.06-1.06a2.55 2.55 0 1 1-3.606 3.606 2.55 2.55 0 1 1 3.606-3.606"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.45 7.264a.75.75 0 0 1 .75.75v2.7a2.55 2.55 0 0 1-2.55 2.55H5.05a.75.75 0 0 1 0-1.5h12.6c.58 0 1.05-.47 1.05-1.05v-2.7a.75.75 0 0 1 .75-.75M12.993 5.471a1.05 1.05 0 1 0-1.485 1.485 1.05 1.05 0 0 0 1.485-1.485m1.06-1.06a2.55 2.55 0 1 1-3.606 3.606 2.55 2.55 0 1 1 3.606-3.606M5.792 5.471a1.05 1.05 0 1 0-1.484 1.485 1.05 1.05 0 0 0 1.484-1.485m1.061-1.06a2.55 2.55 0 0 1-3.606 3.606A2.55 2.55 0 0 1 6.853 4.41M12.993 18.071a1.05 1.05 0 1 0-1.485 1.486 1.05 1.05 0 0 0 1.485-1.486m1.06-1.06a2.55 2.55 0 1 1-3.606 3.606 2.55 2.55 0 0 1 3.606-3.606M5.792 18.071a1.05 1.05 0 1 0-1.484 1.485 1.05 1.05 0 0 0 1.484-1.485m1.061-1.06a2.55 2.55 0 0 1-3.606 3.606 2.55 2.55 0 0 1 3.606-3.606"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 7.264a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 .75-.75M16.963 16.114a.75.75 0 0 1 .75-.75h1.925a2.037 2.037 0 0 1 0 4.073h-1.175v1.177a.75.75 0 1 1-1.5 0zm1.5 1.823h1.175a.537.537 0 0 0 0-1.073h-1.175z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTransmissionManualOutline;
