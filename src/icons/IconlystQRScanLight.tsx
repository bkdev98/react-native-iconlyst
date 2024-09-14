import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystQRScanLight = ({
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
      d="M21 8.47V6.891A3.89 3.89 0 0 0 17.107 3H15.85M3 8.47V6.891A3.89 3.89 0 0 1 6.893 3h1.29M3 15.531v1.577A3.89 3.89 0 0 0 6.893 21H8.15M21 15.531v1.577A3.89 3.89 0 0 1 17.108 21h-1.29"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.354 10.277H7.64a.92.92 0 0 1-.922-.922V7.642c0-.51.412-.923.922-.923h1.713c.51 0 .922.413.922.923v1.713c0 .51-.413.922-.922.922M9.425 17.282H7.64a.92.92 0 0 1-.922-.923v-1.783c0-.51.412-.924.922-.924h1.784c.51 0 .922.414.922.924v1.783a.92.92 0 0 1-.922.922M14.575 6.719h1.783c.51 0 .923.412.923.922v1.784c0 .51-.413.922-.923.922h-1.783a.92.92 0 0 1-.923-.922V7.64c0-.51.413-.922.923-.922"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.24 17.28h-.061M17.34 17.28h-.06M17.34 14.182h-.06M15.79 15.729h-.06M14.24 14.182h-.061"
    />
  </Svg>
);
export default IconlystQRScanLight;
