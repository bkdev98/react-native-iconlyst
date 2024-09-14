import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRubleCircleBold = ({
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
      d="M13.58 9.313h-2.025v2.71h2.025c.75 0 1.359-.607 1.359-1.35 0-.75-.61-1.36-1.36-1.36"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.58 13.523h-2.025v.4h.777a.75.75 0 0 1 0 1.5h-.777v.89a.75.75 0 0 1-1.5 0v-.89H9.9a.75.75 0 0 1 0-1.5h.155v-.4H9.9a.75.75 0 0 1 0-1.5h.155v-3.46a.75.75 0 0 1 .75-.75h2.775a2.863 2.863 0 0 1 2.859 2.86 2.86 2.86 0 0 1-2.859 2.85M12 2.563c-5.238 0-9.5 4.262-9.5 9.5 0 5.237 4.262 9.5 9.5 9.5s9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRubleCircleBold;