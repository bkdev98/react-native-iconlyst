import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSnowBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.463 3.741v4.395M19.752 18.026v3.462M19.365 4.84l-3.807 2.198M21.25 18.892l-2.998 1.731M19.365 7.038 15.558 4.84M21.25 20.623l-2.998-1.731M8.988 21.437v-6.894M14.96 11.096l-5.97 3.447M3.02 11.096l5.97 3.447M6.839 8.581l2.152 2.154 2.153-2.154M6.839 20.506l2.152-2.154 2.153 2.154M13.078 9.698l-.788 2.94 2.941.789M2.75 15.66l2.941.787-.788 2.942M15.23 15.66l-2.941.787.788 2.942M4.903 9.698l.789 2.94-2.942.789M8.988 7.65v4.172M3.02 17.99l3.853-2.263M14.96 17.99l-3.59-2.096"
    />
  </Svg>
);
export default IconlystSnowBroken;
