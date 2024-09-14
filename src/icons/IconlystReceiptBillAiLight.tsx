import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReceiptBillAiLight = ({
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
      d="M8.218 5.276V17.82a2.604 2.604 0 0 1-2.605 2.604h12.138c2.084 0 3.24-1.403 3.24-3.672L21 5.276c0-.83-.794-1.369-1.483-1.016l-.653.345a1.43 1.43 0 0 1-1.245.035l-1.845-.82a2.9 2.9 0 0 0-2.33 0l-1.846.82a1.43 1.43 0 0 1-1.244-.035L9.7 4.26c-.69-.353-1.483.195-1.483 1.016"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.613 20.424a2.6 2.6 0 0 1-1.844-.759A2.6 2.6 0 0 1 3 17.821v-7.248c0-.831.795-1.37 1.484-1.016l.653.344c.388.204.838.213 1.244.036l1.245-.556c.097-.045.344.07.592.202M15.855 12.667l.086-.233a3.2 3.2 0 0 1 1.893-1.896l.233-.086-.233-.086a3.2 3.2 0 0 1-1.893-1.896l-.086-.233-.086.233a3.2 3.2 0 0 1-1.893 1.896l-.233.086.233.086a3.2 3.2 0 0 1 1.893 1.896zM12.64 15.902a1.5 1.5 0 0 1 1.003-1.004 1.51 1.51 0 0 1-1.002-1.004 1.51 1.51 0 0 1-1.003 1.004c.48.146.857.523 1.003 1.004"
    />
  </Svg>
);
export default IconlystReceiptBillAiLight;
