import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSanitizerOutline = ({
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
      d="M5.625 12.75A3.75 3.75 0 0 1 9.375 9h5.25a3.75 3.75 0 0 1 3.75 3.75V18a3.75 3.75 0 0 1-3.75 3.75h-5.25A3.75 3.75 0 0 1 5.625 18zm3.75-2.25a2.25 2.25 0 0 0-2.25 2.25V18a2.25 2.25 0 0 0 2.25 2.25h5.25a2.25 2.25 0 0 0 2.25-2.25v-5.25a2.25 2.25 0 0 0-2.25-2.25z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 12.762a.75.75 0 0 1 .75.75v1.112h1.112a.75.75 0 0 1 0 1.5H12.75v1.112a.75.75 0 0 1-1.5 0v-1.112h-1.112a.75.75 0 0 1 0-1.5h1.112v-1.112a.75.75 0 0 1 .75-.75M9 7.875a2.25 2.25 0 0 1 2.25-2.25h1.5A2.25 2.25 0 0 1 15 7.875V9.75a.75.75 0 0 1-1.5 0V7.875a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75V9.75a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 2.25a.75.75 0 0 1 .75.75v3.375a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9 3a.75.75 0 0 1 .75-.75h4.797c.729 0 1.428.29 1.944.805l1.664 1.665a.75.75 0 0 1-1.06 1.06L15.43 4.116a1.25 1.25 0 0 0-.884-.366H9.75A.75.75 0 0 1 9 3"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSanitizerOutline;
