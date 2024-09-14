import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinMobilePhoneBulk = ({
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
      d="M6.046 18.05c-.185 0-.326.166-.28.346.452 1.78 2.057 3.104 3.976 3.104h5.515c1.92 0 3.525-1.324 3.98-3.104.045-.18-.097-.346-.282-.346z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.076 16.55a.3.3 0 0 0 .3-.3l-.001-9.63a4.124 4.124 0 0 0-4.118-4.12H9.742a4.124 4.124 0 0 0-4.118 4.12l.001 9.63a.3.3 0 0 0 .3.3z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.835 6.36a.75.75 0 0 0-.75.75v6.04c0 .415.336.75.75.75h.822v.14a.75.75 0 0 0 1.5 0v-.154a2.26 2.26 0 0 0 1.528-.725c.427-.47.638-1.105.579-1.741a2.2 2.2 0 0 0-.586-1.273l.003-.003.004-.003a2.28 2.28 0 0 0 .579-1.74c-.101-1.075-1.009-1.922-2.107-2.02v-.17a.75.75 0 0 0-1.5 0v.15zm2.176 3.02a.75.75 0 0 0 .564-.25.76.76 0 0 0 .195-.59c-.035-.38-.397-.68-.822-.68h-1.363v1.52zm-1.426 1.5h1.362c.418 0 .787.307.822.68a.76.76 0 0 1-.759.84h-1.425z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBitcoinMobilePhoneBulk;
