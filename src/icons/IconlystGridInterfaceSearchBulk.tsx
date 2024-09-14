import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGridInterfaceSearchBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M7.96 13.09H5.475a2.6 2.6 0 0 0-2.6 2.598v2.487a2.6 2.6 0 0 0 2.6 2.6H7.96a2.6 2.6 0 0 0 2.598-2.6v-2.487a2.6 2.6 0 0 0-2.598-2.599M7.96 2.584H5.475a2.6 2.6 0 0 0-2.6 2.599V7.67a2.6 2.6 0 0 0 2.6 2.599H7.96a2.6 2.6 0 0 0 2.598-2.599V5.183a2.6 2.6 0 0 0-2.598-2.599M15.98 10.27h2.486c1.434 0 2.6-1.167 2.6-2.6V5.183a2.6 2.6 0 0 0-2.6-2.599H15.98a2.6 2.6 0 0 0-2.6 2.6V7.67a2.6 2.6 0 0 0 2.6 2.6" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.485 19.143a2.54 2.54 0 0 1-2.536-2.536 2.54 2.54 0 0 1 2.536-2.537 2.54 2.54 0 0 1 2.536 2.537 2.54 2.54 0 0 1-2.536 2.536m4.42.99-1.156-1.154a4 4 0 0 0 .772-2.372 4.04 4.04 0 0 0-4.036-4.037 4.04 4.04 0 0 0-4.036 4.037 4.04 4.04 0 0 0 4.036 4.036c.799 0 1.544-.233 2.17-.635l1.19 1.188a.75.75 0 0 0 1.062-.002.75.75 0 0 0-.002-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGridInterfaceSearchBulk;
