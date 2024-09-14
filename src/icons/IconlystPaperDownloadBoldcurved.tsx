import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperDownloadBoldcurved = ({
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
      d="M17.26 8.674a2.99 2.99 0 0 1-2.99-2.98V3.652l5.282 5.022zm-3.49 6.019-2.345 2.353a.75.75 0 0 1-1.064 0l-2.344-2.353a.751.751 0 0 1 1.063-1.059l1.063 1.068v-4.224a.75.75 0 0 1 1.5 0v4.225l1.065-1.069a.749.749 0 1 1 1.062 1.059m7.185-5.843c0-.04 0-.07-.01-.11-.03-.18-.06-.36-.09-.53a.5.5 0 0 0-.15-.28l-5.67-5.4a.46.46 0 0 0-.27-.13l-.53-.06c-.03-.01-.07-.01-.1-.01-.58-.05-1.22-.08-1.89-.08-6.56 0-8.89 2.55-8.89 9.75 0 7.19 2.33 9.75 8.89 9.75 6.57 0 8.9-2.56 8.9-9.75 0-1.2-.06-2.24-.19-3.15"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPaperDownloadBoldcurved;
