import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeElectricityBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.094 9.043v8.675a3.064 3.064 0 0 0 3.064 3.064h4.44M21.598 10.228 14.072 4.27a2.38 2.38 0 0 0-2.948 0L9.242 5.76M15.703 12.34v-.938a.615.615 0 0 0-.615-.616h-4.98a.616.616 0 0 0-.616.616v1.938a3.105 3.105 0 0 0 5.595 1.856M12.597 16.45v4.333M10.978 10.785V8.781m3.24 2.004V8.781"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.102 9.047v8.675a3.064 3.064 0 0 1-3.064 3.064h-.958M3.598 10.225 7.36 7.246"
    />
  </Svg>
);
export default IconlystHomeElectricityBroken;
