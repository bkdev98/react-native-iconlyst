import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshTriangleLight = ({
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
      d="m18.73 13.967.94 1.647c.664 1.16-.18 2.61-1.52 2.61h-7.095"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.838 16.438-1.787 1.786 1.777 1.778M7.746 18.222H5.853c-1.347 0-2.192-1.46-1.519-2.62l.947-1.645M9.598 6.487l.93-1.612c.673-1.168 2.362-1.168 3.036.009l.912 1.603M6.51 11.828 8.37 8.62M15.686 8.621l1.825 3.198"
    />
  </Svg>
);
export default IconlystRefreshTriangleLight;
