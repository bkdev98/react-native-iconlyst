import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHDRLight = ({
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
      d="M17.933 4.172H6.067C3.567 4.172 2 5.942 2 8.445v7.103c0 2.505 1.56 4.275 4.067 4.275h11.865c2.508 0 4.068-1.77 4.068-4.275V8.445c0-2.503-1.56-4.273-4.067-4.273"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.795 9.434v5.12M4.795 11.998h3.238M8.033 9.434v5.12"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.323 14.555h-.853V9.434h.853a2.56 2.56 0 1 1 0 5.12"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.943 12.504h1.746a1.517 1.517 0 1 0 0-3.035h-1.746v5.06M18.772 14.527l-1.227-2.023"
    />
  </Svg>
);
export default IconlystHDRLight;
