import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageUploadTwoTone = ({
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
      d="M21.435 11.973V7.966C21.435 5.056 19.622 3 16.71 3H8.376C5.473 3 3.651 5.056 3.651 7.966v7.852c0 2.91 1.813 4.966 4.725 4.966h1.73M19.874 17.353l-2.692-2.69m0 0-2.692 2.69m2.692-2.69L17.183 21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.956 6.508H6.9m2.511 0h-.055m2.512 0h-.055M21.436 9.414H3.652"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWebPageUploadTwoTone;
