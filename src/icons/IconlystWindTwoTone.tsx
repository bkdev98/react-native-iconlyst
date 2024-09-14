import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWindTwoTone = ({
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
      d="M3.114 5.47c.641.388 1.706.93 2.97 1.405"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.931 4.97c-3.908.286-8.014 3.226-10.557 2.298-.893-.326-1.704-1.216-1.704-2.196 0-1.05.852-1.902 1.902-1.902a1.67 1.67 0 0 1 1.68 1.902"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.932 18.53c-.641-.388-1.706-.93-2.971-1.405"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.114 19.03c3.907-.286 8.014-3.226 10.557-2.298.893.326 1.704 1.216 1.704 2.196 0 1.05-.852 1.902-1.902 1.902a1.67 1.67 0 0 1-1.68-1.902"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.114 8.892c-4.56-.771-7.743 4.236-17.833 1.14"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.282 15.113c1.655.28 3.129-.201 4.818-.78"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.114 13.974c-1.977-.607-3.69-.903-5.199-.992"
    />
  </Svg>
);
export default IconlystWindTwoTone;
