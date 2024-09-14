import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKelvinLineOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M6.768 5.68a1.404 1.404 0 1 0 0 2.808 1.404 1.404 0 0 0 0-2.807M3.864 7.086a2.904 2.904 0 1 1 5.808-.001 2.904 2.904 0 0 1-5.808 0M12.332 6.267a.75.75 0 0 1 .75.75v11.475a.75.75 0 0 1-1.5 0V7.017a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.187 6.537a.75.75 0 0 1-.097 1.056l-8.266 6.88a.75.75 0 1 1-.96-1.153l8.267-6.88a.75.75 0 0 1 1.056.097"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.11 19.055a.75.75 0 0 0 .068-1.058l-5.762-6.566a.75.75 0 0 0-1.127.99l5.762 6.565a.75.75 0 0 0 1.058.07"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKelvinLineOutline;
