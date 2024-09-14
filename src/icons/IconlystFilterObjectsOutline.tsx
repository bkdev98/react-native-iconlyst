import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterObjectsOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M3.909 13.99c.463-.496 1.112-.76 1.841-.76h3.12c.732 0 1.38.264 1.844.76.457.492.677 1.15.677 1.85v2.94c0 .7-.22 1.359-.677 1.85-.463.497-1.112.76-1.843.76H5.75c-.731 0-1.38-.263-1.844-.76-.457-.491-.677-1.15-.677-1.85v-2.94c0-.7.222-1.359.679-1.85m1.097 1.023c-.156.167-.276.438-.276.827v2.94c0 .39.12.662.275.828.15.16.385.283.745.283h3.12c.36 0 .596-.122.746-.283.155-.166.275-.438.275-.828v-2.94c0-.39-.12-.66-.275-.827-.15-.16-.385-.283-.745-.283H5.75c-.359 0-.595.122-.745.283M18.403 14.482a2.827 2.827 0 1 0 .001 5.655 2.827 2.827 0 0 0-.001-5.655m-4.327 2.828a4.327 4.327 0 1 1 8.655 0 4.327 4.327 0 0 1-8.655 0M11.18 3.152a1.579 1.579 0 0 1 2.737.007l2.891 5.076a1.578 1.578 0 0 1-1.37 2.359h-5.82a1.578 1.578 0 0 1-1.367-2.366zm1.298.75L9.551 8.978a.1.1 0 0 0-.012.039q0 .016.012.04a.1.1 0 0 0 .028.029q.009.008.04.009h5.819q.03-.001.039-.01a.1.1 0 0 0 .028-.029.1.1 0 0 0 .011-.039.1.1 0 0 0-.01-.038l-2.891-5.075a.1.1 0 0 0-.028-.03.1.1 0 0 0-.04-.01.1.1 0 0 0-.04.01.1.1 0 0 0-.029.03"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFilterObjectsOutline;
