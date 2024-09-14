import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeleteBulk = ({
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
      d="M5.72 18.977A3.2 3.2 0 0 0 8.914 22h6.678a3.2 3.2 0 0 0 3.195-3.025l.418-8.37a.3.3 0 0 0-.3-.315H5.598a.3.3 0 0 0-.3.315z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.678 14.413a.75.75 0 0 1 .898.565l.713 3.136a.75.75 0 1 1-1.463.332l-.713-3.136a.75.75 0 0 1 .565-.897m3.46 2.09.802-2.94a.75.75 0 1 1 1.447.395l-.802 2.939a.75.75 0 1 1-1.447-.394M18.683 4.347h-2.365l-.656-1.268A2 2 0 0 0 13.886 2h-3.271c-.75 0-1.431.414-1.776 1.079l-.656 1.268H5.818a1.923 1.923 0 0 0-1.921 1.92v2.022c0 .277.223.5.5.5h15.706a.5.5 0 0 0 .5-.5V6.267c0-1.059-.861-1.92-1.92-1.92"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeleteBulk;
