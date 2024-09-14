import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbDislikeSquareBulk = ({
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
      d="M20.47 3.951c-.947-.95-2.243-1.451-3.748-1.451H8.284c-3.158 0-5.279 2.221-5.279 5.527v7.942c0 3.306 2.121 5.527 5.28 5.527h8.43c3.157 0 5.28-2.221 5.28-5.527v-7.94c.004-1.638-.538-3.086-1.526-4.078"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.71 13.944c.16-.32.16-.625.16-1.13v-3.86c0-.506 0-.81-.16-1.13a1.53 1.53 0 0 0-.68-.682c-.32-.158-.624-.158-1.21-.158-.504 0-.81 0-1.13.16a1.5 1.5 0 0 0-.508.443l-.595-.302c-.197-.1-.3-.149-.421-.19a2 2 0 0 0-.375-.088 3.4 3.4 0 0 0-.472-.02H10.01c-.642 0-.996 0-1.37.15-.342.14-.642.37-.868.665-.243.321-.341.681-.504 1.285l-.264.977-.002.006c-.3 1.12-.467 1.737-.293 2.344a2.28 2.28 0 0 0 1.019 1.331c.514.31 1.119.326 2.174.327-.255 1.103-.202 1.972.158 2.59.256.438.667.736 1.158.837.138.027.328.038.516.038.154 0 .305-.007.48-.065.18-.059.362-.17.496-.3.152-.146.232-.301.336-.502v-.003c.586-1.143 1.058-1.86 1.368-2.242l.034.028c.075.062.151.125.24.17.32.16.643.16 1.132.16h.08c.507 0 .812 0 1.129-.159a1.5 1.5 0 0 0 .68-.68M16.357 8.46c.015.061.015.28.015.492v3.861c0 .212 0 .431.023.454-.062.015-.28.015-.492.015h-.081c-.212 0-.431 0-.455.024-.015-.062-.015-.281-.015-.493V8.952c0-.212 0-.431-.025-.454.062-.015.282-.015.576-.015.212 0 .432 0 .454-.023m-2.505.64v3.786c-.472.35-1.152 1.168-2.14 3.098l-.025.052-.073-.002q-.053 0-.095-.006a.23.23 0 0 1-.162-.124c-.075-.13-.286-.665.185-2.128.04-.13.102-.325.043-.548a.97.97 0 0 0-.405-.543c-.2-.114-.386-.114-.521-.114h-.571c-.812 0-1.398 0-1.585-.112a.8.8 0 0 1-.35-.458c-.06-.209.092-.77.305-1.559l.262-.97.007-.027c.102-.378.176-.65.24-.735a.56.56 0 0 1 .238-.183c.102-.04.397-.04.807-.04h2.308l.043-.001c.104-.001.163-.002.229.007a1 1 0 0 1 .094.021c.046.017.09.039.162.076l.079.04z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystThumbDislikeSquareBulk;