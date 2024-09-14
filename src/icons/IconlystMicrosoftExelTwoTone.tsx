import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrosoftExelTwoTone = ({
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
      d="M7.865 16.87v.834c0 1.588.998 2.718 2.596 2.718h7.95c1.6 0 2.587-1.13 2.587-2.718V6.292c0-1.588-.988-2.718-2.586-2.718h-7.95c-1.6 0-2.597 1.13-2.597 2.718v.835"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.588 7.129h4.564c1.595 0 2.587 1.126 2.587 2.72v4.3c0 1.594-.992 2.72-2.587 2.72H5.588C3.993 16.87 3 15.743 3 14.15v-4.3c0-1.594.997-2.72 2.588-2.72"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.219 3.578v11.489c0 .501.406.908.908.908h3.872M20.997 11.996h-8.256M12.17 8.023H21M9.16 10.133l-2.768 3.719m-.001-3.72 2.769 3.72"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMicrosoftExelTwoTone;
