import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDragBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m12.981 8.835-.045-2.929c.04.007.077.025.119.025h3.049c.328.919 1.199 1.583 2.229 1.583a2.38 2.38 0 0 0 2.375-2.375 2.38 2.38 0 0 0-2.375-2.375c-1.03 0-1.901.664-2.23 1.583h-3.048c-.05 0-.095.02-.143.029l-.002-.13a1.774 1.774 0 0 0-3.547.027v.074H5.994l.232-.232a.79.79 0 1 0-1.12-1.119L3.524 4.58a.8.8 0 0 0-.17.863q.06.146.17.256l1.584 1.584a.79.79 0 0 0 .56.232.79.79 0 0 0 .56-1.351l-.233-.232h3.369v8.518l-1.27-1.842a1.94 1.94 0 0 0-2.29-.71c-.944.363-1.45 1.389-1.106 2.34.643 1.773 1.662 3.752 2.974 5.383 2.066 2.57 8.378 2.397 10.637.14 1.77-1.77 2.764-5.38 1.754-8.106-1.004-2.71-4.598-2.581-7.08-2.819"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDragBold;
