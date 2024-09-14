import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHouseLockBroken = ({
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
      d="M12.25 21H7.035a3.32 3.32 0 0 1-3.322-3.323v-7.172c0-.892.4-1.735 1.092-2.299l5.574-4.54a2.96 2.96 0 0 1 3.743 0l5.574 4.54a2.97 2.97 0 0 1 1.092 2.299v7.172A3.32 3.32 0 0 1 17.466 21h-1.102"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.7 16.871h-2.896a1.437 1.437 0 0 1-1.437-1.437V13.81c0-.793.643-1.438 1.437-1.438H13.7c.794 0 1.437.645 1.437 1.438v1.625c0 .794-.643 1.437-1.437 1.437"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.98 12.403v-1.032a1.729 1.729 0 0 0-3.457-.007v1.04"
    />
  </Svg>
);
export default IconlystHouseLockBroken;
