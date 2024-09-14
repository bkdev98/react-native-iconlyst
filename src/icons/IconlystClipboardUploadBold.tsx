import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClipboardUploadBold = ({
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
      d="M14.64 13.87c-.29.29-.76.29-1.06-.01l-.83-.83v3.62c0 .42-.33.75-.75.75-.41 0-.75-.33-.75-.75v-3.62l-.82.83c-.3.3-.77.3-1.06.01-.3-.3-.3-.77-.01-1.06l2.08-2.09c.14-.16.34-.25.56-.25.21 0 .4.08.54.22l2.11 2.12c.29.29.29.76-.01 1.06m2.253-9.488c-.12-.035-.238.054-.256.178a2.48 2.48 0 0 1-2.447 2.12H9.81a2.49 2.49 0 0 1-2.457-2.12c-.018-.124-.136-.213-.256-.177A4.25 4.25 0 0 0 4.07 8.46v8.9c0 2.34 1.9 4.25 4.25 4.25h7.36c2.35 0 4.25-1.91 4.25-4.25v-8.9a4.25 4.25 0 0 0-3.037-4.079"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.814 5.48h4.38c.68 0 1.24-.54 1.26-1.22.01-.02.01-.04.01-.06v-.54c0-.7-.57-1.27-1.27-1.27h-4.38c-.7 0-1.28.57-1.28 1.27v.54c0 .02 0 .03.01.05.02.69.59 1.23 1.27 1.23"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystClipboardUploadBold;
