import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageRefresh2Light = ({
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
      d="M21 12.082V8.027C21 5.081 19.166 3 16.218 3H7.782C4.842 3 3 5.081 3 8.027v7.947C3 18.92 4.834 21 7.782 21h1.75M16.231 19.25H14.35V21M20.126 14.648v1.882h-1.882M6.345 6.55h-.056m2.541 0h-.055m2.54 0h-.055M21 9.491H3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.414 16.38a3.04 3.04 0 0 1 2.654-1.534c2.043 0 3.058 1.694 3.058 1.694M19.714 19.428a3.05 3.05 0 0 1-2.645 1.524c-1.684 0-2.72-1.693-2.72-1.693"
    />
  </Svg>
);
export default IconlystWebPageRefresh2Light;
