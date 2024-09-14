import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiToolsAltTwoTone = ({
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
      d="M5.198 14h2.604C9.016 14 10 14.984 10 16.198v2.604A2.2 2.2 0 0 1 7.802 21H5.198A2.2 2.2 0 0 1 3 18.802v-2.604C3 14.984 3.984 14 5.198 14"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.198 14h2.604c1.214 0 2.198.984 2.198 2.198v2.604A2.2 2.2 0 0 1 18.802 21h-2.604A2.2 2.2 0 0 1 14 18.802v-2.604c0-1.214.984-2.198 2.198-2.198M5.198 3h2.604C9.016 3 10 3.984 10 5.198v2.604A2.2 2.2 0 0 1 7.802 10H5.198A2.2 2.2 0 0 1 3 7.802V5.198C3 3.984 3.984 3 5.198 3"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.505 10-.136-.368a5.07 5.07 0 0 0-2.991-2.996L14.01 6.5l.368-.136a5.07 5.07 0 0 0 2.991-2.996L17.505 3l.136.368a5.07 5.07 0 0 0 2.991 2.996L21 6.5l-.368.136a5.07 5.07 0 0 0-2.99 2.996z"
    />
  </Svg>
);
export default IconlystAiToolsAltTwoTone;
