import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinDumpLight = ({
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
      d="M4.785 10.903a7.903 7.903 0 1 1 12.322 6.554M11.27 20.385l2.136.615.615-2.137"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.41 13.914 2.253 3.635 4.93-1.476 2.815 4.926M13.162 10.527H11.27v2.709h1.95c.791 0 1.424-.68 1.348-1.488-.068-.704-.699-1.22-1.406-1.22"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.162 7.82H11.27v2.709h1.95c.791 0 1.424-.68 1.348-1.488-.068-.704-.699-1.22-1.406-1.22M12.68 14.037v-.799M12.68 7.818V7.02"
    />
  </Svg>
);
export default IconlystBitcoinDumpLight;
