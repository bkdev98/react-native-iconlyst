import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleHeart1Light = ({
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
      d="M20.841 14.894c.459-1.431-.076-3.067-1.579-3.55a2.56 2.56 0 0 0-2.32.39 2.58 2.58 0 0 0-2.314-.39c-1.502.483-2.041 2.119-1.583 3.55.713 2.267 3.898 4.015 3.898 4.015s3.16-1.722 3.898-4.015"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.299 16.857a20.7 20.7 0 0 1-3.576 2.243s-5.98-2.784-7.422-7.17c-.87-2.735.15-5.87 3.015-6.801a4.9 4.9 0 0 1 2.294-.16c.76.13 1.492.66 2.113 1.13.62-.47 1.352-.99 2.113-1.121a4.9 4.9 0 0 1 2.294.15c2.623.862 3.705 3.556 3.195 6.1"
    />
  </Svg>
);
export default IconlystDoubleHeart1Light;
