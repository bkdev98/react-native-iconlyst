import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchDocumentBold = ({
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
      d="M14.354 10.238h-5.68c-.42 0-.75-.34-.75-.75 0-.42.33-.75.75-.75h5.68c.42 0 .75.33.75.75 0 .41-.33.75-.75.75m-2.84 3.47h-2.84c-.42 0-.75-.34-.75-.75 0-.42.33-.75.75-.75h2.84a.749.749 0 1 1 0 1.5m-.38-11.21a8.42 8.42 0 1 0 0 16.84 8.42 8.42 0 0 0 0-16.84M20.992 19.794l-1.983-1.979a1 1 0 0 0-1.413 1.417l1.984 1.978a1 1 0 1 0 1.412-1.416"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchDocumentBold;
