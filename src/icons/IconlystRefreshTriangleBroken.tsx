import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshTriangleBroken = ({
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
      d="m18.731 14.219.938 1.646c.665 1.16-.179 2.61-1.518 2.61h-.887M14.603 18.473h-3.548M12.838 16.688l-1.787 1.786 1.777 1.778M7.746 18.472H5.853c-1.347 0-2.192-1.46-1.519-2.62l.947-1.645M9.598 6.737l.93-1.612c.673-1.168 2.362-1.168 3.036.009l.912 1.603M6.51 12.078 8.37 8.87M15.686 8.871l1.825 3.198"
    />
  </Svg>
);
export default IconlystRefreshTriangleBroken;
