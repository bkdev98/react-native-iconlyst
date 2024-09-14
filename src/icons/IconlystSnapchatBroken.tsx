import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSnapchatBroken = ({
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
      d="M15.723 19.851c.655-.27 1.398-.515 2.368-.593.423-.034.793-.313.977-.695.71-1.462.919-1.554 2.68-2.33l.002-.001c-3.905-1.71-4.118-3.846-4.118-8.119a4.883 4.883 0 0 0-5.362-4.859C9.73 3.497 7.873 5.778 7.87 8.33c-.01 4.13-.279 6.223-4.119 7.903h.001c1.763.777 1.971.87 2.681 2.331.185.382.555.66.978.695 2.192.176 3.226 1.204 4.69 1.456"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.803 9.133c1.039.588 1.977 1.523 2.865 2.623M20.701 9.133c-1.039.588-1.977 1.523-2.865 2.623"
    />
  </Svg>
);
export default IconlystSnapchatBroken;
