import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldLock3TwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.824 13.628c0 6.114-7.324 8.331-7.324 8.331s-7.323-2.216-7.323-8.33c0-6.115-.267-6.593.322-7.18.587-.589 6.04-2.49 7-2.49.962 0 6.414 1.896 7.003 2.49.588.592.322 1.066.322 7.18"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.866 15.35h-2.733a1.357 1.357 0 0 1-1.357-1.356V12.46c0-.75.608-1.357 1.357-1.357h2.733c.75 0 1.356.608 1.356 1.357v1.534c0 .75-.607 1.357-1.356 1.357"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.131 11.13v-.974a1.633 1.633 0 0 0-3.263-.007v.981"
    />
  </Svg>
);
export default IconlystShieldLock3TwoTone;
