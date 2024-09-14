import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHospitalShieldOutline = ({
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
      d="M12.25 21.75a.8.8 0 0 1-.217-.032c-.321-.1-7.856-2.453-7.856-9.05 0-1.835-.025-3.16-.042-4.132-.044-2.434-.054-2.94.583-3.577.755-.754 6.448-2.709 7.532-2.709s6.785 1.957 7.534 2.712c.634.64.625 1.147.58 3.589-.016.97-.04 2.291-.04 4.117 0 6.6-7.536 8.953-7.856 9.05a.8.8 0 0 1-.218.032m0-18a30 30 0 0 0-6.485 2.283c-.16.16-.166.491-.13 2.475.017.979.042 2.313.042 4.16 0 4.914 5.41 7.122 6.573 7.54 1.163-.418 6.574-2.627 6.574-7.54 0-1.837.024-3.167.04-4.144.037-2 .03-2.329-.145-2.506-2.063-1-4.234-1.76-6.47-2.268"
    />
    <Path
      fill={props.color}
      d="M13.126 15.452h-1.75a1.25 1.25 0 0 1-1.249-1.25v-.671H9.45a1.25 1.25 0 0 1-1.249-1.25v-1.755a1.25 1.25 0 0 1 1.25-1.25h.674v-.675a1.25 1.25 0 0 1 1.25-1.25h1.75a1.25 1.25 0 0 1 1.248 1.25v.672h.675a1.25 1.25 0 0 1 1.25 1.249v1.759a1.25 1.25 0 0 1-1.25 1.25h-.675v.67a1.25 1.25 0 0 1-1.247 1.25m-1.5-1.5h1.248V12.78a.75.75 0 0 1 .75-.75h1.174v-1.254h-1.174a.75.75 0 0 1-.75-.75V8.856h-1.248v1.17a.75.75 0 0 1-.75.75H9.702v1.255h1.174a.75.75 0 0 1 .75.75z"
    />
  </Svg>
);
export default IconlystHospitalShieldOutline;
