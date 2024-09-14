import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGifFormat2Outline = ({
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
      d="M2.632 4.862c.86-.923 2.083-1.436 3.519-1.436h11.866c1.439 0 2.662.513 3.523 1.437.854.918 1.294 2.18 1.294 3.587v7.103c0 1.407-.44 2.67-1.295 3.587-.86.924-2.084 1.437-3.523 1.437H6.15c-1.439 0-2.662-.513-3.523-1.437-.854-.918-1.294-2.18-1.294-3.587V8.45c0-1.408.442-2.67 1.298-3.588m1.097 1.023c-.554.594-.895 1.469-.895 2.565v7.103c0 1.097.34 1.972.892 2.565.547.587 1.357.959 2.425.959h11.865c1.069 0 1.879-.372 2.426-.96.552-.593.892-1.467.892-2.564V8.45c0-1.097-.34-1.972-.892-2.565-.547-.587-1.357-.96-2.425-.96H6.151c-1.064 0-1.874.372-2.422.96"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.86 9.125a.75.75 0 0 1 .75-.75h3.114a.75.75 0 0 1 0 1.5h-2.365v5.001a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.86 12.48a.75.75 0 0 1 .75-.75h2.635a.75.75 0 1 1 0 1.5h-2.636a.75.75 0 0 1-.75-.75M12.607 8.375a.75.75 0 0 1 .75.75v5.751a.75.75 0 0 1-1.5 0V9.125a.75.75 0 0 1 .75-.75M4.697 11.818c.08-1.906 1.66-3.626 3.683-3.525.522.026 1.016.16 1.459.38a.75.75 0 0 1-.666 1.344 2.2 2.2 0 0 0-.867-.226c-1.076-.054-2.06.896-2.11 2.089-.056 1.36.816 2.33 1.996 2.33.427 0 .667-.08.783-.162.069-.049.158-.136.158-.427v-.872h-.94a.75.75 0 0 1 0-1.5h1.69a.75.75 0 0 1 .75.75v1.622c0 .696-.263 1.278-.792 1.652-.483.341-1.088.437-1.649.437-2.19 0-3.58-1.845-3.495-3.892"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGifFormat2Outline;
