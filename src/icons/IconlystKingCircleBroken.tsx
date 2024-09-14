import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKingCircleBroken = ({
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
      d="M12.5 3a9 9 0 1 0 3.939.905"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.248 14.482c-.176-.999-.755-3.452-.933-4.46a.216.216 0 0 1 .35-.204l1.762 1.426c.089.073.22.063.296-.023l1.615-1.816a.214.214 0 0 1 .322 0l1.615 1.816a.215.215 0 0 0 .297.023l1.761-1.426c.156-.127.386.005.35.203l-.718 4.09a.676.676 0 0 1-.669.56H12.5"
    />
  </Svg>
);
export default IconlystKingCircleBroken;
