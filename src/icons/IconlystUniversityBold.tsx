import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUniversityBold = ({
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
      d="M9.72 7.881c0-.41.33-.75.75-.75h3.06a.749.749 0 1 1 0 1.5h-3.06c-.42 0-.75-.33-.75-.75m-6.04 3.5h16.64c.65 0 1.18-.52 1.18-1.18v-.66c0-.4-.21-.78-.54-.99l-8.31-5.36c-.4-.26-.9-.26-1.29 0l-8.32 5.36c-.33.21-.54.59-.54.99v.66c0 .66.53 1.18 1.18 1.18M21 20.106H3a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5M15.28 12.441c-.28 0-.5.22-.5.5v5.6c0 .28.22.5.5.5h3.2c.27 0 .5-.22.5-.5v-5.6c0-.28-.23-.5-.5-.5zM5.52 12.441c-.27 0-.5.22-.5.5v5.6c0 .28.23.5.5.5h3.2c.28 0 .5-.22.5-.5v-5.6c0-.28-.22-.5-.5-.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUniversityBold;
