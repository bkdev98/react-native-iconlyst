import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdEditBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.542 18.82H7.214c-2.444 0-3.965-1.725-3.965-4.167V8.066c0-2.442 1.528-4.168 3.965-4.168H9.12M21.25 11.36V8.065c0-2.442-1.52-4.168-3.965-4.168H12.25M3.25 9.192h15.149M20.163 16.107a.97.97 0 0 0-.052-1.372l-.65-.601a.97.97 0 0 0-1.372.052l-3.08 3.363a1.7 1.7 0 0 0-.422.948l-.079.728c-.056.523.401.954.918.867l.707-.118c.38-.064.727-.255.984-.543l1.308-1.428"
    />
  </Svg>
);
export default IconlystBankCarrdEditBroken;
