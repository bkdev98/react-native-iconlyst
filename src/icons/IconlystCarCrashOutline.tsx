import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarCrashOutline = ({
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
      fillRule="evenodd"
      d="M7.793 16.393a1.455 1.455 0 0 0-1.455 1.455v.011q-.003.195.049.382a1.455 1.455 0 0 0 2.801-.001l.003-.011q.056-.188.057-.382a1.457 1.457 0 0 0-1.455-1.454m-2.09-.636a2.955 2.955 0 0 1 5.045 2.091v.003c0 .271-.04.541-.118.802a2.955 2.955 0 0 1-5.687-.006v-.002a2.9 2.9 0 0 1-.105-.803 2.96 2.96 0 0 1 .865-2.084M2.5 5.995a.75.75 0 0 1 .75-.75h.994a2.1 2.1 0 0 1 1.838 1.099l2.502 4.631a.75.75 0 1 1-1.32.713L4.763 7.057a.6.6 0 0 0-.521-.312H3.25a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 17.847a.75.75 0 0 1 .75-.75H5.3a.75.75 0 1 1 0 1.5H3.25a.75.75 0 0 1-.75-.75M2.5 11.387a.75.75 0 0 1 .75-.75h6.759a3.21 3.21 0 0 1 3.208 3.208v1.908a3.21 3.21 0 0 1-3.208 3.208.75.75 0 0 1 0-1.5 1.71 1.71 0 0 0 1.708-1.708v-1.908a1.707 1.707 0 0 0-1.708-1.709H3.25a.75.75 0 0 1-.75-.75M13.594 3.2a.75.75 0 0 1 .75.75v2.045a.75.75 0 0 1-1.5 0V3.95a.75.75 0 0 1 .75-.75M18.455 12.085a.75.75 0 0 1 .75-.75h2.045a.75.75 0 0 1 0 1.5h-2.045a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.897 11.958a.75.75 0 0 1-.123.592l-.961 1.345.268.85a.75.75 0 0 1-1.43.45l-.381-1.205a.75.75 0 0 1 .105-.662l.701-.982-.762-.446a.75.75 0 0 1-.364-.547l-.144-1.072h-1.212a.75.75 0 0 1-.5-.191l-1.009-.903a.75.75 0 1 1 1.001-1.117l.794.711h1.582a.75.75 0 0 1 .744.65l.182 1.36 1.155.676a.75.75 0 0 1 .354.49M17.229 16.234a.75.75 0 0 1 1.06 0l1.446 1.446a.75.75 0 0 1-1.06 1.061l-1.446-1.446a.75.75 0 0 1 0-1.06M17.033 8.132a.75.75 0 0 0 1.06 0l1.447-1.446a.75.75 0 0 0-1.061-1.061l-1.446 1.446a.75.75 0 0 0 0 1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCarCrashOutline;
