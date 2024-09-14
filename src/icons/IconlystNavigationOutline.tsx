import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNavigationOutline = ({
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
      d="m20.786 7.103-1.87 4.51a1.22 1.22 0 0 0 .004.942l1.83 4.32c.98 2.315-1.436 4.607-3.696 3.505L5.027 14.513C3 13.523 2.99 10.64 5.007 9.635l12.055-6.008c2.25-1.121 4.688 1.152 3.724 3.476M17.731 4.97c1.01-.503 2.102.516 1.67 1.558l-1.87 4.51a2.72 2.72 0 0 0 .008 2.102l1.83 4.32c.44 1.037-.644 2.066-1.658 1.572L5.685 13.165c-.909-.444-.914-1.736-.01-2.187z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNavigationOutline;
