import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchDocumentTextBold = ({
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
      d="M12.02 8.145h3.5a.749.749 0 1 1 0 1.5h-3.5a.749.749 0 1 1 0-1.5m6.43-1.62h-6.43a.749.749 0 1 1 0-1.5h5.18a8.6 8.6 0 0 0-5.95-2.4c-4.74 0-8.6 3.86-8.6 8.6 0 4.75 3.86 8.6 8.6 8.6s8.6-3.85 8.6-8.6c0-1.73-.51-3.34-1.4-4.7M19.58 17.845c-.97 0-1.76.8-1.76 1.77s.79 1.76 1.76 1.76 1.77-.79 1.77-1.76-.8-1.77-1.77-1.77"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchDocumentTextBold;
