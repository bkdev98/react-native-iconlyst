import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReceiptBillCheckBroken = ({
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
      d="M12.537 14.46h4.875M12.926 10.058l1.472 1.472 3.012-3.012"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21.246 11.014.004-5.738c0-.83-.794-1.369-1.483-1.016l-.653.345a1.43 1.43 0 0 1-1.245.035l-1.845-.82a2.9 2.9 0 0 0-2.33 0l-1.846.82a1.43 1.43 0 0 1-1.244-.035L9.95 4.26c-.69-.353-1.483.195-1.483 1.016V17.82a2.604 2.604 0 0 1-2.605 2.603h12.138c2.084 0 3.24-1.403 3.24-3.672l.002-2.869"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.863 20.424a2.6 2.6 0 0 1-1.844-.759 2.6 2.6 0 0 1-.769-1.844v-7.248c0-.831.795-1.37 1.484-1.016l.653.345c.388.203.838.212 1.244.035"
    />
  </Svg>
);
export default IconlystReceiptBillCheckBroken;
