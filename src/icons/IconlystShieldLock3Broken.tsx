import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldLock3Broken = ({
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
      d="M13.616 14.392h-2.733a1.357 1.357 0 0 1-1.357-1.357v-1.534c0-.75.608-1.356 1.357-1.356h2.733c.75 0 1.356.607 1.356 1.356v1.534c0 .75-.607 1.357-1.356 1.357"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.881 10.171v-.974a1.633 1.633 0 0 0-3.263-.007v.981"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.574 12.67c0 6.113-7.324 8.33-7.324 8.33s-7.323-2.216-7.323-8.33c0-6.115-.267-6.592.32-7.18C5.838 4.9 11.29 3 12.25 3s6.413 1.896 7.002 2.49c.438.441.402.817.355 3.51"
    />
  </Svg>
);
export default IconlystShieldLock3Broken;
