import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCamp4Bold = ({
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
      d="m11.15 6.3-2.39 4.434a.2.2 0 0 0 .034.236c.208.21.684.694 1.018 1.039a.2.2 0 0 0 .29 0l1.352-1.41a.774.774 0 0 1 1.082 0l1.356 1.412a.2.2 0 0 0 .288 0c.337-.345.817-.83 1.026-1.041a.2.2 0 0 0 .034-.236L12.85 6.3l.84-1.56c.2-.36.06-.82-.3-1.02a.757.757 0 0 0-1.02.31l-.37.69-.37-.69a.745.745 0 0 0-1.01-.31c-.37.2-.51.65-.31 1.02zM21 20.61h-.44l-4.382-8.134a.2.2 0 0 0-.32-.045l-1.284 1.331a.75.75 0 0 1-.54.23h-.001a.75.75 0 0 1-.54-.23l-1.354-1.411a.2.2 0 0 0-.288 0l-1.354 1.41a.75.75 0 0 1-1.082 0l-1.273-1.327a.2.2 0 0 0-.32.043L3.44 20.61H3a.749.749 0 1 0 0 1.5h5.223c.1 0 .18-.075.213-.169a1 1 0 0 1 .039-.086l2.865-5.31c.262-.486 1.058-.486 1.32 0l2.865 5.31a1 1 0 0 1 .038.086c.034.094.114.17.214.17H21a.749.749 0 1 0 0-1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.2 21.815a.2.2 0 0 0 .177.294h3.246a.2.2 0 0 0 .176-.295l-1.623-3.008a.2.2 0 0 0-.352 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCamp4Bold;
