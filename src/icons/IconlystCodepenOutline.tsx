import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCodepenOutline = ({
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
      d="M10.773 2.903a2.25 2.25 0 0 1 2.452 0l7.5 4.875a2.25 2.25 0 0 1 1.024 1.886v4.672a2.25 2.25 0 0 1-1.024 1.886l-7.5 4.875a2.25 2.25 0 0 1-2.452 0l-7.5-4.875a2.25 2.25 0 0 1-1.024-1.887v-4.67a2.25 2.25 0 0 1 1.024-1.887zm1.635 1.257a.75.75 0 0 0-.818 0l-7.5 4.876a.75.75 0 0 0-.341.628v4.672c0 .253.128.49.341.628l7.5 4.876a.75.75 0 0 0 .818 0l7.5-4.876a.75.75 0 0 0 .341-.629v-4.67a.75.75 0 0 0-.341-.63z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.001 14.297a.75.75 0 0 1 .75.75v5.662a.75.75 0 1 1-1.5 0v-5.662a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.674 8.52a.75.75 0 0 1 1.044-.185L12 14.13l8.28-5.796a.75.75 0 1 1 .861 1.229l-8.71 6.097a.75.75 0 0 1-.861 0l-8.71-6.097a.75.75 0 0 1-.185-1.045"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.57 8.335a.75.75 0 0 1 .861 0l8.711 6.097a.75.75 0 0 1-.86 1.23L12 9.864l-8.28 5.796a.75.75 0 0 1-.861-1.229z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.001 2.54a.75.75 0 0 1 .75.75v5.662a.75.75 0 0 1-1.5 0V3.289a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCodepenOutline;
