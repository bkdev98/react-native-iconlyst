import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerOutletRemoveTwoTone = ({
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
      d="M8.468 9.174a5.054 5.054 0 0 0 5.55 5.03c2.627-.25 4.557-2.607 4.557-5.247V7.43c0-.62-.502-1.121-1.122-1.121H9.59c-.62 0-1.121.502-1.121 1.121z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.193 19.236 9.96 21m-1.766-1.764-1.767-1.765m1.767 1.765 1.766-1.765m-1.766 1.765L6.426 21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.062 21c0-.74-.613-1.34-1.368-1.34h-1.056c-1.167-.006-2.11-.93-2.117-2.073V14.39M10.98 3v3.31M16.064 3v3.31"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPowerOutletRemoveTwoTone;
