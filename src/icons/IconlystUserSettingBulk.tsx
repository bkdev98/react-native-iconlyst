import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserSettingBulk = ({
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
      d="M17.105 16.397a.814.814 0 0 0-.56 1.391.82.82 0 0 0 1.159 0 .814.814 0 0 0-.555-1.391zm.024 4.54a1 1 0 0 1-1-1v-.092a2.8 2.8 0 0 1-.783-.449l-.072.042a1.002 1.002 0 0 1-1.008-1.729l.077-.044a2.8 2.8 0 0 1 0-.905l-.077-.045a1 1 0 0 1 1.008-1.728l.07.042c.24-.196.507-.346.785-.45v-.089a1 1 0 0 1 2 0v.092a2.8 2.8 0 0 1 .779.45l.084-.048a.999.999 0 1 1 .996 1.734l-.081.047a2.9 2.9 0 0 1 0 .895l.08.047a1 1 0 1 1-.995 1.734l-.084-.048a2.8 2.8 0 0 1-.78.45v.093a1 1 0 0 1-1 1M11.023 3.064A4.88 4.88 0 0 0 6.148 7.94a4.88 4.88 0 0 0 4.875 4.877 4.88 4.88 0 0 0 4.875-4.877 4.88 4.88 0 0 0-4.875-4.875"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.022 14.334c-4.98 0-7.21 2.75-7.21 5.48a.75.75 0 0 0 .75.75l5.81-.009 1.177-.002q.156-.005.305-.054c.425-.121.7-.469.7-.964v-4.183c0-.612-.444-1.018-1.533-1.018"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystUserSettingBulk;
