import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKingTwoTone = ({
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
      d="M4.08 16.306 3.5 7.33a.55.55 0 0 1 .932-.43l2.62 2.556s2.996-2.982 4.554-4.54a1.275 1.275 0 0 1 1.81.002c1.544 1.558 4.53 4.542 4.53 4.542s1.543-1.515 2.622-2.571c.36-.353.963-.072.93.43l-.578 8.987a3.37 3.37 0 0 1-3.362 3.153H7.442a3.37 3.37 0 0 1-3.363-3.152"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.984 14.844h17.03M12.5 10.2v.047m.19-.037a.19.19 0 1 1-.381 0 .19.19 0 0 1 .38 0"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystKingTwoTone;
