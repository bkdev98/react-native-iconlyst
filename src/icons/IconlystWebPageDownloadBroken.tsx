import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageDownloadBroken = ({
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
      d="M20.935 11.972V7.966C20.935 5.056 19.123 3 16.21 3H7.876C4.973 3 3.15 5.056 3.15 7.966v3.926M3.151 15.816c0 2.91 1.813 4.966 4.725 4.966h1.73M13.992 18.308 16.683 21m0 0 2.692-2.692M16.683 21v-6.338M6.456 6.508H6.4m2.511 0h-.055m2.512 0h-.056M18.49 9.414H3.151"
    />
  </Svg>
);
export default IconlystWebPageDownloadBroken;
