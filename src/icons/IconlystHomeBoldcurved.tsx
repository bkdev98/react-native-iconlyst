import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeBoldcurved = ({
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
      d="M15.158 16.885H9.343a.75.75 0 0 1 0-1.5h5.815a.75.75 0 0 1 0 1.5M19.5 6.158c-.363-.32-.776-.682-1.268-1.137-.223-.18-.467-.386-.726-.604-1.46-1.231-3.46-2.917-5.283-2.917-1.802 0-3.673 1.592-5.176 2.871-.278.236-.538.458-.803.673-.466.432-.879.795-1.243 1.116-2.387 2.101-2.836 2.652-2.836 7.553 0 8.787 2.541 8.787 10.086 8.787 7.544 0 10.086 0 10.086-8.787 0-4.902-.449-5.453-2.837-7.555"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHomeBoldcurved;
