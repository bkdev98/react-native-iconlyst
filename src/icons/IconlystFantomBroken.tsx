import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFantomBroken = ({
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
      d="M4.347 15.125v2.129M20.654 5.816v2.13M11.661 20.775 7.738 18.51c-.52-.3-.84-.855-.84-1.455v-4.829l4.763-2.75c.52-.299 1.16-.299 1.68 0l4.763 2.75v4.829c0 .6-.32 1.155-.84 1.454l-1.961 1.133"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.341 3.225 3.923 2.265c.52.3.84.855.84 1.455v5.5l-4.763 2.749c-.52.3-1.16.3-1.68 0l-4.763-2.75V6.945c0-.6.32-1.155.84-1.455L9.7 4.357M12.502 15.42V9.313"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.139 6.084c.14.241.349.45.597.597l3.928 2.262a1.66 1.66 0 0 0 1.677 0l3.921-2.262a1.67 1.67 0 0 0 .604-.597"
    />
  </Svg>
);
export default IconlystFantomBroken;
