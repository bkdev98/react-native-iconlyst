import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNexoBroken = ({
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
      d="M12.5 6.283 8 3.426 3.5 6.283V8.53M21.5 11.475V6.283L17 3.426l-2.25 1.429M21.5 15.063v2.653L17 20.575l-4.77-2.982L8 20.575l-4.5-2.859V12"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.23 17.592 8 14.857V9.141L12.5 12M12.5 6.283 17 9.141v5.717l-2.25-1.43"
    />
  </Svg>
);
export default IconlystNexoBroken;
