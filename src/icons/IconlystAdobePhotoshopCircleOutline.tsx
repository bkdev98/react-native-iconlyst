import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdobePhotoshopCircleOutline = ({
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
      d="M12 21.75c-5.38 0-9.75-4.37-9.75-9.75S6.62 2.25 12 2.25s9.75 4.37 9.75 9.75-4.37 9.75-9.75 9.75m0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25"
    />
    <Path
      fill={props.color}
      d="M14.71 16.13c-.48 0-.92-.09-1.24-.21a.753.753 0 0 1-.42-.97c.15-.39.59-.57.97-.42.4.16 1.18.15 1.49-.09.06-.04.09-.08.08-.22-.01-.08-.02-.2-.43-.36l-.78-.31c-.31-.12-1.23-.5-1.36-1.58-.08-.64.15-1.21.65-1.59.87-.67 2.25-.58 2.96-.29.38.15.57.59.42.98-.15.38-.59.57-.97.42-.4-.16-1.17-.15-1.48.09-.06.04-.09.08-.08.22.01.08.03.2.43.36l.78.31c.31.13 1.23.5 1.36 1.57.08.64-.15 1.21-.65 1.59-.48.37-1.12.51-1.72.51zM7.66 16.128c-.41 0-.75-.34-.75-.75v-6.61c0-.35.24-.65.57-.73.26-.06 2.56-.59 3.94.49.44.34.96.99.96 2.14s-.52 1.81-.95 2.16c-.88.71-2.15.76-3.01.7v1.84c0 .41-.34.75-.75.75zm.75-4.1c.65.06 1.58.04 2.07-.36.17-.13.39-.38.39-.98s-.22-.83-.38-.96c-.5-.39-1.43-.39-2.08-.31v2.62z"
    />
  </Svg>
);
export default IconlystAdobePhotoshopCircleOutline;
