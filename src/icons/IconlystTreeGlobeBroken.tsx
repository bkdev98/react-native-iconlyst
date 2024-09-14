import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTreeGlobeBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.063 11.693h-1.409q.817 1.662 1.966 2.9H8.38q1.149-1.239 1.966-2.9h-1.41C10.103 10.326 11.106 8.7 12 6.918c.429.856.883 1.675 1.37 2.447M11.998 14.593v3.552"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 3.365a7.839 7.839 0 0 0-3.645 14.78h7.29a7.84 7.84 0 0 0-.553-14.147M8.374 18.18l-.794 1.237c-.505.79-.758 1.184-.738 1.51a1 1 0 0 0 .408.745c.264.193.732.193 1.67.193H12M15.083 21.865c.937 0 1.406 0 1.67-.193a1 1 0 0 0 .407-.745c.02-.326-.233-.72-.738-1.51l-.797-1.243"
    />
  </Svg>
);
export default IconlystTreeGlobeBroken;
