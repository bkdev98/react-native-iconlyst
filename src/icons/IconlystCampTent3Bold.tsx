import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCampTent3Bold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m21.73 20.207-2.62-10.2-.09-.34v-.01a.8.8 0 0 0-.3-.43l-6.28-4.49a.785.785 0 0 0-.88 0l-6.28 4.49a.8.8 0 0 0-.3.43l-2.71 10.55c-.1.4.14.81.54.91s.81-.14.92-.54l1.811-7.053-.581 6.253c-.02.36.11.72.35.98.24.25.56.38.9.38h1.82c.42 0 .81-.21 1.03-.56.07-.11.17-.26.29-.42.65-.92 1.82-2.57 2.65-4.78.83 2.21 2 3.86 2.65 4.78.12.16.22.31.28.4.23.37.62.58 1.04.58h1.87c.34 0 .65-.13.89-.38.24-.26.37-.61.36-.93l-.764-6.303 1.944 7.053c.09.34.4.56.73.56.06 0 .12 0 .19-.02.4-.1.64-.51.54-.91"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCampTent3Bold;
