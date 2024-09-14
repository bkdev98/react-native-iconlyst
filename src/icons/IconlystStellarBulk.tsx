import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStellarBulk = ({
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
      d="M12.5 2.504c-5.239 0-9.5 4.262-9.5 9.5s4.261 9.5 9.5 9.5 9.5-4.261 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m17.148 11.55.214-.119a.751.751 0 0 0-.723-1.313L8.3 14.708a.75.75 0 0 0 .723 1.315l6.633-3.652c-.184 1.585-1.52 2.823-3.154 2.823a.75.75 0 0 0 0 1.5 4.696 4.696 0 0 0 4.691-4.69c0-.15-.029-.303-.045-.454M7.638 12.587a.751.751 0 0 0 .723 1.315l8.34-4.59a.751.751 0 0 0-.724-1.316l-6.622 3.646c.182-1.586 1.515-2.828 3.146-2.828a.75.75 0 0 0 0-1.5 4.69 4.69 0 0 0-4.683 4.69c0 .15.03.306.045.459z"
    />
  </Svg>
);
export default IconlystStellarBulk;
