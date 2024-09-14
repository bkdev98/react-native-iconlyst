import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGmailSquareLight = ({
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
      d="M7.782 3h8.435C19.165 3 21 5.081 21 8.026v7.948C21 18.919 19.165 21 16.216 21H7.782C4.834 21 3 18.919 3 15.974V8.026C3 5.081 4.843 3 7.782 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.006 16.459v-4.962l2.996 2.373 3.029-2.372v4.96s1.002.023 1.285.023c.654 0 1.184-.53 1.184-1.183V8.71a1.18 1.18 0 0 0-.326-.825 1.18 1.18 0 0 0-1.672-.044l-3.5 2.733L8.498 7.84a1.18 1.18 0 0 0-1.672.044 1.18 1.18 0 0 0-.326.826v6.588c0 .654.53 1.184 1.184 1.184.283 0 1.322-.024 1.322-.024"
    />
  </Svg>
);
export default IconlystGmailSquareLight;
