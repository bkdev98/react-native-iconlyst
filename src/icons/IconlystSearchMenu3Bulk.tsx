import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchMenu3Bulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M20.475 10.658a8.42 8.42 0 0 1-8.42 8.42c-2.39 0-4.55-1-6.08-2.6a.749.749 0 0 0-.66-1.1h-.23c-.47-.69-.83-1.46-1.08-2.27h4.93c.42 0 .75-.34.75-.75 0-.42-.33-.75-.75-.75h-5.24c-.03-.31-.05-.63-.05-.95 0-.44.03-.88.1-1.3h2.3a.749.749 0 1 0 0-1.5h-1.92a8.4 8.4 0 0 1 7.93-5.62 8.42 8.42 0 0 1 8.42 8.42"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m21.919 19.535-1.983-1.98a1 1 0 0 0-1.413 1.417l1.984 1.979a1 1 0 1 0 1.412-1.416M5.313 15.825H2.675a.75.75 0 0 1 0-1.5h2.638a.75.75 0 0 1 0 1.5M8.938 12.055H2.675a.75.75 0 0 1 0-1.5h6.263a.75.75 0 0 1 0 1.5M6.043 8.305H2.675a.75.75 0 0 1 0-1.5h3.368a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchMenu3Bulk;
