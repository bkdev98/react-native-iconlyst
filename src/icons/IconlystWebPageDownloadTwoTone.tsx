import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageDownloadTwoTone = ({
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
      d="M21.435 11.972V7.966C21.435 5.056 19.623 3 16.71 3H8.376C5.473 3 3.65 5.056 3.65 7.966v7.851c0 2.91 1.813 4.966 4.725 4.966h1.73M14.492 18.308 17.183 21m0 0 2.692-2.692M17.183 21v-6.338"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.956 6.507H6.9m2.511 0h-.055m2.512 0h-.056M21.436 9.414H3.652"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWebPageDownloadTwoTone;
