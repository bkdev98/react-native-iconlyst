import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchDocumentTextBulk = ({
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
      d="M11.252 2.623c-4.74 0-8.6 3.86-8.6 8.6a8.6 8.6 0 1 0 8.6-8.6"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.02 8.145h3.5a.749.749 0 1 1 0 1.5h-3.5a.749.749 0 1 1 0-1.5M19.58 17.845c-.97 0-1.76.8-1.76 1.77s.79 1.76 1.76 1.76 1.77-.79 1.77-1.76-.8-1.77-1.77-1.77"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M12.02 6.525a.749.749 0 1 1 0-1.5h5.18c.208.185.748.744 1.25 1.5z"
    />
  </Svg>
);
export default IconlystSearchDocumentTextBulk;
