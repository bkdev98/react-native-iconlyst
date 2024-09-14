import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardDoubleOutline = ({
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
      d="M6.486 8.124c.773-.83 1.87-1.288 3.15-1.288h9.052c1.283 0 2.38.458 3.154 1.288C22.609 8.95 23 10.08 23 11.331v5.92c0 1.252-.392 2.382-1.16 3.207-.773.83-1.87 1.288-3.155 1.288h-9.05c-1.283 0-2.38-.458-3.154-1.288-.767-.825-1.158-1.955-1.158-3.207v-5.92c0-1.253.394-2.383 1.162-3.207m1.097 1.023c-.466.5-.759 1.242-.759 2.184v5.92c0 .943.292 1.685.757 2.185.459.493 1.142.81 2.055.81h9.05c.914 0 1.598-.317 2.058-.81.465-.5.756-1.242.756-2.185v-5.92c0-.943-.291-1.685-.756-2.185-.46-.493-1.143-.81-2.056-.81H9.636c-.909 0-1.593.317-2.053.81"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.872 12.05a.75.75 0 0 1 .75-.75h9.075a.75.75 0 0 1 0 1.5H9.622a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.744 2.405c1.082.31 1.999 1.076 2.647 2.142l.002.004 1.585 2.643a.75.75 0 0 1-1.286.772l-1.584-2.64v-.002c-.489-.803-1.122-1.289-1.778-1.477-.648-.186-1.397-.106-2.181.367l-7.75 4.663c-.78.47-1.204 1.094-1.344 1.755-.143.669-.012 1.457.472 2.267l.001.001 3.066 5.074q.178.307.387.535a.75.75 0 0 1 .196.506v.007a.75.75 0 0 1-1.364.431 4.6 4.6 0 0 1-.512-.72L2.24 13.67c-.644-1.076-.888-2.248-.654-3.35.236-1.11.941-2.068 2.04-2.728l7.748-4.663c1.102-.664 2.279-.837 3.369-.524"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCardDoubleOutline;
