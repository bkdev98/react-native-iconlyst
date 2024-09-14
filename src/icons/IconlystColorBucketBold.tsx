import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystColorBucketBold = ({
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
      d="M21.37 18.188c-.71-1.05-1.76-1.75-1.8-1.78a.74.74 0 0 0-.83 0c-.05.03-1.1.73-1.82 1.8-.48.78-.49 1.84-.01 2.7.46.83 1.3 1.32 2.24 1.32.95 0 1.78-.49 2.25-1.32.47-.86.47-1.92-.03-2.72M18.84 12.468c-.42.14-2.41-.58-5.02-3.18-2.54-2.54-3.28-4.51-3.21-4.95v-.01l.03-.04c.03-.02.08-.02.13-.02.6 0 2.49.79 4.89 3.19 2.6 2.6 3.31 4.6 3.18 5.01m.87 1.22.12-.09c.03-.02.05-.04.07-.07.04-.04.07-.07.1-.12.4-.48.61-1.41-.3-3.13-.63-1.22-1.69-2.59-2.98-3.88-2.41-2.42-5.58-4.42-7.01-3.28-.04.02-.08.05-.11.09-.01 0-.01 0-.02.01a.24.24 0 0 0-.06.08l-.14.17-6.44 8.43c-.76.99-.9 2.33-.38 3.48.5 1.07 1.25 2.15 2.14 3.03.88.89 1.96 1.64 3.03 2.14.46.21.95.31 1.44.31.73 0 1.45-.23 2.04-.69l8.49-6.47z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystColorBucketBold;
