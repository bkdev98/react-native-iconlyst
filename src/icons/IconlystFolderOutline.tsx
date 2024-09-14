import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.643 2a3.05 3.05 0 0 1 2.425 1.214l.91 1.212c.29.384.749.613 1.229.614h2.829c3.862 0 5.66 1.979 5.66 6.228l-.027 4.967c-.001 3.968-2.467 6.434-6.437 6.434H8.45c-3.978 0-6.45-2.467-6.45-6.437V8.433C2 4.164 3.899 2 7.643 2zm-.001 1.5h-2C4.74 3.5 3.5 4.976 3.5 8.433v7.799c0 3.184 1.758 4.937 4.95 4.937h7.782c3.184 0 4.937-1.753 4.937-4.937v-.003l.028-4.965c0-3.399-1.166-4.724-4.161-4.724h-2.83a3.05 3.05 0 0 1-2.425-1.212l-.913-1.214A1.54 1.54 0 0 0 9.642 3.5m7.074 10.713a.75.75 0 0 1 0 1.5H7.98a.75.75 0 0 1 0-1.5z"
    />
  </Svg>
);
export default IconlystFolderOutline;
